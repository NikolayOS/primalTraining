const burger = document.querySelector('.navigation');
const mobileNav = document.querySelector('.mobile-menu');
let check = false;

mobileNav.addEventListener('click', () => {
	burger.classList.toggle('active');
	mobileNav.classList.toggle('active');
	if (check) {
		document.body.style.overflow = 'auto';
		check = false;
	} else {
		document.body.style.overflow = 'hidden';
		check = true;
	}
});
