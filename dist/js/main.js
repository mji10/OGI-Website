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
  console.log(images);
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
    console.log(src);
  }
}
function loadSvg() {
  function lazyLoad(entries, observer) {
    entries.forEach(entry => {
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
  const observer = new IntersectionObserver(lazyLoad, {
    threshold: 1
  });
  const lazySvgElements = document.querySelectorAll('.lazy-svg');
  Array.from(lazySvgElements).forEach(element => {
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
  loadSvg();
  timeLine();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsR0FBR3FELE9BQU8sQ0FBQzs7SUFFekM7SUFDQUQsWUFBWSxDQUFDdEQsU0FBUyxDQUFDQyxHQUFHLENBQUNzRCxPQUFPLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0lBRTVDLElBQUlGLFlBQVksQ0FBQ3RELFNBQVMsQ0FBQzBELFFBQVEsQ0FBQ0gsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxFQUFFO01BQ3JEO01BQ0EzQyxXQUFXLENBQUNiLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLEdBQUdxRCxPQUFPLENBQUM7O01BRXhDO01BQ0ExQyxXQUFXLENBQUNiLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDc0QsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQztJQUM3QztFQUNGLENBQUMsRUFBRSxJQUFJLENBQUM7QUFDVjtBQUVBM0QsTUFBTSxDQUFDUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBWTtFQUMxQ1osTUFBTSxDQUFDLENBQUM7RUFDUlMsVUFBVSxDQUFDLENBQUM7RUFDWk0sZUFBZSxDQUFDLENBQUM7RUFDakJhLGNBQWMsQ0FBQyxDQUFDO0VBQ2hCcUIsT0FBTyxDQUFDLENBQUM7RUFDVFUsUUFBUSxDQUFDLENBQUM7QUFDWixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL09HSS1XZWJzaXRlLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz8zZmNiIiwid2VicGFjazovL09HSS1XZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09HSS1XZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vT0dJLVdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Fzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBuYXZiYXIoKSB7XHJcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBidXJnZXJNZW51KCkge1xyXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyX21lbnVcIik7XHJcbiAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JfbmF2XCIpO1xyXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm9fc2Nyb2xsXCIpO1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgbW9iaWxlTmF2LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBIZWFkaW5nIEFuaW1hdGlvblxyXG5mdW5jdGlvbiBoZWFkZXJBbmltYXRpb24oKSB7XHJcbiAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRpbmdcIik7XHJcbiAgbGV0IGxldHRlcnMgPSB0ZXh0LnRleHRDb250ZW50LnNwbGl0KFwiXCIpO1xyXG4gIHRleHQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbGV0dGVyc1tpXTtcclxuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImxldHRlci1mYWRlXCIpO1xyXG4gICAgc3Bhbi5zdHlsZS5hbmltYXRpb25EZWxheSA9IGkgKiAwLjEgKyBcInNcIjsgLy8gRGVsYXkgZWFjaCBsZXR0ZXIgYnkgMC4xc1xyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxhenlMb2FkSW1hZ2VzKCkge1xyXG4gIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zcmNdXCIpO1xyXG4gIGNvbnNvbGUubG9nKGltYWdlcyk7XHJcbiAgY29uc3QgaW1hZ2VPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgIChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICBwcmVsb2FkSW1hZ2UoZW50cnkudGFyZ2V0KTtcclxuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZmFkZUluXCIpO1xyXG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB7IHRocmVzaG9sZDogMC41IH1cclxuICApO1xyXG5cclxuICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcclxuICAgIGltYWdlT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHByZWxvYWRJbWFnZShpbWcpIHtcclxuICAgIGNvbnN0IHNyYyA9IGltZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtcclxuICAgIGlmICghc3JjKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICBjb25zb2xlLmxvZyhzcmMpXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkU3ZnKCl7XHJcbmZ1bmN0aW9uIGxhenlMb2FkKGVudHJpZXMsIG9ic2VydmVyKSB7XHJcbiAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgIGNvbnN0IHN2ZyA9IGVudHJ5LnRhcmdldDtcclxuICAgICAgY29uc3Qgc3ZnVXNlID0gc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3VzZScpO1xyXG4gICAgICBjb25zb2xlLmxvZyhzdmdVc2UpO1xyXG4gICAgICBjb25zdCBzcHJpdGVTcmMgPSBzdmdVc2UuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwcml0ZVNyYyk7XHJcbiAgICAgIHN2Z1VzZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBzcHJpdGVTcmMpO1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImZhZGVJblwiKTtcclxuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHN2Zyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGxhenlMb2FkLCB7IHRocmVzaG9sZDogMSB9KTtcclxuXHJcbmNvbnN0IGxhenlTdmdFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXp5LXN2ZycpO1xyXG5BcnJheS5mcm9tKGxhenlTdmdFbGVtZW50cykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XHJcbn0pO1xyXG59XHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGxhenlMb2FkVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eS1zdmcnKTtcclxuLy8gICBBcnJheS5mcm9tKGxhenlMb2FkVHJpZ2dlcnMpLmZvckVhY2goKHRyaWdnZXIpID0+IHtcclxuLy8gICAgIG9ic2VydmVyLm9ic2VydmUodHJpZ2dlcik7XHJcbi8vICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcblxyXG4vLyBUaW1lbGluZVxyXG5mdW5jdGlvbiB0aW1lTGluZSgpIHtcclxuICBjb25zdCBwcm9ncmVzc0xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX2NvbnRlbnRcIik7XHJcbiAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVsaW5lX3JpZ2h0XCIpO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gW1xyXG4gICAgXCJnb1wiLFxyXG4gICAgXCJvY2Nhc2lvbi1vbmVcIixcclxuICAgIFwib2NjYXNpb24tdHdvXCIsXHJcbiAgICBcIm9jY2FzaW9uLXRocmVlXCIsXHJcbiAgICBcIm9jY2FzaW9uLWZvdXJcIixcclxuICBdO1xyXG5cclxuICBsZXQgY291bnRlciA9IDA7XHJcblxyXG4gIGlmIChwcm9ncmVzc0xpbmUpIHtcclxuICAgIHByb2dyZXNzTGluZS5jbGFzc0xpc3QuYWRkKFwiZ29cIik7XHJcbiAgICB0ZXh0Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiZ29cIik7XHJcbiAgfVxyXG5cclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjb3VudGVyID0gKGNvdW50ZXIgKyAxKSAlIGNsYXNzZXMubGVuZ3RoO1xyXG5cclxuICAgIC8vIFJlbW92ZSBBbGwgY2xhc3Nlc1xyXG4gICAgcHJvZ3Jlc3NMaW5lLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlcyk7XHJcblxyXG4gICAgLy8gQWRkIGNsYXNzZXMgbmFtZSB3aGljaCBpcyBlcXVhbCB0byBjb3VudGVyIGxlbmd0aC5cclxuICAgIHByb2dyZXNzTGluZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbY291bnRlcl0pO1xyXG5cclxuICAgIGlmIChwcm9ncmVzc0xpbmUuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXNbY291bnRlcl0pKSB7XHJcbiAgICAgIC8vIFJlbW92ZSBBbGwgY2xhc3Nlc1xyXG4gICAgICB0ZXh0Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXMpO1xyXG5cclxuICAgICAgLy8gQWRkIGNsYXNzZXMgbmFtZSB3aGljaCBpcyBlcXVhbCB0byBjb3VudGVyIGxlbmd0aC5cclxuICAgICAgdGV4dENvbnRlbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2NvdW50ZXJdKTtcclxuICAgIH1cclxuICB9LCA3MDAwKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBuYXZiYXIoKTtcclxuICBidXJnZXJNZW51KCk7XHJcbiAgaGVhZGVyQW5pbWF0aW9uKCk7XHJcbiAgbGF6eUxvYWRJbWFnZXMoKTtcclxuICBsb2FkU3ZnKCk7XHJcbiAgdGltZUxpbmUoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJuYXZiYXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJidXJnZXJNZW51IiwiYnVyZ2VyIiwibW9iaWxlTmF2IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJ0b2dnbGUiLCJoZWFkZXJBbmltYXRpb24iLCJ0ZXh0IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZXR0ZXJzIiwidGV4dENvbnRlbnQiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJhcHBlbmRDaGlsZCIsImxhenlMb2FkSW1hZ2VzIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZU9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInByZWxvYWRJbWFnZSIsInRhcmdldCIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsImltYWdlIiwib2JzZXJ2ZSIsImltZyIsInNyYyIsImdldEF0dHJpYnV0ZSIsImxvYWRTdmciLCJsYXp5TG9hZCIsInN2ZyIsInN2Z1VzZSIsInNwcml0ZVNyYyIsInNldEF0dHJpYnV0ZSIsImxhenlTdmdFbGVtZW50cyIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnQiLCJ0aW1lTGluZSIsInByb2dyZXNzTGluZSIsImNsYXNzZXMiLCJjb3VudGVyIiwic2V0SW50ZXJ2YWwiLCJjb250YWlucyJdLCJzb3VyY2VSb290IjoiIn0=