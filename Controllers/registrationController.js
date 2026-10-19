const Registration = require('../models/registrationModel');
const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs');


let registrationController = async (req,res)=>{
    const { username, email, password } = req.body;

    let existingEmail = await Registration.findOne({email: email});
    if(existingEmail){
      res.send('Email already exists, please use a different email');
    }

    let hash = bcrypt.hashSync(password, 10);

    const user = new Registration({
        username: username,
        email: email,
        password: hash
    });
    user.save();

    const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, 
    auth: {
    user: "asimtoki516@gmail.com",
    pass: "vkqptggtnplpsjxa",
  },
});

 const info = await transporter.sendMail({
    from: '"Example Team" asimtoki516@gmail.com', // sender address
    to: "asimtoki516@gmail.com", // list of recipients
    subject: "Hello", // subject line
    text: "Hello world?", // plain text body
    html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Verify Your Email</title></head><body style="margin:0;padding:0;background:#09090f;font-family:Arial,Helvetica,sans-serif;color:#fff"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#09090f;padding:40px 12px"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#12121c;border:1px solid #29263b;border-radius:18px"><tr><td align="center" style="padding:38px 24px 24px"><div style="display:inline-block;background:#211a39;color:#b69aff;font-size:28px;font-weight:700;padding:14px 18px;border-radius:14px">✓</div><h1 style="font-size:24px;letter-spacing:2px;margin:22px 0 8px;color:#fff">VERIFY YOUR EMAIL</h1><p style="font-size:11px;letter-spacing:3px;color:#a7a3b8;margin:0">YOUR BRAND · ACCOUNT SECURITY</p></td></tr><tr><td style="padding:0 32px"><div style="height:1px;background:#302942"></div></td></tr><tr><td style="padding:30px 32px 12px"><h2 style="font-size:23px;color:#fff;margin:0 0 18px">Hey, {{name}}</h2><p style="font-size:15px;line-height:1.8;color:#c3c0d0;margin:0 0 14px">.</p><p style="font-size:15px;line-height:1.8;color:#c3c0d0;margin:0">Please verify your email address to activate your account and access all the features.</p></td></tr><tr><td align="center" style="padding:28px 24px"><a href="{{verification_url}}" style="display:inline-block;background:#8b5cf6;color:#fff;text-decoration:none;font-size:15px;font-weight:700;padding:16px 32px;border-radius:9px">Verify My Email &rarr;</a></td></tr><tr><td align="center" style="padding:0 28px 28px"><p style="font-size:12px;line-height:1.7;color:#a7a3b8;margin:0">This verification link expires in 15 minutes.</p><p style="font-size:12px;line-height:1.7;color:#777387;margin:12px 0 0"></p><p style="font-size:12px;line-height:1.7;word-break:break-all"><a href="{{verification_url}}" style="color:#b69aff">{{verification_url}}</a></p></td></tr><tr><td style="padding:22px 28px;border-top:1px solid #302942;text-align:center"><p style="font-size:12px;line-height:1.7;color:#8f8ba0;margin:0 0 8px"></p><p style="font-size:11px;color:#777387;margin:0">&copy; 2026 Your Brand. All rights reserved.</p></td></tr></table></td></tr></table></body></html>', // HTML body
  });


    res.send("Email sent: " + info.messageId);
    res.send('User registered successfully');
}

module.exports = registrationController;