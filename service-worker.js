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
    "revision": "a13389a88a566d341bf73ba52651be93"
  },
  {
    "url": "api/index.html",
    "revision": "da30c2f600c9d603ae28fb06b09c4232"
  },
  {
    "url": "assets/css/0.styles.feeb6d91.css",
    "revision": "1ce53f9652f72d533f6bf179c7ea782c"
  },
  {
    "url": "assets/img/cronjob.13a2a082.png",
    "revision": "13a2a0821adca81231d050bd313b1693"
  },
  {
    "url": "assets/img/dashboard_3.19.caa86734.png",
    "revision": "caa867345ef6659241fd6fd40cbfd148"
  },
  {
    "url": "assets/img/databases.f4d298e3.png",
    "revision": "f4d298e33deaac8de2a17bc87ea1d3e1"
  },
  {
    "url": "assets/img/file-manager-delete-file.cf0f5fd5.png",
    "revision": "cf0f5fd5d5f40b30e4980be41c4b6d48"
  },
  {
    "url": "assets/img/file-manager-extract-files.0ef60e09.png",
    "revision": "0ef60e09e33aad8888c02477daae8f7b"
  },
  {
    "url": "assets/img/file-manager-extract.72bea043.png",
    "revision": "72bea043996303786ef14ff8921554d3"
  },
  {
    "url": "assets/img/file-manager.d1a07884.png",
    "revision": "d1a078845df44c5bfeb978823c601d6c"
  },
  {
    "url": "assets/img/files.4aa4878b.png",
    "revision": "4aa4878b1596ab287dae4417621c2807"
  },
  {
    "url": "assets/img/multiphp-ini-keys.83901b7f.png",
    "revision": "83901b7f141fdb6b99f86b244ee0ad2a"
  },
  {
    "url": "assets/img/multiphp-manager.88fa8221.png",
    "revision": "88fa822191bbb6b068796b609a0c9186"
  },
  {
    "url": "assets/img/mutliphp-ini-editor.859b4a87.png",
    "revision": "859b4a87c13eb1beec0520bbf4f09f90"
  },
  {
    "url": "assets/img/mysql-wizard-create-database.e64fa0ed.png",
    "revision": "e64fa0ed54dff2371928c3e64f6b66c6"
  },
  {
    "url": "assets/img/mysql-wizard-privileges.0eee95f6.png",
    "revision": "0eee95f6fd59926640564c5ef93fe372"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/software.77971e2e.png",
    "revision": "77971e2e619a23472449bdd911a762c7"
  },
  {
    "url": "assets/js/10.5a547475.js",
    "revision": "1e71304c52cb13b5efe765b4ec8ce913"
  },
  {
    "url": "assets/js/11.d519e1f3.js",
    "revision": "665ba8c376461f6bf8360d3d3b44b3ae"
  },
  {
    "url": "assets/js/12.5fbcf9d4.js",
    "revision": "96a6a839c29a5cd1077e9cee37db644e"
  },
  {
    "url": "assets/js/13.8cb048d0.js",
    "revision": "ddf01ba356d14e672bb3d475d5bbf7a5"
  },
  {
    "url": "assets/js/14.fc17878b.js",
    "revision": "b627c720c30e7670ce16e2665a6484bb"
  },
  {
    "url": "assets/js/15.8fa387b7.js",
    "revision": "1e38bba43bdec65c2a54e61daecb27bd"
  },
  {
    "url": "assets/js/16.9ae1e80b.js",
    "revision": "5f2d82229aa84d472aba467245906cc1"
  },
  {
    "url": "assets/js/17.5fac433e.js",
    "revision": "3f6bfb2a8500d31181029d99bdbe99da"
  },
  {
    "url": "assets/js/18.e57f6bae.js",
    "revision": "16464bc82777d451d54ee5b187138ebd"
  },
  {
    "url": "assets/js/19.bcd0674c.js",
    "revision": "77e539ac3dccdd18a9057a2cca2e73b2"
  },
  {
    "url": "assets/js/20.9fb8ae72.js",
    "revision": "b7f4028305726384a923666430f79051"
  },
  {
    "url": "assets/js/21.a52a7ee8.js",
    "revision": "90b9ed78d81a5d9db689e1ac8ee7529d"
  },
  {
    "url": "assets/js/22.4e476823.js",
    "revision": "398c7c393e3082b19191f79f1abb3d55"
  },
  {
    "url": "assets/js/23.13c29f17.js",
    "revision": "15bcd0aa8bda091f7959884081b9a08c"
  },
  {
    "url": "assets/js/24.051a915a.js",
    "revision": "1ebd67fb4746fbf668b7ab15f18927be"
  },
  {
    "url": "assets/js/25.0b13419c.js",
    "revision": "e2cd52da2e9923f47ddc53eef3a95d12"
  },
  {
    "url": "assets/js/26.089daed0.js",
    "revision": "4a1650fafa3874a150b2fc558a600dd1"
  },
  {
    "url": "assets/js/27.24e5cf7b.js",
    "revision": "99588c22f27ce9d54e102f5040bc0e5e"
  },
  {
    "url": "assets/js/28.ecfffaa3.js",
    "revision": "7fa258f6eb9adcf6fe120f8c64951ce5"
  },
  {
    "url": "assets/js/29.5cebe39d.js",
    "revision": "dd14c8e2fd3d86f08c0ed11c8a17e78b"
  },
  {
    "url": "assets/js/3.c8df3c60.js",
    "revision": "d2e59b4c6eaaa4847ec4a4d1b012c651"
  },
  {
    "url": "assets/js/30.2f17c38c.js",
    "revision": "82118152d00df9b8c3f464eab4c1da44"
  },
  {
    "url": "assets/js/31.50225bb5.js",
    "revision": "0bd3c2bb14fe867187e13346f48b3ee0"
  },
  {
    "url": "assets/js/32.73d10a16.js",
    "revision": "ecdb007a5a68beb96dfabb8b7c9ed864"
  },
  {
    "url": "assets/js/33.d15b77d1.js",
    "revision": "1d243dac5f0eb3dc3b8b27d3678dee37"
  },
  {
    "url": "assets/js/34.dab2aeb5.js",
    "revision": "d026814a926d71877a937f9cc9bdf1f3"
  },
  {
    "url": "assets/js/35.6fa2213c.js",
    "revision": "c45368a2db6a73de0c0096bbbb37013e"
  },
  {
    "url": "assets/js/36.4a6d9a4b.js",
    "revision": "b4757f0018c89972dc78e71b669fe4db"
  },
  {
    "url": "assets/js/37.94e91ca7.js",
    "revision": "863c490cc0107d411c4e35ed1586f5e9"
  },
  {
    "url": "assets/js/38.6c045389.js",
    "revision": "6c9fcb0fabbe05c64286860530f7bd58"
  },
  {
    "url": "assets/js/39.9487241c.js",
    "revision": "814ea3194ec92fe6d0d933c674ef6456"
  },
  {
    "url": "assets/js/4.55665da6.js",
    "revision": "13573b1ce6d4fa0ac830f032c9b24ec7"
  },
  {
    "url": "assets/js/40.81602670.js",
    "revision": "2493be0acd9a3e37ba66feb31ff7b578"
  },
  {
    "url": "assets/js/41.d99fc085.js",
    "revision": "0581385f699b9bd5955e6fe32d5ba3b5"
  },
  {
    "url": "assets/js/42.d9217e04.js",
    "revision": "1aab5aa0e5d67ee66a6ec9051376d354"
  },
  {
    "url": "assets/js/43.72817589.js",
    "revision": "66be329796b585cf8c7a081ebb147194"
  },
  {
    "url": "assets/js/44.37229739.js",
    "revision": "00fe63d043db58e33467e00ea37d7b5a"
  },
  {
    "url": "assets/js/45.e2217aaa.js",
    "revision": "203a3ad0af5222bb415278e69dda78b9"
  },
  {
    "url": "assets/js/46.ae6c0d2d.js",
    "revision": "3a56f73fffdd228c4a6c618724485605"
  },
  {
    "url": "assets/js/47.4be0876b.js",
    "revision": "a83093355b3e9fa6eb3ce5eccd5e7bd6"
  },
  {
    "url": "assets/js/48.d8fb2e1a.js",
    "revision": "3e5123021ee3b526946850e58d483417"
  },
  {
    "url": "assets/js/49.5eff95d0.js",
    "revision": "4b9bae18829f60195075701e4a60d8f4"
  },
  {
    "url": "assets/js/5.8cd91fac.js",
    "revision": "14533cdecbabaddcc4b82c03301f294f"
  },
  {
    "url": "assets/js/50.b61b6ca8.js",
    "revision": "a5fb4e99f603cad5ee970c6c9300ef34"
  },
  {
    "url": "assets/js/51.47b9b6dd.js",
    "revision": "251c365e2290ed00d42d68458163e8cf"
  },
  {
    "url": "assets/js/52.ce1be02f.js",
    "revision": "e59561cdd80ba18696c6f7bbd293dbe5"
  },
  {
    "url": "assets/js/53.9068589d.js",
    "revision": "a72d3fc6037db31b31e1941b08a929a3"
  },
  {
    "url": "assets/js/54.35cd0349.js",
    "revision": "f55d7408af9505ee5d577ce85f51d164"
  },
  {
    "url": "assets/js/55.8fbc48b2.js",
    "revision": "f9d2ea62505a05b0dc2e86f1ebc0cc86"
  },
  {
    "url": "assets/js/56.6ea6240d.js",
    "revision": "0a5a6598b66ef05e48d2260e2fce099d"
  },
  {
    "url": "assets/js/57.fd7b2712.js",
    "revision": "d200725f067d71b1e5c50b90002f0e94"
  },
  {
    "url": "assets/js/58.ecc67709.js",
    "revision": "e5e4b291fb7ec9d50b116afc6492eca8"
  },
  {
    "url": "assets/js/59.788a264f.js",
    "revision": "4b0e6d1bf0d6cde2c77fe44060ee709c"
  },
  {
    "url": "assets/js/6.b8b11188.js",
    "revision": "1d486085365f90c19052da2d2c3405ad"
  },
  {
    "url": "assets/js/60.4cfbb791.js",
    "revision": "eb39f09b4440315f8e0396c7d47a71f1"
  },
  {
    "url": "assets/js/61.8c56ebbb.js",
    "revision": "19c59854a1219696a470f13171c26530"
  },
  {
    "url": "assets/js/62.c9b44379.js",
    "revision": "cb4514775ffd36a278458bdc9be1401d"
  },
  {
    "url": "assets/js/63.070162c3.js",
    "revision": "90696dd50a296f0f36e3b2e545d891aa"
  },
  {
    "url": "assets/js/7.350ff68d.js",
    "revision": "84725b6b4330795abe82641ac53ebbc9"
  },
  {
    "url": "assets/js/8.26b444c0.js",
    "revision": "b4b0f0893c3c4319509bac56ff612ac2"
  },
  {
    "url": "assets/js/9.b9118161.js",
    "revision": "e962865a748cf2251fbfd5ec6c65803b"
  },
  {
    "url": "assets/js/app.7e027b56.js",
    "revision": "b7605e9011616c9ab6a69d523f5464e0"
  },
  {
    "url": "assets/js/vendors~docsearch.3e5f6adf.js",
    "revision": "d701190c9de0aa45426a7d2f6e46e907"
  },
  {
    "url": "features/content/bulk-content-importer.html",
    "revision": "b486d0a0fa98c7b76a549927002044bf"
  },
  {
    "url": "features/customization/language.html",
    "revision": "be4945a9acc8f6c08560047809ff0559"
  },
  {
    "url": "features/customization/routes.html",
    "revision": "b08beadf7ca21fc1d7b4486748e9a741"
  },
  {
    "url": "features/customization/theme.html",
    "revision": "91b2ab6176471d536f770acdef6b3b62"
  },
  {
    "url": "features/integrations/external-storage.html",
    "revision": "b8e81136d02b7d3d830a592127c2a7b1"
  },
  {
    "url": "features/integrations/pup.html",
    "revision": "fe429e32f1c22a13fec8d41da38eaa28"
  },
  {
    "url": "features/integrations/sharex.html",
    "revision": "b8384de50afd3351d355cfe39e769442"
  },
  {
    "url": "features/integrations/social-login.html",
    "revision": "cf9c1510e7fb26e11577a0580ff990f3"
  },
  {
    "url": "features/reference/security.html",
    "revision": "a6bc8675a8b0ec91792283f48705b2aa"
  },
  {
    "url": "get-started/deploy.html",
    "revision": "8825b092ffaa87ee26bf8f7f7591fd62"
  },
  {
    "url": "get-started/index.html",
    "revision": "edf6e301851573a3abd52768fa270b04"
  },
  {
    "url": "get-started/status.html",
    "revision": "cf39d04f56f172e22dd2f3e65f9ec1a4"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e8b5fa3160306f249145821b4cfeae43"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "8ac630b2b40dca3cd21aadc83f4a26b0"
  },
  {
    "url": "index.html",
    "revision": "d29757a35366049143a37623838461c4"
  },
  {
    "url": "logo.png",
    "revision": "2179105dc8009814831fae6afa9c1024"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "manual/first-steps/initial-setup.html",
    "revision": "046d755323a3fbde634bcf8136c9ceb1"
  },
  {
    "url": "manual/first-steps/setup-cron.html",
    "revision": "45cab54a626603a4b6a1e6780d58a4e4"
  },
  {
    "url": "manual/first-steps/setup-email.html",
    "revision": "b1fe999bc80153fc03bcf3438e401917"
  },
  {
    "url": "manual/troubleshooting/debug.html",
    "revision": "9c32d6827ae26d18bae60e3a7894f849"
  },
  {
    "url": "manual/troubleshooting/errors.html",
    "revision": "6f135ed98c90ea371e33eda72fb61fcd"
  },
  {
    "url": "manual/troubleshooting/server-issues.html",
    "revision": "ef2c0fce1a466ed9180248a4b8bdac1c"
  },
  {
    "url": "settings/additional-settings.html",
    "revision": "c595dfeef9c4483a9f0e58774a257bb6"
  },
  {
    "url": "settings/api.html",
    "revision": "3c367e43d6e46022c1df8d3abfbdd7c8"
  },
  {
    "url": "settings/banners.html",
    "revision": "c20a251d97ce875c159ebbec126ad97a"
  },
  {
    "url": "settings/categories.html",
    "revision": "18cdf593d341305213183c0fbb351980"
  },
  {
    "url": "settings/consent-screen.html",
    "revision": "a08253129828f7bb604c0e28e1e12239"
  },
  {
    "url": "settings/content.html",
    "revision": "ce2f1ea6e185d5471a17b899a88708e3"
  },
  {
    "url": "settings/email.html",
    "revision": "af0667758feca48ba3799cd477188335"
  },
  {
    "url": "settings/external-services.html",
    "revision": "20ce7a2a6774cf207c1895f5693702a2"
  },
  {
    "url": "settings/external-storage.html",
    "revision": "b934dcd2dc89670b0cf51078bb846399"
  },
  {
    "url": "settings/flood-protection.html",
    "revision": "b2330cfd4b9afd518bcba6b73bd023bb"
  },
  {
    "url": "settings/homepage.html",
    "revision": "e633ca5cdfde5e2387e8c5ec399bc2bc"
  },
  {
    "url": "settings/image-upload.html",
    "revision": "ded254fee5321bf9cdb16653b0b4d43d"
  },
  {
    "url": "settings/index.html",
    "revision": "2f7e36138b1ddad09a3de70baf209ccf"
  },
  {
    "url": "settings/ip-bans.html",
    "revision": "491228714aa7f17545b31fcfdec14938"
  },
  {
    "url": "settings/languages.html",
    "revision": "f7ff5a485d8bfab8c9e5a6963b0c1d58"
  },
  {
    "url": "settings/listings.html",
    "revision": "6bc502f621183826063a79c2d6549047"
  },
  {
    "url": "settings/pages.html",
    "revision": "35b1c8d120218b62cefb07fb26605519"
  },
  {
    "url": "settings/routing.html",
    "revision": "39b7e54453c6b968c5b124598c798677"
  },
  {
    "url": "settings/social-networks.html",
    "revision": "5eb8bf84e0115314943661052b427f8c"
  },
  {
    "url": "settings/system.html",
    "revision": "2c9a14dbc3605259baf1f23ed661f615"
  },
  {
    "url": "settings/theme.html",
    "revision": "74394d00618c1475840d1e18ba3fd59f"
  },
  {
    "url": "settings/tools.html",
    "revision": "13722a070de54a1c07f62cc6dd41b119"
  },
  {
    "url": "settings/users.html",
    "revision": "95addb3791b65a57d5321832c59f0c65"
  },
  {
    "url": "settings/website.html",
    "revision": "d615f3af1fbfb0dba0fd9f4434f97578"
  },
  {
    "url": "setup/container/bootstrapped.html",
    "revision": "c65f8b9a20ed2bfee93e936fdc3354bf"
  },
  {
    "url": "setup/container/registry.html",
    "revision": "f7d9a21e8dfa1bcfada1dbb0e49659ff"
  },
  {
    "url": "setup/server/cpanel.html",
    "revision": "83753a85ebb7e2c2ca891a0e4a8e497f"
  },
  {
    "url": "setup/server/installation.html",
    "revision": "39336ec7f6ac7a0e2a31976bb6016465"
  },
  {
    "url": "setup/server/requirements.html",
    "revision": "a27d3d956651edae88046c23d5757b29"
  },
  {
    "url": "setup/server/settings-file.html",
    "revision": "11bf00f924f62f1c36b80c22da32b142"
  },
  {
    "url": "setup/server/updating.html",
    "revision": "3f53cc6db1fb9c9c613afb1920a59d28"
  },
  {
    "url": "setup/server/upgrading.html",
    "revision": "e84bd2724090ba04878b23a5a8367c74"
  },
  {
    "url": "setup/system/environment.html",
    "revision": "c1092a556244f8afafb2636a093abd47"
  },
  {
    "url": "setup/system/requirements.html",
    "revision": "e1f134eec553f477af70add5dd60e7c8"
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
