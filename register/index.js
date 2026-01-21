const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
console.log(inputs);
console.log(form);

form.addEventListener('submit', (e) => {
	e.preventDefault(); // отменяем стандартную отправку
	console.log('Форма отправлена!');

	let isFormValid = true;

	inputs.forEach((input) => {
		if (!input.validity.valid) {
			isFormValid = false;
			// подсвечиваем поле красным, если ошибка
			input.style.border = '2px solid red';
		} else {
			// зелёная рамка, если валидно
			input.style.border = '2px solid green';
		}
	});

	if (isFormValid) {
		console.log('Все поля валидны!');
	}
});
