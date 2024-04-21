const credentials = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "notificationsaguirre@gmail.com",
    pass: "@Ethan1803",
  },
};

/*Email.send({
  Host: "smtp.elasticemail.com",
  Username: "notificationsaguirre@gmail.com",
  Password: "F0B0FC6A01EADFC90035F86F0EAB501EC445",
  SecureToken: "cf900985-9b9b-47dc-b501-32937c77bf19",
  To: "haroldantonio777@gmail.com",
  From: "notificationsaguirre@gmail.com",
  Subject: "This is the subject",
  Body: "And this is the body",
}).then((message) => alert(message));*/

alert(secret.TokenTest);

function sendMail(event) {
  event.preventDefault();
  console.log("do it");

  /*
    const email = {
    from: "sender@example.com",
    to: "recipient@example.com",
    subject: "Test email",
    text: "This is a test email sent from the browser",
    };
    smtp
    .sendMail(email)
    .then((info) => console.log(info))
    .catch((err) => console.error(err));*/
}
