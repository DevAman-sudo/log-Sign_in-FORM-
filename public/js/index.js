// DOM elements //
const form = document.getElementById('form');
const name = document.getElementById('name');
const button = document.getElementById('button');

// function to append data //
function appendData(data) {
    let element = document.createElement('small');
    element.innerText = data;
    dataContainer.appendChild(element);
}

// listening submit event on form submit //
form.addEventListener('submit' , (event) => {
    // prevent page to submit //
    // event.preventDefault();
    appendData('a');
});