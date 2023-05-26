﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

section1 = document.getElementById("section1");
section2 = document.getElementById("section2");
scroll = document.documentElement.scrollTop;
let docfooter = document.getElementById("footer-nav");

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

window.onload = load();

function getDocHeight() {
    var D = document;

    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )

}

function amountScrolled() {
    var winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    var docHeight = getDocHeight();
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var trackLength = docHeight - winHeight;

    var pctScrolled = Math.floor(scrollTop / trackLength * 100);
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

function formSubmit() {
    document.getElementById("form1").submit();
    document.getElementById("form2").submit();
}

function slider() {
  let slider = document.getElementById("slider1");
  let path = "/Images/SmartCurtainControl/";
  let type = ".jpg";
  let images = [
    `${path}` + "smc1" + `${type}`,
    `${path}` + "smc2" + `${type}`,
    `${path}` + "smc3" + `${type}`,
  ];
  let imgNo = Math.floor(Math.random() * images.length);
  slider.src = images[imgNo];
  //console.log(images);
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
  let imgNo = Math.floor(Math.random() * images.Length);
  slider.src = images[imgNo];
  console.log(images);
}
