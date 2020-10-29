// var menu = document.getElementById("nav__dropdown");

function toggleOverflow() {
	document.getElementById("decs_root").classList.toggle("pageOverflow");
}
function dropdown() {
	let menu = document.getElementById("nav__dropdown");
	toggleOverflow();
	if (menu.classList.contains("nav__dropdown--hidden")) {
		menu.classList.remove("nav__dropdown--hidden");
		toggleIcon();
	} else {
		menu.classList.add("nav__dropdown--hidden");
		toggleIcon();
	}
}
function toggleIcon() {
	let close = document.getElementById("menu__close");
	let bars = document.getElementById("menu__bars");
	if (bars.style.display === "block") {
		bars.style.display = "none";
		close.style.display = "block";
	} else {
		bars.style.display = "block";
		close.style.display = "none";
	}
}

let dots = document.querySelectorAll(".pagination__dot");
let plans = document.querySelectorAll(".plansSection__card");

const planPagination = document
	.getElementById("planPagination")
	.addEventListener("click", e => {
		e.preventDefault();
		dots.forEach(el => el.classList.remove("pagination__dot--active"));
		if (e.target.classList.contains("pagination__dot")) {
			e.target.classList.add("pagination__dot--active");
			scrollToCard(plans, e.target.id.slice(-1));
		}
	});

function scrollToCard(cards, n) {
	cards[n - 1].scrollIntoView({
		behavior: "smooth",
		block: "nearest",
		inline: "start",
	});
}

const navBar = document.querySelector("#nav-bar");
window.onscroll = function () {
	stickyHeader();
};

const stickyHeader = () => {
	if (window.scrollY > 90) {
		navBar.classList.add("navBar--sticky");
	} else navBar.classList.remove("navBar--sticky");
};

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

const dropdownMenu = document.querySelector(".nav__dropdown__menu");
dropdownMenu.addEventListener("click", e => {
	if (e.target.hash === "#home") {
		topFunction();
		dropdown();
	} else if ((e.target.nodeName = "A")) {
		dropdown();
	}
});
