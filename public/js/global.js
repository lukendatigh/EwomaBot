// Make sure service workers are supported
if('serviceWorker' in navigator) {
    console.log('Service Worker Supported')
    window.addEventListener('load', () => {
        console.log('loaded')
        // Register the service worker
        navigator.serviceWorker
         .register('../../sw_cached_site.js')
         .then(reg => console.log(`Service Worker: Registered`))
         .catch(err => console.error(`Service Worker: Error: ${err}`))
    })
}