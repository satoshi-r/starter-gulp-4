document.addEventListener("DOMContentLoaded", function () {

	// Остановить анимацию во время изменения размера окна
	let resizeTimer;
	window.addEventListener("resize", () => {
		document.body.classList.add("resize-animation-stopper");
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			document.body.classList.remove("resize-animation-stopper");
		}, 400);
	});
});