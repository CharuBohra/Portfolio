/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav-link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

/*==================== ACCORDION SKILLS ====================*/
// const skillsContent = document.getElementsByClassName('skills_content'),
//       skillsHeader = document.querySelectorAll('.skills__header');

// function toggleSkills(){
//     let itemClass = this.parentNode.className;

//     for(i=0;i<skillsContent.length;i++){
//         skillsContent[i].className = 'skills__content skills__close';
//          // Reset arrow rotation for all
//          const arrow = skillsContent[i].querySelector('.skills__arrow');
//          if (arrow) arrow.style.transform = 'rotate(0deg)';
//     }
//     if(itemClass === 'skills__content skills__close'){
//         this.parentNode.className = 'skills_content skills_open';
//         const arrow = this.querySelector('.skills__arrow');
//         if (arrow) arrow.style.transform = 'rotate(-180deg)';
//     }
// }

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.classList;

    // If the clicked section is already open, close it
    if (itemClass.contains('skills__open')) {
        itemClass.remove('skills__open');
        itemClass.add('skills__close');
        // Reset the arrow rotation for the current section
        const arrow = this.querySelector('.skills__arrow');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    } 
    // Otherwise, close all sections and open the clicked one
    else {
        // skillsContent.forEach((content) => {
        //     content.classList.remove('skills__open');
        //     content.classList.add('skills__close');
        //     // Reset all arrows
        //     const arrow = content.querySelector('.skills__arrow');
        //     if (arrow) arrow.style.transform = 'rotate(0deg)';
        // });

        // Open the clicked section
        itemClass.remove('skills__close');
        itemClass.add('skills__open');
        // Rotate the arrow for the current section
        const arrow = this.querySelector('.skills__arrow');
        if (arrow) arrow.style.transform = 'rotate(-180deg)';
    }
}
skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(content=>{
            content.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }
            else
            {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })

}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add scroll-header class to header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the cureent theme that the interface has been by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(darkTheme) ? 'uil-moon' : 'uil-sun'

//We validate if the previously chose a topic
if (selectedTheme){
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//activate /deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remove the dark / light class
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the cureent icon that the user chooses
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})