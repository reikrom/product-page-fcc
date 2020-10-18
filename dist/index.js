// var menu = document.getElementById("nav__dropdown");

function dropdown() {
	let menu = document.getElementById("nav__dropdown");
	if (menu.style.display === "none") {
		menu.style.display = "block";
		toggleIcon();
	} else {
		menu.style.display = "none";
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
