(function () {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js');
    }

})();


const output = document.getElementById('history');

function appendOutput(msg) {
    var log = output.textContent;
    output.textContent = log + msg + "\n"
};


window.addEventListener("message", function (event) {
    console.log("[PostMessage] Got initial message.");
    appendOutput("Got initial message.");
    const clientButton = document.getElementById('butMessageClient');

    var port = event.ports[0];
    if (typeof port === 'undefined') return;

    console.log("[PostMessage] Got message port.");
    appendOutput("Got message port.");

    port.postMessage("Connected");


    clientButton.addEventListener('click', function () {
        port.postMessage(img.alt);
        appendOutput("test")
    });

    port.onmessage = function (event) {
        console.log("[PostMessage] Got Message: " + event.data);
        appendOutput(event.data);
        port.postMessage("ACK " + event.data);
    };
});

