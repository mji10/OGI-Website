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

// Heading Animation
function headAni() {
  const heading = document.querySelector("#heading");

  function triggerAnimationSequence(element) {
    const lettersArray = element.innerHTML.trim().split("");
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

    element.removeAttribute("data-animate");
  }

  setTimeout(() => {
    triggerAnimationSequence(heading);
  }, 1000);
}

// Images Lazy-Loading
// function lazyImages() {
//   const lazyTargets = document.querySelectorAll(".lazy");

//   console.log(lazyTargets);

//   // The lazy loading observer
//   function lazyLoad(target) {
//     const obs = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const img = entry.target;
//           const src = img.getAttribute("data-src");

//           img.setAttribute("src", src);
//           img.classList.add("fadeIn");

//           observer.disconnect();
//         } else {
//           return;
//         }
//       });
//     });
//     obs.observe(target);
//   }
//   lazyTargets.forEach(lazyLoad());
// }

function lazyLoad() {
  const lazyImages = document.querySelectorAll(".lazy");

  console.log(lazyImages);

  const appear = [...lazyImages];
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
  headAni();
  lazyLoad();
});
