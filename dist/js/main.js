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
// import "./sass/base/_typography.scss";
// import "./sass/base/_fonts.scss";


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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQzJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL09HSS1XZWJzaXRlLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz8zZmNiIiwid2VicGFjazovL09HSS1XZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09HSS1XZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vT0dJLVdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBcIi4vc2Fzcy9iYXNlL190eXBvZ3JhcGh5LnNjc3NcIjtcclxuLy8gaW1wb3J0IFwiLi9zYXNzL2Jhc2UvX2ZvbnRzLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zYXNzL3N0eWxlLnNjc3NcIjtcclxuXHJcbmZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIik7XHJcbiAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBidXJnZXJNZW51KCkge1xyXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyX21lbnVcIik7XHJcbiAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JfbmF2XCIpO1xyXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm9fc2Nyb2xsXCIpO1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgbW9iaWxlTmF2LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBIZWFkaW5nIEFuaW1hdGlvblxyXG5mdW5jdGlvbiBoZWFkQW5pKCkge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRpbmdcIik7XHJcblxyXG4gIGZ1bmN0aW9uIHRyaWdnZXJBbmltYXRpb25TZXF1ZW5jZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCBsZXR0ZXJzQXJyYXkgPSBlbGVtZW50LmlubmVySFRNTC5zcGxpdChcIlwiKTtcclxuICAgIGNvbnNvbGUubG9nKGxldHRlcnNBcnJheSk7XHJcbiAgICBsZXQgZGVsYXkgPSAwO1xyXG5cclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldHRlcnNBcnJheS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcclxuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgbGV0IGF0dHIgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWFuaW1hdGVcIik7XHJcblxyXG4gICAgICBzcGFuLnNldEF0dHJpYnV0ZU5vZGUoYXR0cik7XHJcbiAgICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xyXG4gICAgICBzcGFuLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGAke2RlbGF5fW1zYDtcclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgIHZvaWQgc3Bhbi5vZmZzZXRXaWR0aDtcclxuICAgICAgY29uc29sZS5sb2coc3Bhbi5vZmZzZXRXaWR0aCk7XHJcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVkXCIpO1xyXG4gICAgICBkZWxheSArPSA3MDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICB0cmlnZ2VyQW5pbWF0aW9uU2VxdWVuY2UoaGVhZGluZyk7XHJcbiAgfSwgMTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGF6eUxvYWQoKSB7XHJcbiAgY29uc3QgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc3JjXVwiKTtcclxuICAvLyBjb25zdCBsYXp5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYXp5XCIpO1xyXG4gIGNvbnNvbGUubG9nKGJnKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cobGF6eUltYWdlcyk7XHJcblxyXG4gIGNvbnN0IGFwcGVhciA9IFsuLi5iZ107XHJcblxyXG4gIGNvbnNvbGUubG9nKGFwcGVhcik7XHJcbiAgLy8gY29uc29sZS5sb2coYXBwZWFyKTtcclxuICBjb25zdCBhcHBlYXJJbWFnZSA9IHtcclxuICAgIHRocmVzaG9sZDogMC41LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoaW1nKSB7XHJcbiAgICBjb25zdCBzcmMgPSBpbWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XHJcblxyXG4gICAgaWYgKCFzcmMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcHBlYXJPblNjcm9sbCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgYXBwZWFyT25TY3JvbGwpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcmVsb2FkSW1hZ2VzKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJmYWRlSW5cIik7XHJcbiAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgYXBwZWFyT25TY3JvbGwudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIGFwcGVhckltYWdlKTtcclxuXHJcbiAgYmcuZm9yRWFjaCgoZmFkZSkgPT4ge1xyXG4gICAgYXBwZWFyT25TY3JvbGwub2JzZXJ2ZShmYWRlKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGF6eUJnTG9hZCgpIHtcclxuICBjb25zdCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmdMYXp5XCIpO1xyXG4gIGNvbnNvbGUubG9nKGJnKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cobGF6eUltYWdlcyk7XHJcblxyXG4gIGNvbnN0IGFwcGVhciA9IFsuLi5iZ107XHJcblxyXG4gIGNvbnNvbGUubG9nKGFwcGVhcik7XHJcbiAgY29uc29sZS5sb2coYXBwZWFyKTtcclxuICBjb25zdCBhcHBlYXJJbWFnZSA9IHtcclxuICAgIHRocmVzaG9sZDogMC41LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFwcGVhck9uU2Nyb2xsID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChcclxuICAgIGVudHJpZXMsXHJcbiAgICBhcHBlYXJPblNjcm9sbFxyXG4gICkge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZmFkZUluXCIpO1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgIGFwcGVhck9uU2Nyb2xsLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGFwcGVhckltYWdlKTtcclxuXHJcbiAgYXBwZWFyLmZvckVhY2goKGZhZGUpID0+IHtcclxuICAgIGFwcGVhck9uU2Nyb2xsLm9ic2VydmUoZmFkZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgbmF2YmFyKCk7XHJcbiAgYnVyZ2VyTWVudSgpO1xyXG4gIGhlYWRBbmkoKTtcclxuICBsYXp5TG9hZCgpO1xyXG4gIGxhenlCZ0xvYWQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==