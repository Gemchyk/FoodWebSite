


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


export { slider, slides, prevButton, nextButton, sliderPosition };
export default Slider;

