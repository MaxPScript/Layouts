log = console.log;

window.addEventListener("load", (e) => {
	var gridItems = document.querySelectorAll(".wrapper > div");
	var info = document.querySelectorAll(".info");
	log(info);
	gridItems.forEach((item, index) => {
		// log(item);
		var rect = item.getBoundingClientRect();
		// log(rect);
		info[index].innerText += `
            width: ${rect.width}
            height: ${rect.height}
        `;
	});
});
window.addEventListener("resize", (e) => {
	var gridItems = document.querySelectorAll(".wrapper > div");
	gridItems.forEach((item, index) => {
		// log(item);
		var rect = item.getBoundingClientRect();
		// log(rect);
		item.innerText = `
            width: ${rect.width}
            height: ${rect.height}
        `;
	});
});
// log(gridItems);
