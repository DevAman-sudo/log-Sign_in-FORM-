// web socket / socket.io //
const socket = io();

// DOM elements //
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const button = document.getElementById('button');

// listening submit event on button //
button.addEventListener('submit' , (event) => {
    // prevent page to submit //
    event.preventDefault();
});