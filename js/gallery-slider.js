document.addEventListener('DOMContentLoaded', function() {
    var gallerySlider = new Swiper('.gallery-slider__container', {
        direction: 'horizontal',
        loop: true,
        slidesPerColumnFill: 'row',
        updateOnWindowResize: true,
        
        pagination: {
			el: '.gallery-slider__pagination',
			type: 'fraction',
        },
      
        navigation: {
			nextEl: '.gallery-slider__nav-btn-next',
			prevEl: '.gallery-slider__nav-btn-prev',
        },
        
        breakpoints: {
			768: {
			loop: false,
			slidesPerView: 2,
			slidesPerGroup: 2,
			slidesPerColumn: 2,
			spaceBetween: 34,
			},
			1440: {
			loop: false,
			slidesPerView: 3,
			slidesPerGroup: 3,
			slidesPerColumn: 2,
			spaceBetween: 50,
			speed: 600,
			},
        }
    });

	let btn = document.querySelectorAll('.gallery-modal-btn');
	let modal = document.querySelector('.gallery-modals');
	let close = document.querySelector('.gallery-modals__close-btn');
	
	let disableScroll = function() {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		document.body.classList.add('disable-scroll');
		document.body.style.paddingRight = paddingOffset;
	}

	let enableScroll = function() {
		document.body.classList.remove('disable-scroll');
		document.body.removeAttribute('style');
	}

	btn.forEach((elem) => {
		elem.addEventListener('click', (e) => {
			let path = e.currentTarget.getAttribute('data-path');
			let target = document.querySelector(`[data-target=${path}]`);

			modal.classList.add('modal--visible');
			target.classList.add('gallery-modals__item--visible');
			disableScroll();
		});
		close.addEventListener('click', () => {
			let targetBlock = document.querySelectorAll('.modal__item');

			targetBlock.forEach((elem) => {
				if (elem.classList.contains('gallery-modals__item--visible')) {
					elem.classList.remove('gallery-modals__item--visible');
				}
			});
			modal.classList.remove('modal--visible');
			enableScroll();
		});
		modal.addEventListener('click', (event) => {
			let target = event.target;

			if (target.children[0] === document.querySelector('.gallery-modals__close-btn')
				|| target.children[0] === document.querySelector('.gallery-modals__container')) {
				let targetBlock = document.querySelectorAll('.modal__item');

				targetBlock.forEach((elem) => {
					if (elem.classList.contains('gallery-modals__item--visible')) {
						elem.classList.remove('gallery-modals__item--visible');
					}
				});
				modal.classList.remove('modal--visible');
				enableScroll();
			}
		});
	});
});
