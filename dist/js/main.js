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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQzJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL09HSS1XZWJzaXRlLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz8zZmNiIiwid2VicGFjazovL09HSS1XZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09HSS1XZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vT0dJLVdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBcIi4vc2Fzcy9iYXNlL190eXBvZ3JhcGh5LnNjc3NcIjtcclxuLy8gaW1wb3J0IFwiLi9zYXNzL2Jhc2UvX2ZvbnRzLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zYXNzL3N0eWxlLnNjc3NcIjtcclxuXHJcbmZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIik7XHJcbiAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG4vLyBIZWFkaW5nIEFuaW1hdGlvblxyXG5mdW5jdGlvbiBoZWFkQW5pKCkge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRpbmdcIik7XHJcblxyXG4gIGZ1bmN0aW9uIHRyaWdnZXJBbmltYXRpb25TZXF1ZW5jZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCBsZXR0ZXJzQXJyYXkgPSBlbGVtZW50LmlubmVySFRNTC50cmltKCkuc3BsaXQoXCJcIik7XHJcbiAgICBsZXQgZGVsYXkgPSAwO1xyXG5cclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldHRlcnNBcnJheS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcclxuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgbGV0IGF0dHIgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWFuaW1hdGVcIik7XHJcblxyXG4gICAgICBzcGFuLnNldEF0dHJpYnV0ZU5vZGUoYXR0cik7XHJcbiAgICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xyXG4gICAgICBzcGFuLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGAke2RlbGF5fW1zYDtcclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgIHZvaWQgc3Bhbi5vZmZzZXRXaWR0aDtcclxuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZWRcIik7XHJcbiAgICAgIGRlbGF5ICs9IDcwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFuaW1hdGVcIik7XHJcbiAgfVxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHRyaWdnZXJBbmltYXRpb25TZXF1ZW5jZShoZWFkaW5nKTtcclxuICB9LCAxMDAwKTtcclxufVxyXG5cclxuLy8gSW1hZ2VzIExhenktTG9hZGluZ1xyXG4vLyBmdW5jdGlvbiBsYXp5SW1hZ2VzKCkge1xyXG4vLyAgIGNvbnN0IGxhenlUYXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYXp5XCIpO1xyXG5cclxuLy8gICBjb25zb2xlLmxvZyhsYXp5VGFyZ2V0cyk7XHJcblxyXG4vLyAgIC8vIFRoZSBsYXp5IGxvYWRpbmcgb2JzZXJ2ZXJcclxuLy8gICBmdW5jdGlvbiBsYXp5TG9hZCh0YXJnZXQpIHtcclxuLy8gICAgIGNvbnN0IG9icyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuLy8gICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4vLyAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4vLyAgICAgICAgICAgY29uc3QgaW1nID0gZW50cnkudGFyZ2V0O1xyXG4vLyAgICAgICAgICAgY29uc3Qgc3JjID0gaW1nLmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpO1xyXG5cclxuLy8gICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3JjKTtcclxuLy8gICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiZmFkZUluXCIpO1xyXG5cclxuLy8gICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuLy8gICAgIG9icy5vYnNlcnZlKHRhcmdldCk7XHJcbi8vICAgfVxyXG4vLyAgIGxhenlUYXJnZXRzLmZvckVhY2gobGF6eUxvYWQoKSk7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGxhenlMb2FkKCkge1xyXG4gIGNvbnN0IGxhenlJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhenlcIik7XHJcblxyXG4gIGNvbnNvbGUubG9nKGxhenlJbWFnZXMpO1xyXG5cclxuICBjb25zdCBhcHBlYXIgPSBbLi4ubGF6eUltYWdlc107XHJcbiAgY29uc29sZS5sb2coYXBwZWFyKTtcclxuICBjb25zdCBhcHBlYXJJbWFnZSA9IHtcclxuICAgIHRocmVzaG9sZDogMC41LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFwcGVhck9uU2Nyb2xsID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChcclxuICAgIGVudHJpZXMsXHJcbiAgICBhcHBlYXJPblNjcm9sbFxyXG4gICkge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZmFkZUluXCIpO1xyXG4gICAgICAgIGFwcGVhck9uU2Nyb2xsLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGFwcGVhckltYWdlKTtcclxuXHJcbiAgYXBwZWFyLmZvckVhY2goKGZhZGUpID0+IHtcclxuICAgIGFwcGVhck9uU2Nyb2xsLm9ic2VydmUoZmFkZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgbmF2YmFyKCk7XHJcbiAgaGVhZEFuaSgpO1xyXG4gIGxhenlMb2FkKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=