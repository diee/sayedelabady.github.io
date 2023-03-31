(function() {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./service-worker.js');
    }
    
})();
  function postMessage(){
    window.postMessage("Hey", "*")
  };

    var response = "";
  function appendOutput(msg) {
    response+=msg;
    alert(response);
  };
  function testFunction(){
    document.getElementById("surprisePic").src = "images/icons/gon.png";
  };
    
