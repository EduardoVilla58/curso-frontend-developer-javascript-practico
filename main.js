const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu()
{
    if(!aside.classList.contains('inactive'))
    {
        aside.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu()
{
    if(!aside.classList.contains('inactive'))
    {
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside()
{
    if(!desktopMenu.classList.contains('inactive'))
    {
        desktopMenu.classList.toggle('inactive');
    }
    if(!mobileMenu.classList.contains('inactive'))
    {
        mobileMenu.classList.toggle('inactive');
    }
    aside.classList.toggle('inactive');
}