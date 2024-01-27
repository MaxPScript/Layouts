log = console.log;
log = console.log;

// const t = document.querySelector("table");
// const rows = t.querySelectorAll("tr");
// const row1 = rows[0];
// const row2 = rows[1];
// const cells1 = row1.children;
// const cells2 = row2.children;
// const a1 = Array.from(cells1);
// const a2 = Array.from(cells2);
// log(a1);
// log(a2);

// const column1 = [];
// const column2 = [];
// const column3 = [];
// const column4 = [];

// for (let i = 0; i < a1.length; i++) {
// 	i === 0 ? column1.push(a1[i]) : null;
// 	i === 1 ? column2.push(a1[i]) : null;
// 	i === 2 ? column3.push(a1[i]) : null;
// 	i === 3 ? column4.push(a1[i]) : null;
// }
// for (let i = 0; i < a2.length; i++) {
// 	i === 0 ? column1.push(a2[i]) : null;
// 	i === 1 ? column2.push(a2[i]) : null;
// 	i === 2 ? column3.push(a2[i]) : null;
// 	i === 3 ? column4.push(a2[i]) : null;
// }
// log(column1);
// log(column2);
// log(column3);
// log(column4);
//****************************************** */
const table = document.querySelector("table");
// const rows = Array.from(table.querySelectorAll("tr"));
const rows = table.querySelectorAll("tr");
log(rows);
const headerRow = [...rows[0].children].slice(1);

// log(headerRow);
// [th = "Year", th = "Model", th = "Color"]
// const x = headerRow.map(() => []);
// log(x);

// const columns = Array.from(headerRow).map((el) => [el]);
// const columns = headerRow.map(() => []);

const columns = [];
for (let i = 1; i < rows[0].children.length; i++) {
	columns.push([]);
}
log(columns);

rows.forEach((row, index) => {
	for (let i = 1; i < row.children.length; i++) {
		columns[i - 1].push(row.children[i]);
	}
});
for (let i = 1; i < columns.length; i++) {
	hide(columns[i]);
}
// for (let i = 0; i < rows.length; i++) {
// 	for (let j = 1; j <= rows[i].children.length; j++) {
// 		log(columns[i]);
// 		columns[i].push(rows[i].children[j]);
// 	}
// }

// rows.forEach((row) => {
// Array.from(row.children).forEach((cell, index) => {
// 	if (columns[index]) {
// 		columns[index].push(cell);
// 	}
// });
// });
log(columns);
console.log("Column 1:", columns[0]);
console.log("Column 2:", columns[1]);
console.log("Column 3:", columns[2]);
// console.log("Column 4:", columns[3]);

// function f1() {
// 	columns[0].forEach((el) => {
// 		el.classList.toggle("hidden");
// 	});
// }
select1_id.addEventListener("change", () => {
	columns.forEach((column, index) => {
		if (column[0].dataset.header === select1_id.value) {
			column.forEach((cell, index) => {
				// cell[0].dataset.header === select1_id.value
				cell.classList.toggle("hidden");
				// : null;
			});
		} else {
			column.forEach((cell, index) => {
				// cell[0].dataset.header === select1_id.value
				cell.classList.add("hidden");
				// : null;
			});
		}
	});
	// select1_id.value ===
	// log(select1_id.value);
	// select1_id.value === "Year" ? hide(columns[2]) : null;
});
// log(select1_id.value);
function hide(el) {
	el.forEach((el) => {
		el.classList.toggle("hidden");
	});
}
