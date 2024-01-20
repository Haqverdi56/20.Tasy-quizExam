const gridMenus = document.querySelector('.grid-menus');
const catBtns = document.querySelectorAll('.category-btn');

const BASE_URL = 'http://localhost:8080';

let data = [];
let menuBtnName = null;

async function getAllData() {
	try {
		const res = await axios(`${BASE_URL}/menu`);
		console.log(res.data);
		data = res.data;

		let filtered = [...res.data].filter(
			(item) => item.category.toLocaleLowerCase() === 'main'
		);
		drawMenus(filtered);
	} catch (err) {
		console.log(err);
	}
}

getAllData();

function drawMenus(menuData) {
	gridMenus.innerHTML = '';

	menuData.forEach((el) => {
		gridMenus.innerHTML += `
        <div class="grid-menu">
            <div class="grid-menu-left">
                <div class="menu-item-img">
                    <img src="${el.images}" alt="" />
                </div>
                <div class="grid-menu-texts">
                    <p>${el.name}</p>
                    <p>${el.description}</p>
                </div>
            </div>
            <div class="grid-menu-right">
                <span>${el.price}</span>
            </div>
        </div>
        `;
	});
}

catBtns.forEach((item) => {
	item.addEventListener('click', function () {
		menuBtnName = this.innerText;

	    let filtered = data.filter((item) => 
        item.category.toLocaleLowerCase() === menuBtnName.toLocaleLowerCase());

        drawMenus(filtered)
	});
});
















const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: {
		delay: 3000,
	},
	speed: 300,
	pagination: {
		el: '.swiper-pagination',
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		// 320: {
		//   slidesPerView: 1,
		//   spaceBetween: 20
		// },
		// // when window width is >= 767px
		// 767: {
		//   slidesPerView: 2,
		//   spaceBetween: 30
		// },
		// when window width is >= 1024px
		1024: {
			slidesPerView: 1,
		},
	},
});
