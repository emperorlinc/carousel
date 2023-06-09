document.addEventListener("DOMContentLoaded", () => {

	let images = Array.from(document.getElementsByClassName('image-icon'));

	let mainPhoto = document.getElementById('main-display');

	const display = (event) => {

		image = event.target

		mainPhoto.src = image.src

	};

	images.forEach((image) => {

		image.onclick = display

	});

});