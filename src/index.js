// import "./sass/base/_typography.scss";
// import "./sass/base/_fonts.scss";
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
function headAni() {
  const heading = document.querySelector("#heading");

  function triggerAnimationSequence(element) {
    const lettersArray = element.innerHTML.split("");
    console.log(lettersArray);
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
      console.log(span.offsetWidth);
      span.classList.add("animated");
      delay += 70;
    });
  }

  setTimeout(() => {
    triggerAnimationSequence(heading);
  }, 100);
}

function lazyLoad() {
  const bg = document.querySelectorAll("[data-src]");
  // const lazyImages = document.querySelectorAll(".lazy");
  console.log(bg);

  // console.log(lazyImages);

  const appear = [...bg];

  console.log(appear);
  // console.log(appear);
  const appearImage = {
    threshold: 0.5,
  };

  function preloadImages(img) {
    const src = img.getAttribute("data-src");

    if (!src) {
      return;
    }

    img.src = src;
  }

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImages(entry.target);
        entry.target.classList.add("fadeIn");
        // debugger;
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearImage);

  bg.forEach((fade) => {
    appearOnScroll.observe(fade);
  });
}

function lazyBgLoad() {
  const bg = document.querySelectorAll(".bgLazy");
  console.log(bg);

  // console.log(lazyImages);

  const appear = [...bg];

  console.log(appear);
  console.log(appear);
  const appearImage = {
    threshold: 0.5,
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("fadeIn");
        // debugger;
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearImage);

  appear.forEach((fade) => {
    appearOnScroll.observe(fade);
  });
}

window.addEventListener("load", function () {
  navbar();
  burgerMenu();
  headAni();
  lazyLoad();
  lazyBgLoad();
});
