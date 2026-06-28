/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "71de814c397986c91d3f159bafe37380"
  },
  {
    "url": "archives/index.html",
    "revision": "efe4efbbf1a8406a6a79dd4aad62dad5"
  },
  {
    "url": "assets/20ee9defb89782060a728ff4aa964023.webp",
    "revision": "20ee9defb89782060a728ff4aa964023"
  },
  {
    "url": "assets/320e235738fb52931916f7e586f6d05f.png",
    "revision": "320e235738fb52931916f7e586f6d05f"
  },
  {
    "url": "assets/339dd2555336c2a1e166d79ff472b0d0.webp",
    "revision": "f052d6083957f3913f439a8262c55fd8"
  },
  {
    "url": "assets/51ebff176e4d8ba4c30926ad85b89a70.png",
    "revision": "51ebff176e4d8ba4c30926ad85b89a70"
  },
  {
    "url": "assets/7dd97f3619ab2434cf8762edd515e3cf.webp",
    "revision": "7dd97f3619ab2434cf8762edd515e3cf"
  },
  {
    "url": "assets/a23147bf2a9e5f48091a2b1de64d2a2f.webp",
    "revision": "a23147bf2a9e5f48091a2b1de64d2a2f"
  },
  {
    "url": "assets/a95dea0d07aeee1aac8a4fe39143b92f.webp",
    "revision": "689b12f3f027b735de725eb135d31f0c"
  },
  {
    "url": "assets/b3bd2f597b24e4aba9250c00a34c5358.webp",
    "revision": "b3bd2f597b24e4aba9250c00a34c5358"
  },
  {
    "url": "assets/c5fb2826af097600829abfbd8c666763.png",
    "revision": "c5fb2826af097600829abfbd8c666763"
  },
  {
    "url": "assets/css/0.styles.138e9701.css",
    "revision": "2c4a4b297c8e928c31d1cc9993093660"
  },
  {
    "url": "assets/dcaa05453baf014e62e458a0ff4f6f75.webp",
    "revision": "dcaa05453baf014e62e458a0ff4f6f75"
  },
  {
    "url": "assets/fb0e6ba089cf1c1ca144c97f3329f30c.png",
    "revision": "fb0e6ba089cf1c1ca144c97f3329f30c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.654e442a.js",
    "revision": "207e3b30224123fe06f75fae120e2f36"
  },
  {
    "url": "assets/js/11.b6c67721.js",
    "revision": "d4f06fe9570c3ce84b9395393ef397a0"
  },
  {
    "url": "assets/js/12.4f03fb2f.js",
    "revision": "30b7400c6dde27334005f78ba15ef8a2"
  },
  {
    "url": "assets/js/13.76a5d9e6.js",
    "revision": "f735f6c3dd16ee3cd9f4043d49032b42"
  },
  {
    "url": "assets/js/14.c63b041c.js",
    "revision": "e2dbba6e83dda6cf975d91ec01050e88"
  },
  {
    "url": "assets/js/15.321cba50.js",
    "revision": "b62e3c254b59431acc9fefab30d3c37f"
  },
  {
    "url": "assets/js/16.8229cef8.js",
    "revision": "2986ffb3ac9ef662e11a2f8c3a7709ee"
  },
  {
    "url": "assets/js/17.118cf8b8.js",
    "revision": "58ed3d1aba26ee2d9a613d59146213a4"
  },
  {
    "url": "assets/js/18.55814c0e.js",
    "revision": "b57db8f8f2a97d75760e59c2655c1af1"
  },
  {
    "url": "assets/js/2.ec915151.js",
    "revision": "4c16e68b8a4d8f4874c718dfb9055e21"
  },
  {
    "url": "assets/js/3.7deab20a.js",
    "revision": "430ed8c1b4f8bae36d8fb2a52ff37695"
  },
  {
    "url": "assets/js/4.1aa5664e.js",
    "revision": "e5711a12aaa500f8b989bf20593fc48d"
  },
  {
    "url": "assets/js/5.f09ee7b3.js",
    "revision": "7c7b87deb0e742de100c06856daf9077"
  },
  {
    "url": "assets/js/6.9cca7837.js",
    "revision": "94f087414b29bcdcbb6bb4a4c59ac9f7"
  },
  {
    "url": "assets/js/7.2592f940.js",
    "revision": "75356484178a202796a39b7ec914fd58"
  },
  {
    "url": "assets/js/8.e85bc851.js",
    "revision": "9f81a3de0c01d8b27e6d8a29ddc57198"
  },
  {
    "url": "assets/js/9.6526ca44.js",
    "revision": "43e9d8b0ce79d7af95d9b9e237c8bc1d"
  },
  {
    "url": "assets/js/app.6843f7e3.js",
    "revision": "6894703ad8cac714929beeb584a1ca61"
  },
  {
    "url": "assets/tai-chi.webp",
    "revision": "c6d989629642a62a69ec46fc580a1f5b"
  },
  {
    "url": "categories/index.html",
    "revision": "9b4f338daa37369d5d7580d94214db9d"
  },
  {
    "url": "index.html",
    "revision": "09284ec3058abdf801a62cd135c3e30e"
  },
  {
    "url": "learning/index.html",
    "revision": "edbe2b75508e3290ea162786890fc544"
  },
  {
    "url": "manifest.json",
    "revision": "0e842a47dba3d220d5d885b3fe4ac5c1"
  },
  {
    "url": "markmap/tech-catalog.html",
    "revision": "f90f286c1f2a2abcf468e41230ed3513"
  },
  {
    "url": "pages/7a5ff0/index.html",
    "revision": "e319b17998eef9df1541454b6953ffcf"
  },
  {
    "url": "practice/index.html",
    "revision": "3ac4cb302cdad8ea54a4301a96cc4816"
  },
  {
    "url": "tags/index.html",
    "revision": "37efbef6ecb12fa0dc4d6211857c4c70"
  },
  {
    "url": "tech/index.html",
    "revision": "2010487648fc861ceb3dc082ef1ee480"
  },
  {
    "url": "thoughts/index.html",
    "revision": "50603a6fe259cb4cbdc097908ece4a78"
  },
  {
    "url": "travel/index.html",
    "revision": "95de9b567332fa2b7b76483a0305bb72"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
