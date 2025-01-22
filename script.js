import 'nodelist-foreach-polyfill';


import pythonStart from './app';
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
   

    // slides[index].classList.add('hidden');
   //     if(index == slides.length - 1)
   //     {
   //         index = 0;
   //     }
   //     else{
   //         index++;
   //     }
       
   //     slides[index].classList.remove('hidden');


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
})
    



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


});

