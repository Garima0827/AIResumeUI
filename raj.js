


var wrapper = document.querySelector("body .wrapper");
var navLinks = document.querySelectorAll(".menu a");
var sections = document.querySelectorAll(".section");
var header = document.getElementById("header");
var menu = document.querySelector("header .menu");
var openBar = document.querySelector(".show-bar");
var menuShadow = document.querySelector(".menu-shadow");
var isMenuOpen = false;

function setActiveNavLink() {
    let fromTop = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 150;
        let sectionBottom = sectionTop + section.offsetHeight;

        if (fromTop >= sectionTop && fromTop < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === section.id) {
                    link.classList.add("active");
                }
            });
        }
    });

    if (fromTop > 100) {
        header.classList.add("active1");
    } else {
        header.classList.remove("active1");
    }
}
window.addEventListener("scroll", setActiveNavLink);

function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        menu.classList.add("menu-active");
        menuShadow.classList.add("shadow-active");
    } else {
        menu.classList.remove("menu-active");
        menuShadow.classList.remove("shadow-active");
    }
    document.querySelector('.raj-menu-btn').classList.toggle('open');
}

window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

function closeMenu() {
    if (isMenuOpen) {
        toggleMenu();
    }
}

// Initial call to set the active link on page load
setActiveNavLink();





var modal = document.querySelector(".modal");
var trigger = document.querySelector(".privecy_policy_link");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);