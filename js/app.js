

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('../sw.js')
        .then( reg => { // registration
            // console.log( registration );

            // Suponer posteo offline
            setTimeout( () => {
                reg.sync.register('posteo-gatitos');
                console.log('Se enviaron fotos de gatitos al server!');
            }, 3000 );

            // Notification.requestPermission().then( result => {
            //     console.log(result);
            //     reg.showNotification('Genial!');
            // });

        });
}

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('/service-worker.js');
//     });
//   }

