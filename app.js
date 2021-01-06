const navSlide = () => {
    const burgers = document.querySelector('.burgers');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    //toogle nav
    burgers.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //burger animation
        burgers.classList.toggle('toggle');



    });
}

navSlide();