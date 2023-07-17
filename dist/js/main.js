/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");


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
    console.log(lettersArray);
    let delay = 0;

    element.innerHTML = "";
    lettersArray.forEach((letter) => {
      let span = document.createElement("SPAN");
      let attr = document.createAttribute("data-animate");

      span.setAttributeNode(attr);
      console.log(span.setAttributeNode(attr));
      span.innerHTML = letter;
      console.log(letter);
      span.style.transitionDelay = `${delay}ms`;
      element.appendChild(span);

      void span.offsetWidth;
      // console.log(span.offsetWidth);
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

  console.log(textContent.children.length);

  const classes = [
    "go",
    "occasion-one",
    "occasion-two",
    "occasion-three",
    "occasion-four",
  ];

  console.log(classes.length);

  console.log("Modulo Concept:" + (3 % 10));
  let counter = 0;

  if (progressLine) {
    progressLine.classList.add("go");
    textContent.classList.add("go");
  }

  setInterval(() => {
    counter = (counter + 1) % classes.length;

    console.log(counter);

    // Remove All classes
    progressLine.classList.remove(...classes);
    // console.log([...classes]);

    // Add classes name which is equal to counter length.
    progressLine.classList.add(classes[counter]);

    // The output will be classes[0];
    console.log(classes[counter]);

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL09HSS1XZWJzaXRlLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz8zZmNiIiwid2VicGFjazovL09HSS1XZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09HSS1XZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vT0dJLVdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Fzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBuYXZiYXIoKSB7XHJcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpO1xyXG4gIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMCkge1xyXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1hY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVyZ2VyTWVudSgpIHtcclxuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlcl9tZW51XCIpO1xyXG4gIGNvbnN0IG1vYmlsZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iX25hdlwiKTtcclxuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm5vX3Njcm9sbFwiKTtcclxuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIG1vYmlsZU5hdi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gSGVhZGluZyBBbmltYXRpb25cclxuZnVuY3Rpb24gaGVhZGVyQW5pbWF0aW9uKCkge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRpbmdcIik7XHJcblxyXG4gIGZ1bmN0aW9uIHRyaWdnZXJBbmltYXRpb25TZXF1ZW5jZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCBsZXR0ZXJzQXJyYXkgPSBlbGVtZW50LmlubmVySFRNTC5zcGxpdChcIlwiKTtcclxuICAgIGNvbnNvbGUubG9nKGxldHRlcnNBcnJheSk7XHJcbiAgICBsZXQgZGVsYXkgPSAwO1xyXG5cclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldHRlcnNBcnJheS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcclxuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgbGV0IGF0dHIgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWFuaW1hdGVcIik7XHJcblxyXG4gICAgICBzcGFuLnNldEF0dHJpYnV0ZU5vZGUoYXR0cik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4uc2V0QXR0cmlidXRlTm9kZShhdHRyKSk7XHJcbiAgICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xyXG4gICAgICBjb25zb2xlLmxvZyhsZXR0ZXIpO1xyXG4gICAgICBzcGFuLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGAke2RlbGF5fW1zYDtcclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgIHZvaWQgc3Bhbi5vZmZzZXRXaWR0aDtcclxuICAgICAgLy8gY29uc29sZS5sb2coc3Bhbi5vZmZzZXRXaWR0aCk7XHJcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVkXCIpO1xyXG4gICAgICBkZWxheSArPSA3MDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICB0cmlnZ2VyQW5pbWF0aW9uU2VxdWVuY2UoaGVhZGluZyk7XHJcbiAgfSwgMTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGF6eUxvYWRJbWFnZXMoKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNyY11cIik7XHJcbiAgY29uc3QgaW1hZ2VPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgIChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICBwcmVsb2FkSW1hZ2UoZW50cnkudGFyZ2V0KTtcclxuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZmFkZUluXCIpO1xyXG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB7IHRocmVzaG9sZDogMC41IH1cclxuICApO1xyXG5cclxuICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcclxuICAgIGltYWdlT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHByZWxvYWRJbWFnZShpbWcpIHtcclxuICAgIGNvbnN0IHNyYyA9IGltZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtcclxuICAgIGlmICghc3JjKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUaW1lbGluZVxyXG5mdW5jdGlvbiB0aW1lTGluZSgpIHtcclxuICBjb25zdCBwcm9ncmVzc0xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX2NvbnRlbnRcIik7XHJcbiAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVsaW5lX3JpZ2h0XCIpO1xyXG5cclxuICBjb25zb2xlLmxvZyh0ZXh0Q29udGVudC5jaGlsZHJlbi5sZW5ndGgpO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gW1xyXG4gICAgXCJnb1wiLFxyXG4gICAgXCJvY2Nhc2lvbi1vbmVcIixcclxuICAgIFwib2NjYXNpb24tdHdvXCIsXHJcbiAgICBcIm9jY2FzaW9uLXRocmVlXCIsXHJcbiAgICBcIm9jY2FzaW9uLWZvdXJcIixcclxuICBdO1xyXG5cclxuICBjb25zb2xlLmxvZyhjbGFzc2VzLmxlbmd0aCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiTW9kdWxvIENvbmNlcHQ6XCIgKyAoMyAlIDEwKSk7XHJcbiAgbGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuICBpZiAocHJvZ3Jlc3NMaW5lKSB7XHJcbiAgICBwcm9ncmVzc0xpbmUuY2xhc3NMaXN0LmFkZChcImdvXCIpO1xyXG4gICAgdGV4dENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImdvXCIpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSBjbGFzc2VzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb3VudGVyKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgQWxsIGNsYXNzZXNcclxuICAgIHByb2dyZXNzTGluZS5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coWy4uLmNsYXNzZXNdKTtcclxuXHJcbiAgICAvLyBBZGQgY2xhc3NlcyBuYW1lIHdoaWNoIGlzIGVxdWFsIHRvIGNvdW50ZXIgbGVuZ3RoLlxyXG4gICAgcHJvZ3Jlc3NMaW5lLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tjb3VudGVyXSk7XHJcblxyXG4gICAgLy8gVGhlIG91dHB1dCB3aWxsIGJlIGNsYXNzZXNbMF07XHJcbiAgICBjb25zb2xlLmxvZyhjbGFzc2VzW2NvdW50ZXJdKTtcclxuXHJcbiAgICBpZiAocHJvZ3Jlc3NMaW5lLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc2VzW2NvdW50ZXJdKSkge1xyXG4gICAgICAvLyBSZW1vdmUgQWxsIGNsYXNzZXNcclxuICAgICAgdGV4dENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcclxuXHJcbiAgICAgIC8vIEFkZCBjbGFzc2VzIG5hbWUgd2hpY2ggaXMgZXF1YWwgdG8gY291bnRlciBsZW5ndGguXHJcbiAgICAgIHRleHRDb250ZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tjb3VudGVyXSk7XHJcbiAgICB9XHJcbiAgfSwgNzAwMCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgbmF2YmFyKCk7XHJcbiAgYnVyZ2VyTWVudSgpO1xyXG4gIGhlYWRlckFuaW1hdGlvbigpO1xyXG4gIGxhenlMb2FkSW1hZ2VzKCk7XHJcbiAgdGltZUxpbmUoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==