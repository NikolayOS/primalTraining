const burger = document.querySelector('.navigation');
const mobileNav = document.querySelector('.mobile-menu');

mobileNav.addEventListener('click', () => {
	burger.classList.toggle('active');
	mobileNav.classList.toggle('active');
});
