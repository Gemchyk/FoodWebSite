import ToggleHidden from "./toggleHiddenClass";
import { slider, prevButton, nextButton, sliderPosition } from './slider.js'



const ChangeSliderToGridLayout = () => {
    const changeSliderToGrid = document.querySelector("#flexButton");
    const changeSliderToFlex = document.querySelector("#gridButton");
    const hiddenPartsOfSlider = Array.from(document.querySelectorAll(".hidePartsOfSlider"));


    changeSliderToGrid.addEventListener("click", () => {
        slider.style.transform = `translate(${0}px)`;
        ToggleHidden(changeSliderToGrid);
        ToggleHidden(changeSliderToFlex);
        ToggleHidden(prevButton);
        ToggleHidden(nextButton);
        hiddenPartsOfSlider.forEach(i => {
            i.style.background = "none";
        });
        slider.classList.toggle("flexSlider");
        slider.classList.toggle("gridSlider");
    });
    changeSliderToFlex.addEventListener("click", () => {
        slider.style.transform = `translate(${sliderPosition}px)`;
        ToggleHidden(changeSliderToFlex);
        ToggleHidden(changeSliderToGrid);
        ToggleHidden(prevButton);
        ToggleHidden(nextButton);
        hiddenPartsOfSlider.forEach(i => {
            i.style.background = "rgb(41, 46, 54)";
        })
        slider.classList.toggle("flexSlider");
        slider.classList.toggle("gridSlider");
    });
}


export default ChangeSliderToGridLayout;

