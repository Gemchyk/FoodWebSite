import 'nodelist-foreach-polyfill';


import MakeLayoutGrid from './modules/gridLayout';
import Slider from './modules/slider';
import ShowAndHideMenu from './modules/showAndHideMenu';
import ChangeSliderToGridLayout from './modules/changeSliderToGridLayout';
import UpArrow from './modules/upArrow';
import PostData from './modules/postData';



window.addEventListener('DOMContentLoaded', () => {


const gridContainer = document.querySelector("#restPages");

MakeLayoutGrid(gridContainer, 6, 18, 1, 100);

Slider();
ShowAndHideMenu();
ChangeSliderToGridLayout();
PostData();
UpArrow();


console.log(window.location.origin);


});

