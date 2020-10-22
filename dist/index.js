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
