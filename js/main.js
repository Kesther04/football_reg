// for Scrollable Nav
// Select the navbar
let navbar = document.querySelector('header');

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
    // Check the scroll position
    if (window.scrollY > 650) { // Adjust the threshold as needed
        navbar.classList.add('scrolled'); // Add the 'scrolled' class
    } else {
        navbar.classList.remove('scrolled'); // Remove the 'scrolled' class
    }
});


//for Scrollable Nav links
let anchor = document.querySelector('a');
anchor.addEventListener('click',(element)=>{
    let href = element.target.getAttribute('href');
    if (href.charAt(0) ===  "#") {
        let ehref = document.querySelector(href);
        ehref.scrollIntoView({behavior: 'smooth',block: 'start'});    
    }
    
});

// Nav Controller
let nav = document.querySelector('header nav');
let navBtn = document.querySelector('.nav-toggler');
let navBtnSpan = document.querySelector('.nav-toggler-span');
let showMenu = false;
navBtn.addEventListener('click',()=>{
    if (!showMenu) {
        navBtnSpan.classList.add('active');
        nav.classList.add('active');

        showMenu = true;
    }else{
        navBtnSpan.classList.remove('active');
        nav.classList.remove('active');

        showMenu = false;
    }
});