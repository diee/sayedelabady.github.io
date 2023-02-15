(function() {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./service-worker.js');
    }
  

  })();

  function testFunction() {
    document.getElementById("surprisePic").src = "images/icons/gon.png";
  
  }
  
  const beforeUnloadListener = (event) => {
    return event.returnValue = '';
  };
  
  const nameInput = document.querySelector("#name");
  
  nameInput.addEventListener("input", (event) => {
    if (event.target.value !== "") {
      addEventListener("beforeunload", beforeUnloadListener, {capture: true});
    } else {
      removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
    }
  });