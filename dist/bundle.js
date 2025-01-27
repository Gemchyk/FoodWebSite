/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*Just a script because I don't know why, but webpack doesn't work without it*/
function pythonStart(){
    if (typeof window === 'undefined'){
        function startPythonScript() {
            const { exec } = __webpack_require__(/*! child_process */ "?ed3c"); // Убедитесь, что модуль подключен
            exec('python message.py', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Ошибка выполнения скрипта: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`Ошибка stderr: ${stderr}`);
                    return;
                }
                // Вы можете игнорировать stdout, если вам не нужно выводить результат
                console.log('Python скрипт выполнен');
            });
        }
        
        startPythonScript();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pythonStart);

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


/***/ }),

/***/ "?ed3c":
/*!*******************************!*\
  !*** child_process (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./app.js");




window.addEventListener('DOMContentLoaded', () => {


const gridContainer = document.querySelector("#restPages");

function makeLayoutGrid(layout, colls, collLen, rows, rowLen){

    layout.style.display = 'grid';
    layout.style.gridTemplateColumns = `repeat(${colls}, ${collLen}%)`;
    layout.style.gridTemplateRows = `repeat(${rows}, ${rowLen}%)`;
    layout.style.gap = '20px';
    Array.from(gridContainer).forEach(e => {
        e.target.style.display = 'flex';
        e.target.style.alignItems = 'center';
    });

}

makeLayoutGrid(gridContainer, 6, 18, 1, 100);




const slides = Array.from(document.querySelectorAll(".slide"));
const slider = document.querySelector(".slider");
const prevButton = document.querySelector("#Prev");
const nextButton = document.querySelector('#Next');
let index = 2;

const oneSliderMove = slides[0].offsetWidth;
let sliderPosition = oneSliderMove * (slides.length / 2);  /*px*/

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



function toggleHidden(item){

    item.classList.toggle("hidden");

}


const changeSliderToGrid = document.querySelector("#flexButton");
const changeSliderToFlex = document.querySelector("#gridButton");
const hiddenPartsOfSlider = Array.from(document.querySelectorAll(".hidePartsOfSlider"));


changeSliderToGrid.addEventListener("click", () => {
    slider.style.transform = `translate(${0}px)`;
    toggleHidden(changeSliderToGrid);
    toggleHidden(changeSliderToFlex);
    toggleHidden(prevButton);
    toggleHidden(nextButton);
    hiddenPartsOfSlider.forEach(i => {
        i.style.background = "none";
    });
    slider.classList.toggle("flexSlider");
    slider.classList.toggle("gridSlider");
});
changeSliderToFlex.addEventListener("click", () => {
    slider.style.transform = `translate(${sliderPosition}px)`;
    toggleHidden(changeSliderToFlex);
    toggleHidden(changeSliderToGrid);
    toggleHidden(prevButton);
    toggleHidden(nextButton);
    hiddenPartsOfSlider.forEach(i => {
        i.style.background = "rgb(41, 46, 54)";
    })
    slider.classList.toggle("flexSlider");
    slider.classList.toggle("gridSlider");
});
    



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

console.log(window.location.origin);



/*----Up Arrow-----*/

const arrow = document.querySelector(".upArrow");

window.addEventListener("scroll", () => {
    if(scrollY != 0 && arrow.classList.contains("hidden")){
        arrow.classList.remove("hidden");
    }
    else if(scrollY == 0 && !arrow.classList.contains("hidden")){
        arrow.classList.add("hidden");
    }
});

arrow.addEventListener("click", () => {
    window.location.href = "#Home"
});


});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map