const resource = [
    /* --- CSS --- */
    '/yann-zhg.github.io/assets/css/style.css',

    /* --- PWA --- */
    '/yann-zhg.github.io/app.js',
    '/yann-zhg.github.io/sw.js',

    /* --- HTML --- */
    '/yann-zhg.github.io/index.html',
    '/yann-zhg.github.io/404.html',

    
        '/yann-zhg.github.io/categories/',
    
        '/yann-zhg.github.io/tags/',
    
        '/yann-zhg.github.io/archives/',
    
        '/yann-zhg.github.io/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/yann-zhg.github.io/assets/img/favicons/android-chrome-192x192.png',
        '/yann-zhg.github.io/assets/img/favicons/android-chrome-512x512.png',
        '/yann-zhg.github.io/assets/img/favicons/apple-touch-icon.png',
        '/yann-zhg.github.io/assets/img/favicons/favicon-16x16.png',
        '/yann-zhg.github.io/assets/img/favicons/favicon-32x32.png',
        '/yann-zhg.github.io/assets/img/favicons/favicon.ico',
        '/yann-zhg.github.io/assets/img/favicons/mstile-150x150.png',
        '/yann-zhg.github.io/assets/js/dist/categories.min.js',
        '/yann-zhg.github.io/assets/js/dist/commons.min.js',
        '/yann-zhg.github.io/assets/js/dist/home.min.js',
        '/yann-zhg.github.io/assets/js/dist/misc.min.js',
        '/yann-zhg.github.io/assets/js/dist/page.min.js',
        '/yann-zhg.github.io/assets/js/dist/post.min.js',
        '/yann-zhg.github.io/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

