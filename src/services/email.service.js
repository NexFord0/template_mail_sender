const nodemailer = require('nodemailer');
const config = require('../config/mailer.config');

const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
        user: config.auth.user,
        pass: config.auth.pass,
    },
});

function send_mail(to, subject, text, html, attachments) {
    const mailOptions = {
        from: config.auth.user,
        to: to,
        subject: subject,
        text: text,
        html: html,
        attachments: attachments,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
}

module.exports = {
    send_mail,
}
