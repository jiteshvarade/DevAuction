import nodemailer from "nodemailer"
import {EMAIL, APP_PASSWD} from "../../constants.mjs"

const transporter = nodemailer.createTransport({
    service : "gmail",
    host : "smtp.gmail.com",
    post : 587,
    secure : false,
    auth: {
        user : EMAIL,
        pass : APP_PASSWD
    }
})

async function sendEmail(email, subject, html){
    try
    {
        const mailOptions = {
            from : {
                name : "DevAuction",
                address : process.env.EMAIL
            },
            to : email,
            subject : subject,
            html : html
        }

        const info = await transporter.sendMail(mailOptions)
        console.log("Email sent successfully : ", info.messageId)
    }   
    catch(err)
    {
        console.error("Error sending email : ",err)
    }
}

export default sendEmail