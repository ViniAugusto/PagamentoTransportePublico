let buttonMenuMobile = document.querySelector(".menu");

buttonMenuMobile.onclick = () => {
    buttonMenuMobile.classList.toggle("active");
    menuMobile.classList.toggle("hide");
}