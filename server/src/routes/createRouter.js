const express = require('express')
const fs = require('fs')
const {google} = require('googleapis')
const multer = require('multer')
const path = require('path')
const {client_email,private_key} = require('../../constants')
const Room = require('../models/createRoom')
const crypto = require('crypto')
const Project = require('../models/project')
const User = require("../models/user")

const router = express.Router()

const SCOPE = ['https://www.googleapis.com/auth/drive']

async function authorize(){
    const jwtClient = new google.auth.JWT(
        client_email,
        null,
        private_key,
        SCOPE
    );

    await jwtClient.authorize()

    return jwtClient
}

let filename = ""

async function uploadFile(authClient){
    return new Promise((resolve,rejected)=>{
        const drive = google.drive({version:'v3',auth:authClient})
        const filepath = `./public/temp/${filename}`

        var fileMetaData = {
            name:filename,    
            parents:['1fnkhuzv-8GbO88pL4sPYieJ9Ciaw096l'] 
        }

        drive.files.create({
            resource:fileMetaData,
            media:{
                body: fs.createReadStream(filepath), 
                mimeType:'application/zip'
            },
            fields:'id'
        },function(error,file){
            if(error){
                return rejected(error)
            }
            resolve(file)
        })
    })
}

async function downloadFile(fileId) {
    const authClient = await authorize();
    const drive = google.drive({ version: 'v3', auth: authClient });
  
    try {
        const response = await drive.files.get({ fileId, alt: 'media' }, { responseType: 'stream' })
        const dest = fs.createWriteStream(`./public/downloads/sourcecode.zip`)
    
        response.data
            .on('end', () => {
            console.log('File downloaded successfully!')
            })
            .on('error', (err) => {
            console.error('Error downloading file:', err)
            })
            .pipe(dest);
    } catch (err) {
        console.error('Error downloading file:', err)
    }
}

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        return cb(null, "./public/temp")
    },
    filename : function (req, file, cb){
        return cb(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})

function generateUniqueHexId() {
    const randomBytes = crypto.randomBytes(20);
    const hexString = randomBytes.toString('hex')
    return hexString.slice(0, 15)
}

router.post('/project', async (req,res)=>{
    try{
        filename = req.file.filename
        const fileuploadResponse = await authorize().then(uploadFile).catch("error",console.error())
        const project_id = generateUniqueHexId()

        const {Owner, Image, Premium, Title, Description, Topic, FileID, Link, ProjectID,OfferPrice} = {
            Owner : req.body.email,
            Image : req.body.image,
            Premium: req.body.premium,
            Title : req.body.title,
            Description: req.body.description,
            Topic : req.body.topic,
            FileID : fileuploadResponse.data.id,
            Link : req.body.link,
            OfferPrice : req.body.offerPrice,
            ProjectID : project_id
        }


        if (!Owner || !Image || !Premium || !Title || !Description || !FileID || !Link || !OfferPrice || !ProjectID) {
            return res.status(400).json({ message: 'Please fill in all required fields' })
        }

        const newProject = new Project({Owner, Image, Premium, Title, Description, Topic, FileID, Link, ProjectID, OfferPrice, Offers : [], Sold : {}})
        await newProject.save()

        await fs.unlink(`./public/temp/${filename}`, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File deleted successfully!');
            }
        })

        const user = User.findOneAndUpdate({"UserInfo.email" : req.body.email},{ 
            $push : {
                "Profile.Projects" : project_id,
            }
        })

        await user.save()

        res.send({ message : "Project created successfully"})
    }catch(error)
    {
        console.log(error)
    }
})

router.post("/room", upload.single("file"), async (req,res)=>{
    try{
        filename = req.file.filename
        const fileuploadResponse = await authorize().then(uploadFile).catch("error",console.error())
        const room_id = generateUniqueHexId()

        const {Owner ,Image,Premium,Time,Title,Description,FileID, RoomID, RoomSecret} = {
            Owner : req.body.email,
            Image : req.body.image,
            Premium: req.body.premium,
            Time: req.body.date,
            Title : req.body.title,
            Description: req.body.description,
            FileID : fileuploadResponse.data.id,
            RoomID : room_id
        }


        if (!Owner || !Image || !Premium || !Time || !Title || !Description || !FileID || !RoomID ) {
            return res.status(400).json({ message: 'Please fill in all required fields' })
        }

        const newRoom = new Room({Owner ,Image,Premium,Time,Title,Description,FileID, RoomID, Bids : [], Sold : {}})
        await newRoom.save()
        console.log("Room created successfully")

        fs.unlink(`./public/temp/${filename}`, (err) => {
            if (err) {
                console.error(err)
            } else {
                console.log('File deleted successfully!')
            }
        })

        const user = await User.findOneAndUpdate({"UserInfo.email" : req.body.email},{ 
            $push : {
                "Profile.RoomsCreated" : room_id,
            }
        })
        await user.save()

        res.send({ RoomID : room_id})
    }catch(error)
    {
        console.log(error)
    }
})

router.post("/download",async(req, res) => {
    const fileID = req.body.fileID 
    try{
        await downloadFile(fileID).catch(console.error)

        res.redirect("https://devauction.onrender.com/uploads/sendfile")

    }catch(error){
        console.log(error)
    }
})

router.get("/sendfile",async(req, res) => {  
    try{
        const folderPath = process.argv[1]
        const filepath = `${path.dirname(folderPath)}/public/downloads/sourcecode.zip`

        fs.access(filepath, fs.constants.F_OK, (err) => {
            if (err) {
                return res.status(404).send('File not found')
            }
            
            res.sendFile(filepath, (err) => {
                if (err) {
                  console.error('Error sending file:', err)
                  res.status(500).send('Error sending file')
                  return
                }
          
                fs.unlink("./public/downloads/sourcecode.zip", (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('File deleted successfully!');
                    }
                })
            })
        })

    }catch(error){
        console.log(error)
    }
})

module.exports = router
