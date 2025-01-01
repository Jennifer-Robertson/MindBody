/* Mobile menu
    - applies to all pages
*/
const mobileMenu = document.getElementById('mobile-menu')
const navMenu = document.querySelector('#nav-items')

// Mobil menu
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
})
