// web socket / socket.io //
const socket = io();

// DOM elements //
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const button = document.getElementById('button');
const dataContainer = document.getElementById('data-container');

// append function to add data in data_container //
function appendData(data) {
    const element = document.createElement('small');
    element.innerText = data;
    dataContainer.appendChild(element);
}

// listening submit event on button //
form.addEventListener('submit', (event) => {
    // prevent page to submit //
    event.preventDefault();

    if (textArea.value !== null) {
        // sending text-area value to server //
        socket.emit('client_value', textArea.value);
    }
    
    // clearing input field after page submit //
    textArea.value = null ;
});

// receiving database message from server //
socket.on('server_value' , data => {
    appendData(data);
});