const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarTogglerDemo02')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})