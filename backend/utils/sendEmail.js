const nodeMailer = require('nodemailer');

const sendEmail = async(option) => {

    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        service: "gmail",
        auth:{
            user:"adarshoffice25t@gmail.com",
            pass:"office@8086"
        }
    })

    const mailOptions = {
        from:"adarsh25t@gmail.com",
        to:option.email,
        subject:option.subject,
        text:option.message
    }

    await transporter.sendMail(mailOptions)
}
module.exports = sendEmail;