import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (
  to,
  subject,
  html
) => { 
        //   console.log("📧 Sending email to:", to);
  try {

    const info = await transporter.sendMail({
      from: `"BAATCHEET🚀" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

 //    console.log("✅ Email Sent:", info.response);
 
  } catch (error) {

    // console.log("❌ Email Error:", error.message);

  }
};