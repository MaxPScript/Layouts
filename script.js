log = console.log;
log("grid");

window.addEventListener("load", () => {
	const data = [
		{
			w: 324,
			h: 394,
			wmm: 40,
			hmm: 34,
		},
		{
			w: 368,
			h: 448,
		},
	];

	const watchesLayout = document.querySelectorAll(".w1");
	watchesLayout.forEach((el, index) => {
		el.style.width = `${data[index].w}px`;
		el.style.height = `${data[index].h}px`;
		log(el);
	});
});
