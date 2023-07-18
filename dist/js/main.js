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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PR0ktV2Vic2l0ZS8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/M2ZjYiIsIndlYnBhY2s6Ly9PR0ktV2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9PR0ktV2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL09HSS1XZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3Nhc3Mvc3R5bGUuc2Nzc1wiO1xyXG5cclxuZnVuY3Rpb24gbmF2YmFyKCkge1xyXG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvblwiKTtcclxuICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1cmdlck1lbnUoKSB7XHJcbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJfbWVudVwiKTtcclxuICBjb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYl9uYXZcIik7XHJcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJub19zY3JvbGxcIik7XHJcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICBtb2JpbGVOYXYuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIEhlYWRpbmcgQW5pbWF0aW9uXHJcbmZ1bmN0aW9uIGhlYWRlckFuaW1hdGlvbigpIHtcclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkaW5nXCIpO1xyXG5cclxuICBmdW5jdGlvbiB0cmlnZ2VyQW5pbWF0aW9uU2VxdWVuY2UoZWxlbWVudCkge1xyXG4gICAgY29uc3QgbGV0dGVyc0FycmF5ID0gZWxlbWVudC5pbm5lckhUTUwuc3BsaXQoXCJcIik7XHJcbiAgICBsZXQgZGVsYXkgPSAwO1xyXG5cclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldHRlcnNBcnJheS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcclxuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgbGV0IGF0dHIgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWFuaW1hdGVcIik7XHJcblxyXG4gICAgICBzcGFuLnNldEF0dHJpYnV0ZU5vZGUoYXR0cik7XHJcbiAgICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xyXG4gICAgICBzcGFuLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGAke2RlbGF5fW1zYDtcclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgIHZvaWQgc3Bhbi5vZmZzZXRXaWR0aDtcclxuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZWRcIik7XHJcbiAgICAgIGRlbGF5ICs9IDcwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHRyaWdnZXJBbmltYXRpb25TZXF1ZW5jZShoZWFkaW5nKTtcclxuICB9LCAxMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsYXp5TG9hZEltYWdlcygpIHtcclxuICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc3JjXVwiKTtcclxuICBjb25zdCBpbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gICAgKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgIHByZWxvYWRJbWFnZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJmYWRlSW5cIik7XHJcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHsgdGhyZXNob2xkOiAwLjUgfVxyXG4gICk7XHJcblxyXG4gIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xyXG4gICAgaW1hZ2VPYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gcHJlbG9hZEltYWdlKGltZykge1xyXG4gICAgY29uc3Qgc3JjID0gaW1nLmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpO1xyXG4gICAgaWYgKCFzcmMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaW1nLnNyYyA9IHNyYztcclxuICB9XHJcbn1cclxuXHJcbi8vIFRpbWVsaW5lXHJcbmZ1bmN0aW9uIHRpbWVMaW5lKCkge1xyXG4gIGNvbnN0IHByb2dyZXNzTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfY29udGVudFwiKTtcclxuICBjb25zdCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZWxpbmVfcmlnaHRcIik7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBbXHJcbiAgICBcImdvXCIsXHJcbiAgICBcIm9jY2FzaW9uLW9uZVwiLFxyXG4gICAgXCJvY2Nhc2lvbi10d29cIixcclxuICAgIFwib2NjYXNpb24tdGhyZWVcIixcclxuICAgIFwib2NjYXNpb24tZm91clwiLFxyXG4gIF07XHJcblxyXG4gIGxldCBjb3VudGVyID0gMDtcclxuXHJcbiAgaWYgKHByb2dyZXNzTGluZSkge1xyXG4gICAgcHJvZ3Jlc3NMaW5lLmNsYXNzTGlzdC5hZGQoXCJnb1wiKTtcclxuICAgIHRleHRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJnb1wiKTtcclxuICB9XHJcblxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgY2xhc3Nlcy5sZW5ndGg7XHJcblxyXG5cclxuICAgIC8vIFJlbW92ZSBBbGwgY2xhc3Nlc1xyXG4gICAgcHJvZ3Jlc3NMaW5lLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlcyk7XHJcblxyXG4gICAgLy8gQWRkIGNsYXNzZXMgbmFtZSB3aGljaCBpcyBlcXVhbCB0byBjb3VudGVyIGxlbmd0aC5cclxuICAgIHByb2dyZXNzTGluZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbY291bnRlcl0pO1xyXG5cclxuXHJcbiAgICBpZiAocHJvZ3Jlc3NMaW5lLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc2VzW2NvdW50ZXJdKSkge1xyXG4gICAgICAvLyBSZW1vdmUgQWxsIGNsYXNzZXNcclxuICAgICAgdGV4dENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcclxuXHJcbiAgICAgIC8vIEFkZCBjbGFzc2VzIG5hbWUgd2hpY2ggaXMgZXF1YWwgdG8gY291bnRlciBsZW5ndGguXHJcbiAgICAgIHRleHRDb250ZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tjb3VudGVyXSk7XHJcbiAgICB9XHJcbiAgfSwgNzAwMCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgbmF2YmFyKCk7XHJcbiAgYnVyZ2VyTWVudSgpO1xyXG4gIGhlYWRlckFuaW1hdGlvbigpO1xyXG4gIGxhenlMb2FkSW1hZ2VzKCk7XHJcbiAgdGltZUxpbmUoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==