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
    "url": "assets/css/0.styles.5dfc9bd5.css",
    "revision": "a83ff6dad4d0c3da444596e465145517"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ee8d5a55.js",
    "revision": "51343918d444602016615f8f9bb6f7a7"
  },
  {
    "url": "assets/js/11.58017718.js",
    "revision": "f1de88bda190b2ea3e43e5c07c4f7624"
  },
  {
    "url": "assets/js/12.689a6a69.js",
    "revision": "82263fbb08248b935fe8cf2131243153"
  },
  {
    "url": "assets/js/13.a95e3c4f.js",
    "revision": "9a991aa2cdf65563f898a273e7db49b6"
  },
  {
    "url": "assets/js/14.9131c01d.js",
    "revision": "2c6965d807fd4395c9f543f00ca8803a"
  },
  {
    "url": "assets/js/15.a50108c2.js",
    "revision": "cee6e27fab1bfcd3265bf5533d1e727f"
  },
  {
    "url": "assets/js/16.078ecba7.js",
    "revision": "da93e558c236c6f70fc6753f99a294aa"
  },
  {
    "url": "assets/js/17.1153aee1.js",
    "revision": "7d223b46616a89badd24c43695181b9b"
  },
  {
    "url": "assets/js/18.921f45d7.js",
    "revision": "1daf86448aa1ab6120a764a9420a068a"
  },
  {
    "url": "assets/js/19.62f39229.js",
    "revision": "0edad158136cec4547ab04b14b42dfcd"
  },
  {
    "url": "assets/js/20.146e9b49.js",
    "revision": "3f92a4b2fedb1d028292248c14d56abe"
  },
  {
    "url": "assets/js/21.488d5e37.js",
    "revision": "1ef5fcf86276bb85f3cd4eb403f45222"
  },
  {
    "url": "assets/js/22.533c42f1.js",
    "revision": "c36abd88ad905e2e155c159cf3eec738"
  },
  {
    "url": "assets/js/23.b041aadd.js",
    "revision": "c75ac2f583f41686901f9054c29d3b0d"
  },
  {
    "url": "assets/js/24.81e82367.js",
    "revision": "bc54d730b76b023971b64161522fefd8"
  },
  {
    "url": "assets/js/25.2a21715a.js",
    "revision": "717d7ac82ddb706211135e73f65f50a2"
  },
  {
    "url": "assets/js/26.13eaecfa.js",
    "revision": "b1a46c0683d96fa7315ba79dc3593992"
  },
  {
    "url": "assets/js/27.017e0675.js",
    "revision": "85e294dfef8d2d4269a98250a15f5203"
  },
  {
    "url": "assets/js/28.90824271.js",
    "revision": "4431fe3869f990fc67c4202b3efbc739"
  },
  {
    "url": "assets/js/29.504df66e.js",
    "revision": "c4b3ddbd12cdbe32efc208a554c88894"
  },
  {
    "url": "assets/js/30.514cd28b.js",
    "revision": "6daa3ec908a7135296bb946c5c60644d"
  },
  {
    "url": "assets/js/31.28c2affb.js",
    "revision": "1a5fbb50c53bd676fbdd4ec290d7a567"
  },
  {
    "url": "assets/js/32.7735c1bf.js",
    "revision": "9d72fddc58a664660f868a64abcfd5da"
  },
  {
    "url": "assets/js/33.d3932b60.js",
    "revision": "88754c0c7e5931040e7e937e53cbde2b"
  },
  {
    "url": "assets/js/34.c6c69436.js",
    "revision": "1eda6d734fefcf9c151e2d26b6289f6e"
  },
  {
    "url": "assets/js/35.1e10043f.js",
    "revision": "3769ffb5206e943a538a159e6a159a7a"
  },
  {
    "url": "assets/js/36.3d56b017.js",
    "revision": "ccef5fc1602fce5b26d0b25f88f65541"
  },
  {
    "url": "assets/js/37.4767af69.js",
    "revision": "1fb57dece24db3b4ed2ba75c4d20024d"
  },
  {
    "url": "assets/js/4.53625123.js",
    "revision": "3ba11f02072cd133be9861fda056e3ca"
  },
  {
    "url": "assets/js/5.03bf4309.js",
    "revision": "1ff6cada595bc62edd52226aed284145"
  },
  {
    "url": "assets/js/6.e73017a9.js",
    "revision": "ecd1eb52471dcb94babc78306028b57e"
  },
  {
    "url": "assets/js/7.7e09c600.js",
    "revision": "406868a4e630804cb506dca51776ad0b"
  },
  {
    "url": "assets/js/8.3f1754b2.js",
    "revision": "8937fffc7e42fa0bd151381e9437467b"
  },
  {
    "url": "assets/js/9.3df45561.js",
    "revision": "0a37e4e88121ac8cd38e8635cf9dd8b5"
  },
  {
    "url": "assets/js/app.57db2d0d.js",
    "revision": "c2e47143044f24d0abdc2df841d48e14"
  },
  {
    "url": "assets/js/vendors~flowchart.16fe5c35.js",
    "revision": "6f1363afe314ec7cb1c8e6bc9fa98fbc"
  },
  {
    "url": "assets/js/vendors~notification.ffada997.js",
    "revision": "c4bbafc68016576dead5099c0afe0a81"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "4ef13070ed67b3bef97c18c8cc5a4eff"
  },
  {
    "url": "javaee/index.html",
    "revision": "115f80e34cd1d5be324dc210bf36b023"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "142e713effeacdd06f45ec1b5c0a87e6"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "60af099ec902595f68d4d9c4bc3cbbb2"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "e4ae88375a82ffa5d47304d30383ef84"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "ce9fda55aa1d56d5f4bd44380688e576"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "be2b50864a26d7318deeab7b66e8c59c"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "4b8e85d7ddc72db616aa2e44f83a9499"
  },
  {
    "url": "javatool/build/gradle.html",
    "revision": "7c3fefbf52fc55e85a80adc503f1dad2"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "98511db4e14cff63713678b597af9f18"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "621d233c1bc439c1138095f39482e231"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "576cf418c5c41a453697d4795dc4fad6"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "d2adcc4581a64916fb9351b33f45b783"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "8eea4c13fe629772e51363973497c36a"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "fa2c98c9ff46722c3d8eac2a128c2ba5"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "e672d40ac7b45f4ba384b392f12f86d5"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "6776be178231bec905607a31326fc4fa"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "4a92180df30b0d18dba957c043047dd9"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "80356d95507850022a6fd945e45de80c"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "2ab8889bb8f63f43bb8a89bf43599822"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "da674085eab0708bf022b78c29965bb0"
  },
  {
    "url": "javatool/index.html",
    "revision": "293f836b60f4c74f2d60f30a8709c0b0"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "31e92c1173fdb6d64e9f1fb1207346dd"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "baefc888fe63ff3c6c58349777911094"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "8a766dfb38471192446ca9b246a468ec"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "20b3a35579e3bad007fe659f46f09d1c"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "633294119df2095c1d792961bb2d2362"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "8dc8f1eba405108c797b141db97e7fbf"
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
