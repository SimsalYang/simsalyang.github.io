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
    "revision": "2c80417f611f84002d90af55840683bd"
  },
  {
    "url": "about/index.html",
    "revision": "a738f0da5d5981802b3df3fb136dcef6"
  },
  {
    "url": "archives/index.html",
    "revision": "87856043bf2406a7a4c5c353aa40b53c"
  },
  {
    "url": "assets/css/0.styles.ab639728.css",
    "revision": "84a2ae72b55362a0d3024b2012fe9cef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dea7e1ff.js",
    "revision": "7ea328db88e56373704a8685a54a1a52"
  },
  {
    "url": "assets/js/11.190fc444.js",
    "revision": "f47111204ea9493ff02723d154494a31"
  },
  {
    "url": "assets/js/12.260c569b.js",
    "revision": "c45dd75436e65629fbfaf73dc2ecc528"
  },
  {
    "url": "assets/js/13.b630d4dd.js",
    "revision": "272c8bbff821b344d49e46834130b684"
  },
  {
    "url": "assets/js/14.9fadea0d.js",
    "revision": "0ea7ad2957355602e275faae13d96d12"
  },
  {
    "url": "assets/js/15.98851af5.js",
    "revision": "8e9e46bfd47b650a192cfcd27ce9b605"
  },
  {
    "url": "assets/js/16.5fbd39f6.js",
    "revision": "038a27fd424d32bf87b9e7cceeb71b08"
  },
  {
    "url": "assets/js/17.efe34128.js",
    "revision": "f974f2510184136fe7d75b67353a8444"
  },
  {
    "url": "assets/js/18.515a4029.js",
    "revision": "4cf9067ab2084816445184de20afdb43"
  },
  {
    "url": "assets/js/19.0a862ed5.js",
    "revision": "3f7abfe9aa8078249756649fc8b850ce"
  },
  {
    "url": "assets/js/2.a01997bf.js",
    "revision": "ea157d647844e3fe4758f39889b20ec2"
  },
  {
    "url": "assets/js/20.0d7a4a3c.js",
    "revision": "4242b782ca1ab6e30a60c39a0a784b8d"
  },
  {
    "url": "assets/js/21.885adc78.js",
    "revision": "c0c69b2f2ff179dcfbeedc6936192960"
  },
  {
    "url": "assets/js/22.644a45cf.js",
    "revision": "ba4af49b3708898cdaf1eedd9b846d0a"
  },
  {
    "url": "assets/js/23.ea3b9024.js",
    "revision": "684b46720c6f2813157ef939b6c1dbc2"
  },
  {
    "url": "assets/js/24.1cd2015c.js",
    "revision": "35406f58cd17fe4f8f5002ec41687fdd"
  },
  {
    "url": "assets/js/25.781042e9.js",
    "revision": "cb0f887f520520f3527595d1c89f577d"
  },
  {
    "url": "assets/js/26.2169ca02.js",
    "revision": "145ef56c852dfc948624eba596e70af7"
  },
  {
    "url": "assets/js/3.d89a5780.js",
    "revision": "7e5818096ef5ba992c1d845eeaa7f665"
  },
  {
    "url": "assets/js/4.e2a2ed55.js",
    "revision": "434a7d00c2823020e893946a7442e997"
  },
  {
    "url": "assets/js/5.09c01ed2.js",
    "revision": "6200ac5c6c5e5a26c1bec8997f5432d7"
  },
  {
    "url": "assets/js/6.506b86dc.js",
    "revision": "d18229ab7de6c9a07e64dae8216d9945"
  },
  {
    "url": "assets/js/7.629f5875.js",
    "revision": "2b6033dd608544e6cd0ab753ce61ed9b"
  },
  {
    "url": "assets/js/8.fce427fc.js",
    "revision": "7ac63ebcadab5bba77f38261102e9c59"
  },
  {
    "url": "assets/js/9.b0785be7.js",
    "revision": "bfc9560e698c8245db4307314fea652d"
  },
  {
    "url": "assets/js/app.a2ecb283.js",
    "revision": "6497a802ff8f418e731ba361a3ffccc5"
  },
  {
    "url": "categories/index.html",
    "revision": "aaf8c1dc2a4b46ff636f89e9a51e2847"
  },
  {
    "url": "index.html",
    "revision": "debb5cccae8014385905a5e533337a39"
  },
  {
    "url": "logo.png",
    "revision": "7312dc7986dccefbdf339955a9bbab83"
  },
  {
    "url": "pages/01a1bd/index.html",
    "revision": "02852fb046dc7c00b270fedcdad2eab2"
  },
  {
    "url": "pages/0a063e/index.html",
    "revision": "5a71e0efbfc69b462d31da2916d35afe"
  },
  {
    "url": "pages/97d69a/index.html",
    "revision": "5e405fe7a485a723caebf81e9a2c7569"
  },
  {
    "url": "pages/9d5c6f/index.html",
    "revision": "7198816a3e2fbef8c57e795f0f7a602e"
  },
  {
    "url": "pages/a98ccd/index.html",
    "revision": "d37362c39642f5188e4cf9bec468afe8"
  },
  {
    "url": "pages/ae296e/index.html",
    "revision": "0fb48b34022525e1b9904410eefdd0f5"
  },
  {
    "url": "pages/be86d9/index.html",
    "revision": "6c490aed1d0155a8d37dd6586a3460e0"
  },
  {
    "url": "pages/c981b7/index.html",
    "revision": "5372b0562923889778972fc9082877e8"
  },
  {
    "url": "pages/dbd857/index.html",
    "revision": "f6b84c0d258d77aa73792891c6b6df1e"
  },
  {
    "url": "pages/dcceda/index.html",
    "revision": "47c8d07a3fa35a53edda5164d4840981"
  },
  {
    "url": "pages/e06f47/index.html",
    "revision": "7fd5af2fdba29b2a8ecd44dc8c938625"
  },
  {
    "url": "pages/e83104/index.html",
    "revision": "d24c3c6689644e10ecf01ec3c96f48e5"
  },
  {
    "url": "pages/effdb9/index.html",
    "revision": "584215d45beb03107f1c4cb004e1a90c"
  },
  {
    "url": "pages/f16cda/index.html",
    "revision": "6592fa5f0202f4c55a12c1a04aed0ef0"
  },
  {
    "url": "pages/f8f946/index.html",
    "revision": "d81e177687d801ace5157ff375d0f640"
  },
  {
    "url": "pages/fb3336/index.html",
    "revision": "bb78a133a85a8d56bf788c0e15f1b1e6"
  },
  {
    "url": "tags/index.html",
    "revision": "ac3a4a2a23079ce4c7d64942af8979a9"
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
