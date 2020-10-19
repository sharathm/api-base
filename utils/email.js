import { createTransport } from 'nodemailer';
export default async function sendEmail(to, subject, body) {
	const transporter = createTransport({
    host: process.env.SMTP_ADDRESS,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
	});

	let info = await transporter.sendMail({
    from: process.env.SMTP_EMAIL_ADDRESS, // sender address
    to: to, // list of receivers
    subject:subject, // Subject line
    text: body, // plain text body
    html: body, // html body
  });

  console.log("Message sent: %s", info.messageId);
}
