// require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;
sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  const { fullname, email, message, subject } = req.body;
  console.log(req.body);
  console.log(FROM_EMAIL, "FROM_EMAIL");
  console.log(TO_EMAIL, "TO_EMAIL");
  const msg = {
    to: TO_EMAIL, // Change to your recipient
    from: FROM_EMAIL, // Change to your verified sender
    subject: "Contact",
    html: `<p><strong>name: </strong>${fullname}</p>
    <p><strong>email: </strong>${email}</p>    
    <p><strong>message: </strong>${message}</p>`,
  };
  await sgMail.send(msg);
  console.log("email sent");
  res.status(200).json({ success: true });
}
