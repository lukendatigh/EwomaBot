
// const api = 'https://localhost:5000';

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

const format = '-1234567890abcdefghijklmnopqrstuvwxyz';
const randomStr = (len, format) => { 
    let ans = ''; 
    for (var i = len; i > 0; i--) { 
        ans +=  
          format[Math.floor(Math.random() * format.length)]; 
    } 
    return ans; 
} 

let countryAndFlag = {};
// Replace ./data.json with your JSON feed
fetch('js/plugin/countryandflag.json')
.then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  console.log(data);
  countryAndFlag = {...data};
  console.log('hurray', countryAndFlag);
}).catch(err => {
  console.log(err)
});

