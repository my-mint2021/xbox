let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

// let body = document.querySelector('body');
// if (isMobile.any()){
// 	body.classList.add('Touch');
// }
// else{
// 	body.classList.add('Mouse');
// };

new Swiper('.image-slider', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// dynamicBullets: true,
	},
	//бесконечный слайдер
	loop: true,
	//автопрокрутка
	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		disableOnInteraction: true
	},
	// скорость
	speed: 1000,
	effect: 'fade',
	// effect: 'flip',
	// flipEffect: {
	// 	slideShadows: true,
	// 	limitRotation: true
	// },
});

new Swiper('.games-slider', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// dynamicBullets: true,
	},
	//бесконечный слайдер
	loop: true,
	autoHeight: true,
	slidesPerView: 4.1,
	slideToClickedSlide: true,
	spaceBetween: 20,
	centeredSlides: true,
	initialSlide: 1,
	//автопрокрутка
	// autoplay: {
	// 	delay: 2000,
	// 	stopOnLastSlide: true,
	// 	disableOnInteraction: true
	// },
	// скорость
	// speed: 1000,

	// effect: 'fade',

	// effect: 'flip',
	// flipEffect: {
	// 	slideShadows: true,
	// 	limitRotation: true
	// },
});