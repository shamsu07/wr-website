import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { name, mobile, email, subject, details } = await request.json();

  const transport = nodemailer.createTransport({
    // host: "smtp-mail.outlook.com",
    // port: 587,
    // secure: false,
    service: "Outlook365",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    // tls: {
    //   ciphers: "SSLv3",
    // },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message from ${name} (${email})`,
    text: `
    ${name} wanted to contact with us!!!
    name: ${name}
    mobile: ${mobile}
    email: ${email}
    subject: ${subject}
    details: ${details}
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Contact Details Sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
