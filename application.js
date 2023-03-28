(function() {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./service-worker.js');
    }
    let audio = document.querySelector('audio');

    // User interacted with the page. Let's play audio...
    audio.play()
    .then(_ => {  if ('mediaSession' in navigator) {

      navigator.mediaSession.metadata = new MediaMetadata({
      title: 'Never Gonna Give You Up',
      artist: 'Rick Astley',
      album: 'Whenever You Need Somebody',
      artwork: [
          { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
          { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
          { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
          { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
          { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
          { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
      ]
      });
  
      navigator.mediaSession.setActionHandler('play', function() {});
      navigator.mediaSession.setActionHandler('pause', function() {});
      navigator.mediaSession.setActionHandler('seekbackward', function() {});
      navigator.mediaSession.setActionHandler('seekforward', function() {});
      navigator.mediaSession.setActionHandler('previoustrack', function() {});
      navigator.mediaSession.setActionHandler('nexttrack', function() {});
  }
 })
    .catch(error => { console.log(error) });

  })();
  function postMessage(){
    document.getElementById("postMessage").contentWindow.postMessage("Hey", "*");
  }

  function testFunction() {
    document.getElementById("surprisePic").src = "images/icons/gon.png";
  
  }
  function beforeunload() {
    return "string";
  };

  const beforeUnloadListener = (event) => {
    return "string";
  };
  
  const nameInput = document.querySelector("#name");
  nameInput.addEventListener("input", (event) => {
    if (event.target.value !== "") {
      addEventListener("beforeunload", beforeUnloadListener, {capture: true});
    } else {
      removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
    }
  });