import { createTransport } from "nodemailer";

export default function codeGenerator(req, res) {
  // create reusable transporter object using the default SMTP transport
  //let transporter = createTransport({
  //  service: "gmail",
  //  auth: {
  //    user: "your_email@gmail.com",
  //    pass: "your_email_password",
  //  },
  //});

  // generate random verification code
  let generatedCode = Math.floor(100000 + Math.random() * 900000);

  // setup email data with verification code
  let mailOptions = {
    from: "your_email@gmail.com",
    to: "recipient_email@example.com",
    subject: "Verification Code",
    text: `Your verification code is: ${generatedCode}`,
  };

  // send mail with defined transport object
  //transporter.sendMail(mailOptions, (error, info) => {
  //  if (error) {
  //    console.log(error);
  //  } else {
  //    console.log("Email sent: " + info.response);
  //  }
  //});
  console.log(generatedCode);
  res.status(200).json(generatedCode);
}
