const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose")
require("dotenv/config")
const cors = require("cors")
const nodemailer = require("nodemailer")
const formMessage = require("./models/user")
const path = require('path')

mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
  .then((result) => app.listen(PORT, console.log("server running on port: "+PORT)))
  .catch((err) => console.log(err))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors()) 

app.post("/contact", async (req,res) => {
  console.log("Form submitted")
  const {name,email,subject,phone,message} = req.body
  try {
    const client = await formMessage.create({name,email,subject,phone,message})
    res.status(201).json({client})
    let transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "mislav0508@hotmail.com", 
        pass: process.env.EMAIL_PASS, 
      },
      tls: {
        rejectUnauthorized:false
      }
    });  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Mislav Crnkovic" <mislav0508@hotmail.com>', // sender address
      to: `mislav0508@hotmail.com`, // list of receivers
      subject: `Contact form: ${subject}`, 
      html: `
      <p>Name: ${name}</p>                 
      <p>Phone: ${phone}</p>        
      <p>Message: ${message}</p> 
      `, // html body
    }); 
    console.log("Message sent: %s", info.messageId);   
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.resolve("../client", 'build')))

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve('../client', 'build', 'index.html'));
  });
}