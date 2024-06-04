import Router from "express"
import fs from 'fs'
import {google} from "googleapis"
import multer from "multer"
import path from "path"
import {client_email, private_key} from "../../constants.mjs"

const router = Router()

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

router.post("/", upload.single("file"), async (req,res)=>{
    try{
        filename = req.file.filename
        const fileuploadResponse = await authorize().then(uploadFile).catch("error",console.error())

        await fs.unlink(`./public/temp/${filename}`, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File deleted successfully!');
            }
        });

        res.send({roomSecretID : fileuploadResponse.data.id , message : "fileuploaded successfully"})
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
            
            res.download(filepath)
        })

    }catch(error){
        console.log(error)
    }
})


export default router