import mailer from "nodemailer";

export function SendMail(item) {
  let mailtransporter = mailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.Auth_mail,
      pass: process.env.Auth_pass,
    },
  });

  let malingdetail = {
    from: process.env.Auth_mail,
    to: item?.email,
    subject: item?.Sub,
    text: item?.text,
  };
  mailtransporter.sendMail(malingdetail, function (err, data) {
    if (err) {
      console.log(err.message);
    }
  });
}

