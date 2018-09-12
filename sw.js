
// Ciclo de vida del SW

// Instalación del service worker
self.addEventListener('install', event => {

    // Usualmente se almacena en cache 
    // los recursos de nuestra aplicación
    // console.log('SW: Instalando....');
    // console.log(event);
    
    const instalacion = new Promise( (resolve, reject) => {

        console.log('SW: Empezando instalación');

        setTimeout( ()=> {
            console.log('SW: Proceso de instalación terminado!!!');
            
            // Podemos saltar la espera con este comando
            self.skipWaiting();
            resolve();
        }, 10 ); //1500
        
    });

    
    
    
    event.waitUntil( instalacion );

});

// Cuando el service worker toma el control de la aplicación
self.addEventListener('activate', event => {

    console.log('SW: Activo y listo para controlar la aplicación');

});


// FETCH: manejo de peticiones http
self.addEventListener('fetch', event => {

    // console.log('Realizando petición a:', event.request.url);

});


// SYNC: Recuperación de conexión a internet
self.addEventListener( 'sync', event => {
    console.log('Tenemos conexión!!!');
    console.log(event.tag);
});


// Notificaciones PUSH
self.addEventListener('push', event => {

    console.log('Notificación recibida!!!');


});