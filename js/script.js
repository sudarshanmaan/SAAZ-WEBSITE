window.onload = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navCollapse = document.querySelector('#navbarSupportedContent');
    navLinks.forEach(c => {
        c.onclick = () => {
            if(navCollapse.classList.contains('show')) {
                navCollapse.classList.remove('show');
            }
        }
    }) 
}