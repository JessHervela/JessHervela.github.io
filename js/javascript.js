//import TOKEN from "../config.js";

document.getElementById("contact-role").addEventListener("submit", (ev) => {
  ev.preventDefault();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain;charset=utf-8");

  const raw = JSON.stringify({
    to: "haroldantonio777@gmail.com",
    subject: "Prueba",
    body: "<p>Hola</p>",
  });

  const requestOptions = {
    redirect: "follow",
    method: "POST",
    headers: myHeaders,
    body: raw,
    mode: "cors",
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbzfwkUv1rmt7jaIBEjZu5D_EJS9Nj775SRld_aOk_uYQJdDyYIs76eDXKqTx2Dlv1QyfA/exec",
    requestOptions
  )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});
//const ApiURL = TOKEN;
