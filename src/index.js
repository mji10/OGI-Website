import "./sass/style.scss";

function navbar() {
  const navbar = document.querySelector(".header");
  window.onscroll = () => {
    if (window.scrollY > 100) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };
}

function burgerMenu() {
  const burger = document.querySelector(".burger_menu");
  const mobileNav = document.querySelector(".mob_nav");
  burger.addEventListener("click", () => {
    document.body.classList.toggle("no_scroll");
    burger.classList.toggle("open");
    mobileNav.classList.toggle("show");
  });
}

// Heading Animation
function headerAnimation() {
  let text = document.getElementById("heading");
  let letters = text.textContent.split("");
  text.textContent = "";

  for (let i = 0; i < letters.length; i++) {
    let span = document.createElement("span");
    span.textContent = letters[i];
    span.classList.add("letter-fade");
    span.style.animationDelay = i * 0.1 + "s"; // Delay each letter by 0.1s
    text.appendChild(span);
  }
}

function lazyLoadImages() {
  const images = document.querySelectorAll("[data-src]");
  console.log(images);
  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          preloadImage(entry.target);
          entry.target.classList.add("fadeIn");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 }
  );

  images.forEach((image) => {
    imageObserver.observe(image);
  });

  function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
    console.log(src)
  }
  
}

function loadSvg(){
function lazyLoad(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const svg = entry.target;
      const svgUse = svg.querySelector('use');
      console.log(svgUse);
      const spriteSrc = svgUse.getAttribute('href');
      console.log(spriteSrc);
      svgUse.setAttribute('href', spriteSrc);
      entry.target.classList.add("fadeIn");
      observer.unobserve(svg);
    }
  });
}

const observer = new IntersectionObserver(lazyLoad, { threshold: 1 });

const lazySvgElements = document.querySelectorAll('.lazy-svg');
Array.from(lazySvgElements).forEach((element) => {
  observer.observe(element);
});
}

// document.addEventListener('DOMContentLoaded', () => {
//   const lazyLoadTriggers = document.querySelectorAll('.lazy-svg');
//   Array.from(lazyLoadTriggers).forEach((trigger) => {
//     observer.observe(trigger);
//   });
// });



// Timeline
function timeLine() {
  const progressLine = document.querySelector(".progress_content");
  const textContent = document.querySelector(".timeline_right");

  const classes = [
    "go",
    "occasion-one",
    "occasion-two",
    "occasion-three",
    "occasion-four",
  ];

  let counter = 0;

  if (progressLine) {
    progressLine.classList.add("go");
    textContent.classList.add("go");
  }

  setInterval(() => {
    counter = (counter + 1) % classes.length;

    // Remove All classes
    progressLine.classList.remove(...classes);

    // Add classes name which is equal to counter length.
    progressLine.classList.add(classes[counter]);

    if (progressLine.classList.contains(classes[counter])) {
      // Remove All classes
      textContent.classList.remove(...classes);

      // Add classes name which is equal to counter length.
      textContent.classList.add(classes[counter]);
    }
  }, 7000);
}

window.addEventListener("load", function () {
  navbar();
  burgerMenu();
  headerAnimation();
  lazyLoadImages();
  loadSvg();
  timeLine();
});
