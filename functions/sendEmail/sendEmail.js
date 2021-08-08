const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  const info = await transporter.sendMail({
    from: 'Yo Blog <signup@yoblog.ru>',
    to: `info@myemail.com`,
    subject: 'Рассылка YoBlog',
    html: `<div><p>Спасибо, что подписались на нашу рассылку!</p><p>Команда YoBlog</p></div>`,
  });

  console.log(info);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Успешно отправлен!' }),
  };
};
