

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

export default ShowAndHideMenu;