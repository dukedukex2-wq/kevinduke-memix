/* Header onScroll animation */
// const header = document.querySelector("navbarheader");

// window.addEventListener("scroll", function() {
//     navbarheader.classList.toggle("sticky", window.scrollY > 20);
// });

/* Darkmode */
let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
    if(darkmode.classList.contains('ri-moon-clear-line')) {
        darkmode.classList.replace('ri-moon-clear-line', 'ri-sun-foggy-line');
        document.body.classList.add('color');
    }
    else{
        darkmode.classList.replace('ri-sun-foggy-line', 'ri-moon-clear-line');
        document.body.classList.remove('color');
    };
};

// For the menu-icon here
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-nav');

// For menu opening
menu.onclick = () => {
    menu.classList.toggle('ri-close-large-line');
    navbar.classList.toggle('.collapse');
}
window.onscroll = () => {
    navbar.classList.remove('.collapse');   
}





