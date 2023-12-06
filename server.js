const {send_mail} = require('./src/services/email.service');

const path = require('path');

const to = '';
const subject = '';
const text = '';
const html = '';
const filename = '';
const dir_file = ""
const filePath = path.join(__dirname, dir_file, filename);
const attachments = [{filename: filename, path: filePath}];

send_mail(to, subject, text, html, attachments)
    .then(info => {console.log('E-mail envoyé:', info.response);})
    .catch(error => {console.error('Erreur lors de l\'envoi de l\'e-mail:', error);});