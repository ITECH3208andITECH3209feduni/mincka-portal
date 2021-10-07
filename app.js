let navbar_container = document.querySelector(".navbar_continer");

// animation for menu in sidebar
let openMenubtn = document.querySelector(".navbar_container .bx-menu");
let closeMenubtn = document.querySelector(".navbar_menu .bx-x");
let navMenu = document.querySelector(".navbar_menu");

openMenubtn.addEventListener("click", ()=>{
    navMenu.style.left="0";
});
closeMenubtn.addEventListener("click", ()=>{
    navMenu.style.left="-100%";
});

// animation for submenu in sidebar
let htmlCssArrow = document.querySelector(".html-css-arrow");
htmlCssArrow.addEventListener("click", ()=>{
    navMenu.classList.toggle("show1");
});

// $(document).ready(function(){
//     $('.customer-logos').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         arrows: false,
//         dots: false,
//             pauseOnHover: false,
//             responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 3
//             }
//         }, {
//             breakpoint: 520,
//             settings: {
//                 slidesToShow: 2
//             }
//         }]
//     });
// });