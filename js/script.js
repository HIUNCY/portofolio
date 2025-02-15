const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;

    if (scrollPosition >= 100) {
        nav.classList.add('nav-dark');
    } else if (scrollPosition <= 100) {
        nav.classList.remove('nav-dark');
    }
});
