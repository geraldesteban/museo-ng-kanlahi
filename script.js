"use strict";

/* NAVIGATION LINKS EFFECT */
const nav = document.querySelector(".navbar");
const arrows = document.querySelectorAll(".arrow");

const navHover = function (e) {
  if (e.target.classList.contains("navbar__link")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".navbar__link");
    const title = link.closest(".navbar").querySelector(".navbar__title");

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    title.style.opacity = this;
  }

  if (e.target.classList.contains("navbar__title")) {
    const title = e.target;
    const links = title.closest(".navbar").querySelectorAll(".navbar__link");

    links.forEach(el => {
      el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", navHover.bind(0.5));
nav.addEventListener("mouseout", navHover.bind(1));

/* HOME PAGE SLIDES */
const slides = document.querySelectorAll(".slide");
let current = 0;

const hideSlides = () => {
  for (const slide of slides) {
    slide.style.display = "none";
  }
};

const showSlide = index => {
  slides[index].style.display = "block";
};

const next = () => {
  hideSlides();
  current = (current + 1) % slides.length;
  showSlide(current);
};

const prev = () => {
  hideSlides();
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};

const start = () => {
  hideSlides();
  showSlide(current);
};

start();

/* DIORAMA VIDEO SHOW AND HIDE */
const playButton = document.querySelector(".home__btn");
const dioramaVideo = document.querySelector(".home__diorama");
const dioramaOverlay = document.querySelector(".home__videoOverlay");
const goBackIcon = document.querySelector(".homeIconClose");

const setDisplayDioramaVideo = function (showDioramaVideo) {
  dioramaVideo.style.display = showDioramaVideo ? "block" : "none";
  playButton.style.display = showDioramaVideo ? "none" : "block";
  dioramaOverlay.style.display = showDioramaVideo ? "block" : "none";
  goBackIcon.style.display = showDioramaVideo ? "block" : "none";

  arrows.forEach(arrow => {
    arrow.style.display = showDioramaVideo ? "none" : "block";
  });

  if (showDioramaVideo) {
    dioramaVideo.src =
      "https://www.youtube.com/embed/eJZwMEo4ogg?autoplay=1&mute=0";
    document.body.classList.add("no-scroll");
  } else {
    dioramaVideo.src =
      "https://www.youtube.com/embed/eJZwMEo4ogg?autoplay=1&mute=1";
    document.body.classList.remove("no-scroll");
  }
};

playButton.addEventListener("click", () => setDisplayDioramaVideo(true));
goBackIcon.addEventListener("click", () => {
  setDisplayDioramaVideo(false);
});

/* SLIDES DIORAMA */
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let navImages = document.getElementsByClassName("click-image");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < navImages.length; i++) {
    navImages[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "flex";
  navImages[slideIndex - 1].classList.add("active");
}

function nextSlide() {
  showSlides((slideIndex += 1));
}

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

/* NAVIGATION BAR MOBILE */
const navOpen = document.querySelector(".navOpen");
const navClose = document.querySelector(".navClose");
const navigation = document.querySelector(".navbar");
const navtitle = document.querySelector(".navtitle");

navOpen.addEventListener("click", () => {
  navClose.style.display = "block";
  navOpen.style.display = "none";
  navigation.classList.add("open");
  navtitle.style.display = "none";
});

navClose.addEventListener("click", () => {
  navClose.style.display = "none";
  navOpen.style.display = "block";
  navigation.classList.remove("open");
  navtitle.style.display = "block";
});

/* FIX NAVIGATION IN DESKTOP WHEN SWITCHING MOBILE AND DESKTOP */
const navLinks = document.querySelectorAll(".navbar__link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 850) {
      navClose.style.display = "none";
      navOpen.style.display = "block";
      navigation.classList.remove("open");
    }
  });
});
