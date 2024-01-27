log = console.log;
const table = document.querySelector("table");
const rows = table.querySelectorAll("tr");
const headerRow = [...rows[0].children].slice(1);
const columns = Array.from({ length: headerRow.length }, () => []);

rows.forEach((row, rowIndex) => {
	[...row.children].slice(1).forEach((cell, columnIndex) => {
		columns[columnIndex].push(cell);
	});
});

columns.forEach((column, index) => {
	hide(column, index !== 0);
});

select1_id.addEventListener("change", () => {
	columns.forEach((column) => {
		const isCurrentColumn = column[0].dataset.header === select1_id.value;
		hide(column, !isCurrentColumn);
	});
});

function hide(column, shouldHide) {
	column.forEach((cell) => {
		cell.classList.toggle("hidden", shouldHide);
	});
}
