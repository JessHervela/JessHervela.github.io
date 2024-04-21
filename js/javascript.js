import TOKEN from "../config.js";
const ApiURL = TOKEN;
document.getElementById("contact-role").addEventListener(
  "submit",
  (ev) => {
    ev.preventDefault();
    const controls = ev.target;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain;charset=utf-8");

    const raw = JSON.stringify({
      to: controls.email.value,
      subject: controls.subject.value,
      body: controls.message.value,
    });

    const requestOptions = {
      redirect: "follow",
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(ApiURL, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("Mensaje enviado"))
      .catch((error) => console.log(error));
  },
  false
);
