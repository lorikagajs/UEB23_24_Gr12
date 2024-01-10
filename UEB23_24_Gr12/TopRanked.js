 function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

document.addEventListener("DOMContentLoaded", function () {
    const dropContainer = document.getElementById("drag-container");

    dropContainer.addEventListener("dragover", dragOver);
    dropContainer.addEventListener("dragenter", dragEnter);
    dropContainer.addEventListener("dragleave", dragLeave);
    dropContainer.addEventListener("drop", drop);

    function dragOver(event) {
        event.preventDefault();
    }

    function dragEnter(event) {
        event.preventDefault();
        dropContainer.classList.add("hovered");
    }

    function dragLeave() {
        dropContainer.classList.remove("hovered");
    }

    function drop(event) {
        event.preventDefault();
        dropContainer.classList.remove("hovered");

        const draggedItemId = event.dataTransfer.getData("text/plain");
        const draggedItem = document.getElementById(draggedItemId);
        const dropTarget = event.target;


        if (dropTarget.classList.contains("box")) {
            const temp = dropTarget.innerHTML;
            dropTarget.innerHTML = draggedItem.innerHTML;
            draggedItem.innerHTML = temp;
        }
    }
});


//rating average - perdorimi i function reduce
document.addEventListener('DOMContentLoaded', function () {
    const numbers = [10, 9, 10, 10, 10];

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;

    // Get the resultContainer element
    const resultContainer = document.getElementById('resultContainer');

    // Update the content of the resultContainer with the calculated average
    resultContainer.textContent = `${average.toFixed(1)}/10`; // toFixed(2) limits decimal places to two
});
