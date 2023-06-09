// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

section1 = document.getElementById("section1");
section2 = document.getElementById("section2");
scroll = document.documentElement.scrollTop;
let docfooter = document.getElementById("footer-nav");
var submitProducts = document.getElementById("submitProducts");
const type = ".jpg";

function load() {
  section1.style.display = "block";
  section2.style.display = "none";
  setInterval(slider, 4000);
  //setInterval(footer, 100);
  setInterval(slider2, 4000);
  setInterval(slider3, 4000);
  setInterval(slider4, 4000);
  setInterval(slider5, 4000);
  setInterval(slider6, 4000);
  setInterval(slider7, 4000);
  setInterval(slider8, 4000);
  setInterval(slider9, 4000);
  setInterval(slider10, 4000);
  setInterval(slider11, 4000);
}
window.onload = load();

function displaySec1() {
  section1.style.display = "block";
  section2.style.display = "none";
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, FIrefox , Opera etc..
}

function displaySec2() {
  section1.style.display = "none";
  section2.style.display = "block";
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, FIrefox , Opera etc..
}

function getDocHeight() {
  var D = document;

  return Math.max(
    D.body.scrollHeight,
    D.documentElement.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.offsetHeight,
    D.body.clientHeight,
    D.documentElement.clientHeight
  );
}

function amountScrolled() {
  var winHeight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  var docHeight = getDocHeight();
  var scrollTop =
    window.scrollY ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  var trackLength = docHeight - winHeight;

  var pctScrolled = Math.floor((scrollTop / trackLength) * 100);
  console.log(pctScrolled + "%");

  return pctScrolled;
}

//window.onscroll = footer();

function footer() {
  if (amountScrolled() >= 60) {
    footer.style.display = "fixed";
  } else if (amountScrolled() <= 50) {
    footer.style.display = "none";
  } else {
    footer.style.display = "fixed";
  }
}

submitProducts.addEventListener("click", handlesubmit);

function handlesubmit(event) {
  var form = document.forms["productForm"];
  //Avoid page refresh
  event.preventDefault();

  var formOptions = form.elements["products"];
  var selectedOptions = [];
  formOptions.forEach((element) => {
    if (element.checked) {
      selectedOptions.push(element.value);
    }
  });
  console.log(selectedOptions);
}

function slider() {
  let slider = document.getElementById("slider1");
  let path = "/Images/SmartCurtainControl/";
  let abv = "smc";
  let index = Math.floor(Math.random() * (3 - 1)) + 1;
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
}

function slider2() {
  let slider = document.getElementById("slider2");
  let path = "/Images/SmartWaterLeakageControl/";
  let abv = "swlc";
  let index = Math.floor(Math.random() * (3 - 1)) + 1;
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
}

function slider3() {
  let slider = document.getElementById("slider3");
  let path = "/Images/SmartIntruderSystem/";
  let abv = "sis";
  let index = Math.floor(Math.random() * (3 - 1)) + 1;
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
}

function slider4() {
  let slider = document.getElementById("slider4");
  let path = "/Images/SmartGateAutomation/";
  let abv = "sga";
  let index = Math.floor(Math.random() * (3 - 1)) + 1;
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
}

function slider5() {
  let slider = document.getElementById("slider5");
  let path = "/Images/SmartCCTV/";
  let abv = "sc";
  let index = Math.floor(Math.random() * (3 - 1)) + 1;
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
}

function slider6() {
  let slider = document.getElementById("slider6");
  let path = "/Images/WiFiDoorSensorWindowSensor/";
  let abv = "wds";
  let index = Math.floor(Math.random() * (3 - 1)) + 1;
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
}

function slider7() {
  let slider = document.getElementById("slider7");
  let path = "/Images/FireDetection/";
  let abv = "fd";
  let index = Math.floor(Math.random() * (3 - 1)) + 1;
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
}

function slider8() {
  let slider = document.getElementById("slider8");
  let path = "/Images/SmartPowerSockets/";
  let abv = "sps";
  let index = Math.floor(Math.random() * (3 - 1)) + 1;
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
}

function slider9() {
  let slider = document.getElementById("slider9");
  let path = "/Images/SmartSecurityLighting/";
  let abv = "ssl";
  let index = Math.floor(Math.random() * (3 - 1)) + 1;
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
}

function slider10() {
  let slider = document.getElementById("slider10");
  let path = "/Images/SmartIndoorLighting/";
  let abv = "sil";
  let index = Math.floor(Math.random() * (3 - 1)) + 1;
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
}

function slider11() {
  let slider = document.getElementById("slider11");
  let path = "/Images/SmartEnergyMonitoring/";
  let abv = "sem";
  let index = Math.floor(Math.random() * (3 - 1)) + 1;
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
}
