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
  