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



$('#owl-carousel-1').owlCarousel({
loop: true,
margin: 10,
nav: true,
dots: false,
autoplay: true,
navContainer: '.custom-nav', // Specify the navigation container

responsiveClass: true,
responsive: {
0: {
  items: 1
},
600: {
  items: 2
},
1000: {
  items: 3
}
}
});
$('.owl-carousel').owlCarousel({
loop: true,
margin: 10,
nav: false,
dots: true,
autoplay: true,

responsiveClass: true,
responsive: {
0: {
  items: 1
},
600: {
  items: 1
},
1000: {
  items: 1
}
}
})

AOS.init();


let m=moment().format('MMMM Do YYYY');
document.getElementById('date').innerHTML=m;