"use strict";

// Spinner
var spinner = function () {
  var spinnerElement = document.getElementById('spinner');
  if (spinnerElement) {
    setTimeout(function () {
      spinnerElement.classList.remove('show');
    }, 1000);
  }
};
spinner();

// Hide the spinner when the page finishes loading
window.addEventListener('load', function () {
  var spinnerElement = document.getElementById('spinner');
  if (spinnerElement) {
    spinnerElement.style.display = 'none';
  }
});