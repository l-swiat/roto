var isClicked = false;

const addScript = (src) => {
  var script = document.createElement("script");
  script.setAttribute("src", src);
  document.body.appendChild(s);
};

const clickInput = () => {
  if (!isClicked) {
    addScript("https://smtpjs.com/v3/smtp.js");
    isClicked = true;
    console.log("dodano skrypt");
  } else {
    console.log("nic nie zmieniam");
  }
};
