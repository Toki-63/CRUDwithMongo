const registrationModel = require('../models/registrationModel');
const nodemailer = require("nodemailer");

const forgotPasswordController = async (req, res) => {
    const {email} = req.body;

    const user = await registrationModel.findOne({email: email});

    if (!user) {
        res.send('User not found');
    }

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
        text: "Reset your password", // plain text body
        html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Reset Your Password</title></head><body style="margin:0;padding:0;background-color:#f4f7fb;font-family:Arial,Helvetica,sans-serif"><table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f4f7fb;padding:40px 12px"><tr><td align="center"><table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:520px;background:#fff;border-radius:16px;overflow:hidden"><tr><td align="center" style="padding:32px 24px 20px"><div style="font-size:26px;font-weight:700;color:#2563eb">YourApp<span style="color:#111827">.</span></div></td></tr><tr><td align="center" style="padding:12px 24px"><div style="width:64px;height:64px;line-height:64px;background:#eff6ff;border-radius:50%;font-size:30px;color:#2563eb">&#128274;</div></td></tr><tr><td align="center" style="padding:16px 32px 8px"><h1 style="margin:0;color:#111827;font-size:26px;line-height:1.4">Reset Your Password</h1><p style="margin:18px 0 0;color:#374151;font-size:15px;line-height:1.8">Hi<strong>{{name}}</strong>,</p><p style="margin:12px 0 0;color:#6b7280;font-size:15px;line-height:1.8">We received a request to reset the password for your account. Click the button below to choose a new password.</p></td></tr><tr><td align="center" style="padding:28px 24px"><a href='yourwebsite/resetpassword?${user.email}' style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:15px 34px;border-radius:8px;font-size:15px;font-weight:700">Reset Password</a></td></tr><tr><td style="padding:0 32px 24px"><div style="background:#f9fafb;border-radius:8px;padding:16px;text-align:center"><p style="margin:0;color:#6b7280;font-size:13px;line-height:1.7">For your security, this link will expire in<strong style="color:#374151">15 minutes</strong>.</p></div></td></tr><tr><td style="padding:0 32px 28px"><p style="margin:0 0 10px;color:#6b7280;font-size:13px;line-height:1.7">If the button doesn't work, copy and paste this link into your browser:</p><p style="margin:0;font-size:12px;line-height:1.8;word-break:break-all"><a href='yourwebsite/resetpassword?${user.email}' style="color:#2563eb">'yourwebsite/resetpassword?${user.email}'</a></p></td></tr><tr><td style="padding:20px 32px;background:#f9fafb"><p style="margin:0;color:#6b7280;font-size:13px;line-height:1.8;text-align:center">If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.</p></td></tr><tr><td align="center" style="padding:24px 20px"><p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.8">&copy; 2026 YourApp. All rights reserved.</p><p style="margin:6px 0 0;color:#9ca3af;font-size:12px">This is an automated email. Please do not reply.</p></td></tr></table></td></tr></table></body></html>`, // HTML body
      });
    
    
        res.send("Email sent: " + info.messageId);

};

module.exports = forgotPasswordController;