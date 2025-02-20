


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

export default UpArrow;