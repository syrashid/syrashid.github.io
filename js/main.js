// JS for Portfolio Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myProjs");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// JS for Photo Slideshow

var photoIndex = 1;
showPhotos(photoIndex);

function plusPhoto(n) {
  showPhotos(photoIndex += n);
}

function currentPhoto(n) {
  showPhotos(photoIndex = n);
}

function showPhotos(n) {
  var i;
  var photos = document.getElementsByClassName("myPhotos");
  var dots = document.getElementsByClassName("dot");
  if (n > photos.length) {photoIndex = 1}
  if (n < 1) {photoIndex = photos.length}
  for (i = 0; i < photos.length; i++) {
      photos[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  photos[photoIndex-1].style.display = "block";
  dots[photoIndex-1].className += " active";
}

// JS for Misc Slideshow

var miscIndex = 1;
showMisc(miscIndex);

function plusMisc(n) {
  showMisc(miscIndex += n);
}

function currentMisc(n) {
  showMisc(miscIndex = n);
}

function showMisc(n) {
  var i;
  var misc = document.getElementsByClassName("myMisc");
  var miscdots = document.getElementsByClassName("miscdot");
  if (n > misc.length) {miscIndex = 1}
  if (n < 1) {miscIndex = misc.length}
  for (i = 0; i < misc.length; i++) {
      misc[i].style.display = "none";
  }
  for (i = 0; i < miscdots.length; i++) {
      miscdots[i].className = miscdots[i].className.replace(" active", "");
  }
  misc[miscIndex-1].style.display = "block";
  miscdots[miscIndex-1].className += " active";
}

// JS for Dropdown on mobile

function dropDown(x) {
  document.getElementById("myDropdown").classList.toggle("show");
  x.classList.toggle("change");
}


