/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/changeSliderToGridLayout.js":
/*!*********************************************!*\
  !*** ./modules/changeSliderToGridLayout.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toggleHiddenClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleHiddenClass */ "./modules/toggleHiddenClass.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ "./modules/slider.js");





const ChangeSliderToGridLayout = () => {
    const changeSliderToGrid = document.querySelector("#flexButton");
    const changeSliderToFlex = document.querySelector("#gridButton");
    const hiddenPartsOfSlider = Array.from(document.querySelectorAll(".hidePartsOfSlider"));


    changeSliderToGrid.addEventListener("click", () => {
        _slider_js__WEBPACK_IMPORTED_MODULE_1__.slider.style.transform = `translate(${0}px)`;
        (0,_toggleHiddenClass__WEBPACK_IMPORTED_MODULE_0__["default"])(changeSliderToGrid);
        (0,_toggleHiddenClass__WEBPACK_IMPORTED_MODULE_0__["default"])(changeSliderToFlex);
        (0,_toggleHiddenClass__WEBPACK_IMPORTED_MODULE_0__["default"])(_slider_js__WEBPACK_IMPORTED_MODULE_1__.prevButton);
        (0,_toggleHiddenClass__WEBPACK_IMPORTED_MODULE_0__["default"])(_slider_js__WEBPACK_IMPORTED_MODULE_1__.nextButton);
        hiddenPartsOfSlider.forEach(i => {
            i.style.background = "none";
        });
        _slider_js__WEBPACK_IMPORTED_MODULE_1__.slider.classList.toggle("flexSlider");
        _slider_js__WEBPACK_IMPORTED_MODULE_1__.slider.classList.toggle("gridSlider");
    });
    changeSliderToFlex.addEventListener("click", () => {
        _slider_js__WEBPACK_IMPORTED_MODULE_1__.slider.style.transform = `translate(${_slider_js__WEBPACK_IMPORTED_MODULE_1__.sliderPosition}px)`;
        (0,_toggleHiddenClass__WEBPACK_IMPORTED_MODULE_0__["default"])(changeSliderToFlex);
        (0,_toggleHiddenClass__WEBPACK_IMPORTED_MODULE_0__["default"])(changeSliderToGrid);
        (0,_toggleHiddenClass__WEBPACK_IMPORTED_MODULE_0__["default"])(_slider_js__WEBPACK_IMPORTED_MODULE_1__.prevButton);
        (0,_toggleHiddenClass__WEBPACK_IMPORTED_MODULE_0__["default"])(_slider_js__WEBPACK_IMPORTED_MODULE_1__.nextButton);
        hiddenPartsOfSlider.forEach(i => {
            i.style.background = "rgb(41, 46, 54)";
        })
        _slider_js__WEBPACK_IMPORTED_MODULE_1__.slider.classList.toggle("flexSlider");
        _slider_js__WEBPACK_IMPORTED_MODULE_1__.slider.classList.toggle("gridSlider");
    });
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeSliderToGridLayout);



/***/ }),

/***/ "./modules/gridLayout.js":
/*!*******************************!*\
  !*** ./modules/gridLayout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function MakeLayoutGrid(layout, colls, collLen, rows, rowLen){

    layout.style.display = 'grid';
    layout.style.gridTemplateColumns = `repeat(${colls}, ${collLen}%)`;
    layout.style.gridTemplateRows = `repeat(${rows}, ${rowLen}%)`;
    layout.style.gap = '20px';
    Array.from(layout).forEach(e => {
        e.target.style.display = 'flex';
        e.target.style.alignItems = 'center';
    });

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MakeLayoutGrid);




/***/ }),

/***/ "./modules/postData.js":
/*!*****************************!*\
  !*** ./modules/postData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const PostData = () => {

    const userData = document.querySelector('#myForm');

    const postData = async (url, data) => {
        console.log(url);
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };


    function sendMessage() {
        $.ajax({
            type: "POST",
            url: "http://localhost:5000/message",
            success: callbackFunc("sudasuda")
        });
    }

    function callbackFunc(response) {
        // do something with the response
        console.log(response);
    }


    function sendData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const object = {};

            formData.forEach((value, key) => {
                object[key] = value;
            });

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            request.send(json);

            request.addEventListener('load', () => {
                if(request.status === 200){
                    console.log('Bomba');
                    sendMessage();
                }
            });
        });
    }


    sendData(userData);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostData);

/***/ }),

/***/ "./modules/showAndHideMenu.js":
/*!************************************!*\
  !*** ./modules/showAndHideMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const ShowAndHideMenu = () => { 
    const menuButton = Array.from(document.querySelectorAll(".menuButton"));
    const menu = document.querySelector("#menuDiv");
    const wholeMenu = document.querySelector(".wholeMenuDiv");

    function ShowOrHideMenu(wrapper, Menu, button){
        menuButton[0].classList.toggle("hidden");
        wrapper.classList.toggle("hidden");
        Menu.classList.toggle("shortMenu");
        Menu.classList.toggle("longMenu");
    }

    menuButton.forEach(btn => {
        btn.addEventListener('click', () => {
            ShowOrHideMenu(wholeMenu, menu, btn);
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowAndHideMenu);

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   nextButton: () => (/* binding */ nextButton),
/* harmony export */   prevButton: () => (/* binding */ prevButton),
/* harmony export */   slider: () => (/* binding */ slider),
/* harmony export */   sliderPosition: () => (/* binding */ sliderPosition),
/* harmony export */   slides: () => (/* binding */ slides)
/* harmony export */ });



const slides = Array.from(document.querySelectorAll(".slide"));
const slider = document.querySelector(".slider");
const prevButton = document.querySelector("#Prev");
const nextButton = document.querySelector('#Next');
let index = 2;

const oneSliderMove = slides[0].offsetWidth;
let sliderPosition = oneSliderMove * (slides.length / 2);  /*px*/


const Slider = () => {
    

    

    const startSliderPosition = oneSliderMove * (slides.length / 2) + "px";
    const endSliderPosition = -oneSliderMove * ((slides.length - 4) / 2) + "px";
    slider.style.transform = `translate(${startSliderPosition})`;
    slider.style.transition = '0.4s all';

    console.log(slides.length / 2);

    console.log(startSliderPosition);


    nextButton.addEventListener("click", () => {
        
        
        if(index == slides.length){
            index = 2;
            sliderPosition = oneSliderMove * (slides.length / 2);
            slider.style.transform = `translate(${startSliderPosition})`;
        }
        else{
            sliderPosition -= oneSliderMove;
            slider.style.transform = `translate(${sliderPosition}px)`;
            index++;
        }
        console.log(index);

        

    });

    prevButton.addEventListener("click", () => {

    if(index == 2){
        index = slides.length;
        sliderPosition = -oneSliderMove * ((slides.length - 4) / 2);
        slider.style.transform = `translate(${endSliderPosition})`;
    }
    else{
        sliderPosition += oneSliderMove;
        slider.style.transform = `translate(${sliderPosition}px)`;
        index--;
    }
    console.log(index);

    });
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);



/***/ }),

/***/ "./modules/toggleHiddenClass.js":
/*!**************************************!*\
  !*** ./modules/toggleHiddenClass.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function ToggleHidden(item){
    item.classList.toggle("hidden");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleHidden);

/***/ }),

/***/ "./modules/upArrow.js":
/*!****************************!*\
  !*** ./modules/upArrow.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });



const UpArrow = () => {
    const arrow = document.querySelector(".upArrow");
    console.log(scrollY);
    
    window.addEventListener("scroll", () => {
        if(scrollY > 100 && arrow.classList.contains("hidden")){
            arrow.classList.remove("hidden");
        }
        else if(scrollY == 0 && !arrow.classList.contains("hidden")){
            arrow.classList.add("hidden");
        }
    });
    
    arrow.addEventListener("click", () => {
        window.location.href = "#Home"
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpArrow);

/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/***/ (() => {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_gridLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gridLayout */ "./modules/gridLayout.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./modules/slider.js");
/* harmony import */ var _modules_showAndHideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showAndHideMenu */ "./modules/showAndHideMenu.js");
/* harmony import */ var _modules_changeSliderToGridLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changeSliderToGridLayout */ "./modules/changeSliderToGridLayout.js");
/* harmony import */ var _modules_upArrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/upArrow */ "./modules/upArrow.js");
/* harmony import */ var _modules_postData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/postData */ "./modules/postData.js");












window.addEventListener('DOMContentLoaded', () => {


const gridContainer = document.querySelector("#restPages");

(0,_modules_gridLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(gridContainer, 6, 18, 1, 100);

(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_showAndHideMenu__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_changeSliderToGridLayout__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_postData__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_modules_upArrow__WEBPACK_IMPORTED_MODULE_5__["default"])();


console.log(window.location.origin);


});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map