// Get table items from the DOM
table_cells = document.querySelectorAll("td")

// Define function that sets the market depending on what's already in the table cell
function setMarker() {
    if (this.textContent == "") {
        this.textContent = "X"
    } else if (this.textContent == "X") {
        this.textContent = "O"
    } else {
        this.textContent = ""}
}

// Loop to apply the event listener and function to each cell
for (cell of table_cells) {
    cell.addEventListener("click", setMarker);
    console.log(cell);
}
