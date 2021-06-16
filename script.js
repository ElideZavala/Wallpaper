const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlides = 4;

rightBtn.addEventListener('click', () => {
	activeSlides++;

	// Si llegamos al final de una dispositiva volver al principio
	if (activeSlides > slides.length - 1) {
		activeSlides = 0;
	}

	setBgToBody();
	setActiveSlide();
})

leftBtn.addEventListener('click', () => {
	activeSlides--;

	// Si llegamos al final de una dispositiva volver al Final
	if (activeSlides < 0) {
		activeSlides = slides.length - 1;
	}

	setBgToBody();
	setActiveSlide();
})

setBgToBody();

function setBgToBody() {
	// Que empieze en la primera Imagen.
	body.style.backgroundImage = slides[activeSlides].style.backgroundImage;
}

// Eliminar la clase activa y colocarla nuevamente
function setActiveSlide() {
	slides.forEach(slide => {
		slide.classList.remove('active');

		slides[activeSlides].classList.add('active');
	})
}