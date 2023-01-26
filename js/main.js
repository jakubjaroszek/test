const navIcon = document.querySelector(".hamburger-icon");
const dropDownMenuMobile = document.querySelector(".drop-down-menu-mobile");
const BarsButtonMobileNav = document.querySelector(".navbar-toggler");
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");

const desktopNav = document.querySelector(".desktop-nav");
const desktopNavBrand = document.querySelector(".navbar-brand-desktop");
const navbarNavDesktop = document.querySelector(".navbar-nav-desktop");
const navItemsDesktop = document.querySelectorAll(".nav-link");

const cardTextSecond = document.querySelector(".card-text-second");

const cardBtnFirst = document.querySelector(".card-btn-first");
const cardBtnSecond = document.querySelector(".card-btn-second");
const cardBtnThird = document.querySelector(".card-btn-third");
 const footerYear = document.querySelector('.footer-year')

const handleAboutUsInfo = (event) => {
            const containerForEvent = event.target;
            // console.log(containerForEvent);
             let cls =containerForEvent.classList;
             console.log(cls);
            switch (true) {
                case cls.contains('card-btn-first'):
                  cardTextSecond.textContent =
                    "Naszą misją jest informatyczne wspracie biznesu klientów. Dążymy do tego aby nasza oferta spełniała Państwa oczekiwania. Powierzenie nam funkcjonowania działu IT pozwoli zaoszczędzić Państwa czas i pieniądze.";
                    cardBtnFirst.classList.add('about-us-marked');
                    cardBtnSecond.classList.remove('about-us-marked');
                    cardBtnThird.classList.remove('about-us-marked');
                    break;
                case cls.contains('card-btn-second'):
                  cardTextSecond.textContent = 
                  "Wiedza i doświadcznie z zakresu informatyki oraz zorientowanie na potrzeby klienta pozwala oferować opytmalne rozwiązania. Stosujemy najnowsze rozwiązania technologiczne dostępne na rynku.";
                    cardBtnSecond.classList.add('about-us-marked');
                    cardBtnFirst.classList.remove('about-us-marked');
                    cardBtnThird.classList.remove('about-us-marked');
                  break;
                  case cls.contains('card-btn-third'):
                  cardTextSecond.textContent= "Nasz zespół to wysoce wykfalifikowani specjaliści zorientowani na klienta. Pozwala to na zapewnienie zgodności realizowanych działań z regulacjami prawnymi.";    
                  cardBtnThird.classList.add('about-us-marked');
                  cardBtnSecond.classList.remove('about-us-marked');
                  cardBtnFirst.classList.remove('about-us-marked');
                  default:
             }
}



window.onscroll = function () {
  let scroll = window.scrollY;
  if (scroll > 51) {
    desktopNav.classList.add("fixed-top", "scrolling");
    desktopNavBrand.classList.add("nav-bar-white");
    navbarNavDesktop.classList.add("nav-bar-nav-orange");
    navItemsDesktop.forEach((item) => {
      item.classList.add("nav-bar-white");
    });
  } else {
    desktopNav.classList.remove("fixed-top", "scrolling");
    desktopNavBrand.classList.remove("nav-bar-white");
    navbarNavDesktop.classList.remove("nav-bar-nav-orange");
    navItemsDesktop.forEach((item) => {
      item.classList.remove("nav-bar-white");
    });
  }
};

const handleNavIconChange = () => {
  navIcon.classList.toggle("open");
};

const handleDropDownMenu = () => {
  dropDownMenuMobile.classList.toggle("drop-down-menu-mobile-active");
  dropdownMenu.classList.remove("show");
};

const toggleDropdown = () => {
  dropdownMenu.classList.toggle("show");
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

navIcon.addEventListener("click", handleNavIconChange);
BarsButtonMobileNav.addEventListener("click", handleDropDownMenu);

dropdownBtn.addEventListener("click", toggleDropdown);
document.addEventListener('click',handleAboutUsInfo);
