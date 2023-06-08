// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

section1 = document.getElementById("section1");
section2 = document.getElementById("section2");
scroll = document.documentElement.scrollTop;
let docfooter = document.getElementById("footer-nav");
var submitProducts = document.getElementById("submitProducts");

function load() {
  section1.style.display = "block";
  section2.style.display = "none";
  setInterval(slider, 4000);
  //setInterval(footer, 100);
  //setInterval(slider2, 4000);
  //setInterval(slider3, 4000);
  //setInterval(slider4, 4000);
  //setInterval(slider5, 4000);
  //setInterval(slider6, 4000);
  //setInterval(slider7, 4000);
  //setInterval(slider8, 4000);
  //setInterval(slider9, 4000);
  //setInterval(slider10, 4000);
  //setInterval(slider11, 4000);
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
  let type = ".jpg";
  let abv = "smc";
  let index = Math.floor(Math.random() * (3 - 1) + 1);
  let images = [
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
    `${path}` + `${abv}${[index]}` + `${type}`,
  ];
  slider.src = images[index];
  console.log(images);
}

function slider2() {
  let slider = document.getElementById("slider2");
  let path = "/Images/SmartWaterLeakageControl/";
  let type = ".jpg";
  let images = [
    `${path}` + "swlc1" + `${type}`,
    `${path}` + "swlc2" + `${type}`,
    `${path}` + "swlc3" + `${type}`,
  ];
  let imgNo = Math.floor(Math.random() * images.length);
  slider.src = images[imgNo];
  console.log(images);
}

function slider3() {
  let slider = document.getElementById("slider3");
  let path = "/Images/SmartIntruderSystem/";
  let type = ".jpg";
  let images = [
    `${path}` + "sis1" + `${type}`,
    `${path}` + "sis2" + `${type}`,
    `${path}` + "sis3" + `${type}`,
  ];
  let imgNo = Math.floor(Math.random() * images.length);
  slider.src = images[imgNo];
}

function slider4() {
  let slider = document.getElementById("slider4");
  let path = "/Images/SmartGateAutomation";
  let type = ".jpg";
  let images = [
    `${path}` + `sga1` + `${type}`,
    `${path}` + `sga2` + `${type}`,
    `${path}` + `sga3` + `${type}`,
  ];
  let imgNo = Math.floor(Math.random() * images.length);
  slider.src = images[imgNo];
}

function slider5() {
  let slider = document.getElementById("slider5");
  let path = "/Images/SmartCCTV/";
  let type = ".jpg";
  let images = [
    `${path}` + `sc1` + `${type}`,
    `${path}` + `sc2` + `${type}`,
    `${path}` + `sc3` + `${type}`,
  ];
  let imgNo = Math.floor(Math.random() * images.length);
  slider.src = images[imgNo];
}

function slider6() {
  let slider = document.getElementById("slider6");
  let path = "/Images/WiFiDoorSensorWindowSensor/";
  let type = ".jpg";
  let images = [
    `${path}` + `wds1` + `${type}`,
    `${path}` + `wds2` + `${type}`,
    `${path}` + `wds3` + `${type}`,
  ];
  let imgNo = Math.floor(Math.random() * images.length);
  slider.src = images[imgNo];
}

function slider7() {
  let slider = document.getElementById("slider7");
  let path = "/Images/FireDetection/";
  let type = ".jpg";
  let images = [
    `${path}` + `fd1` + `${type}`,
    `${path}` + `fd2` + `${type}`,
    `${path}` + `fd3` + `${type}`,
  ];
  let imgNo = Math.floor(Math.random() * images.length);
  slider.src = images[imgNo];
}

function slider8() {
  let slider = document.getElementById("slider8");
  let path = "/Images/SmartPowerSockets/";
  let type = ".jpg";
  let images = [
    `${path}` + "sps1" + `${type}`,
    `${path}` + "sps2" + `${type}`,
    `${path}` + "sps3" + `${type}`,
  ];
  let imgNo = Math.floor(Math.random() * images.length);
  slider.src = images[imgNo];
}

function slider9() {
  let slider = document.getElementById("slider9");
  let path = "/Images/SmartSecurityLighting/";
  let type = ".jpg";
  let images = [
    `${path}` + `ssl1` + `${type}`,
    `${path}` + `ssl2` + `${type}`,
    `${path}` + `ssl3` + `${type}`,
  ];
  let imgNo = Math.floor(Math.random() * images.length);
  slider.src = images[imgNo];
}

function slider10() {
  let slider = document.getElementById("slider10");
  let path = "/Images/SmartIndoorLighting/";
  let type = ".jpg";
  let images = [
    `${path}` + `sil1` + `${type}`,
    `${path}` + `sil2` + `${type}`,
    `${path}` + `sil3` + `${type}`,
  ];
  let imgNo = Math.floor(Math.random() * images.length);
  slider.src = images[imgNo];
}

function slider11() {
  let slider = document.getElementById("slider11");
  let path = "/Images/SmartEnergyMonitoring/";
  let type = ".jpg";
  let images = [
    `${path}` + `sem1` + `${type}`,
    `${path}` + `sem2` + `${type}`,
    `${path}` + `sem3` + `${type}`,
  ];
  let imgNo = Math.floor(Math.random() * images.length);
  slider.src = images[imgNo];
}
