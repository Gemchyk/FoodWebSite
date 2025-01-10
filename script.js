window.addEventListener('DOMContentLoaded', () => {

// function updateViewportsToPX(elementWidth, elementHeight)
// {
//     const width = window.innerWidth(elementWidth);
//     const height = window.innerHeight(elementHeight);



// }

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
const sliderButton = document.querySelector('.Btn');
let index = 0;



sliderButton.addEventListener("click", () => {
    slides[index].classList.add('hidden');
        if(index == slides.length - 1)
        {
            index = 0;
        }
        else{
            index++;
        }
        
        slides[index].classList.remove('hidden');
});


const menuButton = document.querySelector(".menuButton");
const menu = document.querySelector("#menuDiv");
const wholeMenu = document.querySelector(".wholeMenuDiv");

menuButton.addEventListener('click', () => {
    wholeMenu.classList.toggle("hidden");
    menu.classList.toggle("shortMenu");
    menu.classList.toggle("longMenu");

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
            }
        });
    });
}


sendData(userData);



});

