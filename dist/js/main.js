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
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        entry.target.classList.add("fadeIn");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  images.forEach(image => {
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
  const classes = ["go", "occasion-one", "occasion-two", "occasion-three", "occasion-four"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDQUQsWUFBWSxDQUFDMUMsU0FBUyxDQUFDQyxHQUFHLENBQUMwQyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0lBRTVDLElBQUlGLFlBQVksQ0FBQzFDLFNBQVMsQ0FBQzhDLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxFQUFFO01BQ3JEO01BQ0EvQixXQUFXLENBQUNiLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLEdBQUd5QyxPQUFPLENBQUM7O01BRXhDO01BQ0E5QixXQUFXLENBQUNiLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDMEMsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQztJQUM3QztFQUNGLENBQUMsRUFBRSxJQUFJLENBQUM7QUFDVjtBQUVBL0MsTUFBTSxDQUFDUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBWTtFQUMxQ1osTUFBTSxDQUFDLENBQUM7RUFDUlMsVUFBVSxDQUFDLENBQUM7RUFDWk0sZUFBZSxDQUFDLENBQUM7RUFDakJhLGNBQWMsQ0FBQyxDQUFDO0VBQ2hCbUIsUUFBUSxDQUFDLENBQUM7QUFDWixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL09HSS1XZWJzaXRlLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz8zZmNiIiwid2VicGFjazovL09HSS1XZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09HSS1XZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vT0dJLVdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Fzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBuYXZiYXIoKSB7XHJcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBidXJnZXJNZW51KCkge1xyXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyX21lbnVcIik7XHJcbiAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JfbmF2XCIpO1xyXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm9fc2Nyb2xsXCIpO1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgbW9iaWxlTmF2LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBIZWFkaW5nIEFuaW1hdGlvblxyXG5mdW5jdGlvbiBoZWFkZXJBbmltYXRpb24oKSB7XHJcbiAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRpbmdcIik7XHJcbiAgbGV0IGxldHRlcnMgPSB0ZXh0LnRleHRDb250ZW50LnNwbGl0KFwiXCIpO1xyXG4gIHRleHQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbGV0dGVyc1tpXTtcclxuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImxldHRlci1mYWRlXCIpO1xyXG4gICAgc3Bhbi5zdHlsZS5hbmltYXRpb25EZWxheSA9IGkgKiAwLjEgKyBcInNcIjsgLy8gRGVsYXkgZWFjaCBsZXR0ZXIgYnkgMC4xc1xyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxhenlMb2FkSW1hZ2VzKCkge1xyXG4gIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zcmNdXCIpO1xyXG4gIGNvbnN0IGltYWdlT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgcHJlbG9hZEltYWdlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImZhZGVJblwiKTtcclxuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgeyB0aHJlc2hvbGQ6IDAuNSB9XHJcbiAgKTtcclxuXHJcbiAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XHJcbiAgICBpbWFnZU9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBwcmVsb2FkSW1hZ2UoaW1nKSB7XHJcbiAgICBjb25zdCBzcmMgPSBpbWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XHJcbiAgICBpZiAoIXNyYykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpbWcuc3JjID0gc3JjO1xyXG4gIH1cclxufVxyXG5cclxuLy8gVGltZWxpbmVcclxuZnVuY3Rpb24gdGltZUxpbmUoKSB7XHJcbiAgY29uc3QgcHJvZ3Jlc3NMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19jb250ZW50XCIpO1xyXG4gIGNvbnN0IHRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lbGluZV9yaWdodFwiKTtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IFtcclxuICAgIFwiZ29cIixcclxuICAgIFwib2NjYXNpb24tb25lXCIsXHJcbiAgICBcIm9jY2FzaW9uLXR3b1wiLFxyXG4gICAgXCJvY2Nhc2lvbi10aHJlZVwiLFxyXG4gICAgXCJvY2Nhc2lvbi1mb3VyXCIsXHJcbiAgXTtcclxuXHJcbiAgbGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuICBpZiAocHJvZ3Jlc3NMaW5lKSB7XHJcbiAgICBwcm9ncmVzc0xpbmUuY2xhc3NMaXN0LmFkZChcImdvXCIpO1xyXG4gICAgdGV4dENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImdvXCIpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSBjbGFzc2VzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBSZW1vdmUgQWxsIGNsYXNzZXNcclxuICAgIHByb2dyZXNzTGluZS5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXMpO1xyXG5cclxuICAgIC8vIEFkZCBjbGFzc2VzIG5hbWUgd2hpY2ggaXMgZXF1YWwgdG8gY291bnRlciBsZW5ndGguXHJcbiAgICBwcm9ncmVzc0xpbmUuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2NvdW50ZXJdKTtcclxuXHJcbiAgICBpZiAocHJvZ3Jlc3NMaW5lLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc2VzW2NvdW50ZXJdKSkge1xyXG4gICAgICAvLyBSZW1vdmUgQWxsIGNsYXNzZXNcclxuICAgICAgdGV4dENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcclxuXHJcbiAgICAgIC8vIEFkZCBjbGFzc2VzIG5hbWUgd2hpY2ggaXMgZXF1YWwgdG8gY291bnRlciBsZW5ndGguXHJcbiAgICAgIHRleHRDb250ZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tjb3VudGVyXSk7XHJcbiAgICB9XHJcbiAgfSwgNzAwMCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgbmF2YmFyKCk7XHJcbiAgYnVyZ2VyTWVudSgpO1xyXG4gIGhlYWRlckFuaW1hdGlvbigpO1xyXG4gIGxhenlMb2FkSW1hZ2VzKCk7XHJcbiAgdGltZUxpbmUoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJuYXZiYXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJidXJnZXJNZW51IiwiYnVyZ2VyIiwibW9iaWxlTmF2IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJ0b2dnbGUiLCJoZWFkZXJBbmltYXRpb24iLCJ0ZXh0IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZXR0ZXJzIiwidGV4dENvbnRlbnQiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJhcHBlbmRDaGlsZCIsImxhenlMb2FkSW1hZ2VzIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImltYWdlT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnNlcnZlciIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicHJlbG9hZEltYWdlIiwidGFyZ2V0IiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwiaW1hZ2UiLCJvYnNlcnZlIiwiaW1nIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwidGltZUxpbmUiLCJwcm9ncmVzc0xpbmUiLCJjbGFzc2VzIiwiY291bnRlciIsInNldEludGVydmFsIiwiY29udGFpbnMiXSwic291cmNlUm9vdCI6IiJ9