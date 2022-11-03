const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.listen(3000, () =>{
    console.log("listening on 3000!!")
})

const path = require('path'); 
app.set('views', path.join(__dirname, './views')); 
app.use(express.static(path.join(__dirname, './public'))) 
app.use(express.json())
app.set('view engine', 'ejs'); 

app.get('/', (req,res) => {  
    
    res.render("home"); 
})

app.post('/', (req,res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'omarcitofc2001@gmail.com' ,
            pass: 'wjucushjcwwdqdxn'
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: 'omarcitofc2001@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject} `,
        text: req.body.message
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send(error);
        }else{
            console.log('Email Sent'+ info.response);
            res.send('success');
        }
    })
})

