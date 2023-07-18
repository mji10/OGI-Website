import "./sass/style.scss";

function navbar() {
  const navbar = document.querySelector(".navigation");
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
  const heading = document.querySelector("#heading");

  function triggerAnimationSequence(element) {
    const lettersArray = element.innerHTML.split("");
    let delay = 0;

    element.innerHTML = "";
    lettersArray.forEach((letter) => {
      let span = document.createElement("SPAN");
      let attr = document.createAttribute("data-animate");

      span.setAttributeNode(attr);
      span.innerHTML = letter;
      span.style.transitionDelay = `${delay}ms`;
      element.appendChild(span);

      void span.offsetWidth;
      span.classList.add("animated");
      delay += 70;
    });
  }

  setTimeout(() => {
    triggerAnimationSequence(heading);
  }, 100);
}

function lazyLoadImages() {
  const images = document.querySelectorAll("[data-src]");
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
    { threshold: 0.5 }
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
  }
}

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
  timeLine();
});
