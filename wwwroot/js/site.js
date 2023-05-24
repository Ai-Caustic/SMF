// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

section1 = document.getElementById("section1");
section2 = document.getElementById("section2");

function load() {
    section1.style.display = "block";
    section2.style.display = "none";
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