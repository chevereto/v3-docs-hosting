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
    "revision": "2f12f13753b4ae66bef5e7eb97ba1fda"
  },
  {
    "url": "api/index.html",
    "revision": "4c52129ca8b3bf642809ee397e1edeb5"
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
    "url": "assets/js/15.4f8d7011.js",
    "revision": "17b2d784991cc197179aa55ba728384a"
  },
  {
    "url": "assets/js/16.e3765e18.js",
    "revision": "db353a7a815d6977ca829f15020eab26"
  },
  {
    "url": "assets/js/17.5fac433e.js",
    "revision": "3f6bfb2a8500d31181029d99bdbe99da"
  },
  {
    "url": "assets/js/18.71ba4216.js",
    "revision": "c901b937034a9c54bea1dff20e24517a"
  },
  {
    "url": "assets/js/19.157500c3.js",
    "revision": "f0e68fea49e98ac5f810978f0aabdf0f"
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
    "url": "assets/js/22.19802b1b.js",
    "revision": "d13040285fe7ce0a73df95df6b2f34c0"
  },
  {
    "url": "assets/js/23.71378fe1.js",
    "revision": "7b0e7e0ad4ed8efd2f79f8bce3fb8e3e"
  },
  {
    "url": "assets/js/24.54956af2.js",
    "revision": "7748853370a6e0b688b95959e9701927"
  },
  {
    "url": "assets/js/25.984b3a01.js",
    "revision": "78117fd992d97642d7021c031fbd4d1a"
  },
  {
    "url": "assets/js/26.fa1316a8.js",
    "revision": "f9bf6ab8f496d3ffd3643c8155fe5a20"
  },
  {
    "url": "assets/js/27.d92bcf24.js",
    "revision": "8431e72b963c374035db5abb957afd53"
  },
  {
    "url": "assets/js/28.58c323cf.js",
    "revision": "479c02c8ed26e7a742b5c9b9559457f3"
  },
  {
    "url": "assets/js/29.234fe67a.js",
    "revision": "8762a6ed3b137393ec2a5f7cd3046b9d"
  },
  {
    "url": "assets/js/3.c8df3c60.js",
    "revision": "d2e59b4c6eaaa4847ec4a4d1b012c651"
  },
  {
    "url": "assets/js/30.9e4d0125.js",
    "revision": "025cca99eac9b8e725b41d2579651f6a"
  },
  {
    "url": "assets/js/31.9ef10826.js",
    "revision": "aa0d34a895ff4470283419e42965a5be"
  },
  {
    "url": "assets/js/32.b0dc0bad.js",
    "revision": "2d5db4f1326eb8822d21805a5ddaa866"
  },
  {
    "url": "assets/js/33.2c0c1abe.js",
    "revision": "455e03e31aa21bc7a7910f188ec76893"
  },
  {
    "url": "assets/js/34.fa6ee6f8.js",
    "revision": "da370a71ea602e791759985c2863fd0e"
  },
  {
    "url": "assets/js/35.b79e2b25.js",
    "revision": "e4840eeb04ebdaf0f1b6efa19b9a0d18"
  },
  {
    "url": "assets/js/36.4275dc4f.js",
    "revision": "c2f983a7f8389585f199e2ccb95bf061"
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
    "url": "assets/js/39.0a59819f.js",
    "revision": "230327eb537acfbc0df751328ec0c295"
  },
  {
    "url": "assets/js/4.aea5d917.js",
    "revision": "5dd6084bcd620a587b437d0bb387659d"
  },
  {
    "url": "assets/js/40.322c46e8.js",
    "revision": "4beec9f589293908538b16951797a881"
  },
  {
    "url": "assets/js/41.d99fc085.js",
    "revision": "0581385f699b9bd5955e6fe32d5ba3b5"
  },
  {
    "url": "assets/js/42.98c56413.js",
    "revision": "1bf787da2a7e18032699484a78b14f15"
  },
  {
    "url": "assets/js/43.4d8de881.js",
    "revision": "b0689ddfcd06848e2937255a7d3ab250"
  },
  {
    "url": "assets/js/44.37229739.js",
    "revision": "00fe63d043db58e33467e00ea37d7b5a"
  },
  {
    "url": "assets/js/45.034da6b7.js",
    "revision": "c4ee36d45174d6854bf9af063eb7a80e"
  },
  {
    "url": "assets/js/46.f964b151.js",
    "revision": "06442c9fbb02bf7d07333257357e3d3e"
  },
  {
    "url": "assets/js/47.270ef674.js",
    "revision": "c94324e7bbce0d19e7e4251b247cb932"
  },
  {
    "url": "assets/js/48.489c277f.js",
    "revision": "1c17aadf7a7648fc1e8020492864f933"
  },
  {
    "url": "assets/js/49.f8e81b49.js",
    "revision": "d7c668fe06c5a8198c5f315486fd6d95"
  },
  {
    "url": "assets/js/5.8cd91fac.js",
    "revision": "14533cdecbabaddcc4b82c03301f294f"
  },
  {
    "url": "assets/js/50.ff590687.js",
    "revision": "05765d089d12ef8531fca8190cc62069"
  },
  {
    "url": "assets/js/51.25e19412.js",
    "revision": "0389940368cfce56e91a3841bd4910f2"
  },
  {
    "url": "assets/js/52.17c5661a.js",
    "revision": "3c0ab4c0fdd692d3fdb9409e00695fcb"
  },
  {
    "url": "assets/js/53.636da572.js",
    "revision": "01bb346495da1b4e9386e18862348231"
  },
  {
    "url": "assets/js/54.b07df545.js",
    "revision": "cd8c130fc558045f33c2ab77bc985ce2"
  },
  {
    "url": "assets/js/55.8fbc48b2.js",
    "revision": "f9d2ea62505a05b0dc2e86f1ebc0cc86"
  },
  {
    "url": "assets/js/56.d6721e6a.js",
    "revision": "122d9e333340deaf5317de4cede6f822"
  },
  {
    "url": "assets/js/57.fd7b2712.js",
    "revision": "d200725f067d71b1e5c50b90002f0e94"
  },
  {
    "url": "assets/js/58.e15664c9.js",
    "revision": "0d96c4731ee1f3045c1c3a30593884b2"
  },
  {
    "url": "assets/js/59.2fa06bd4.js",
    "revision": "f67fad11c372e4034e896086f5f585e6"
  },
  {
    "url": "assets/js/6.b8b11188.js",
    "revision": "1d486085365f90c19052da2d2c3405ad"
  },
  {
    "url": "assets/js/60.bfb7db3b.js",
    "revision": "9efe1bf00ea4919b95ab21e2a8b010a4"
  },
  {
    "url": "assets/js/61.3b60217c.js",
    "revision": "c8d893ec90a1cd84a05b6b342e82aa14"
  },
  {
    "url": "assets/js/62.17083b2d.js",
    "revision": "c6110d66eb541d0086f04706b96929a0"
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
    "url": "assets/js/9.bfd080b1.js",
    "revision": "233606c56dab722e875c055b2b82842e"
  },
  {
    "url": "assets/js/app.2b0d0be9.js",
    "revision": "b642b91ff0e9f72807f8ba0d7b630138"
  },
  {
    "url": "assets/js/vendors~docsearch.3e5f6adf.js",
    "revision": "d701190c9de0aa45426a7d2f6e46e907"
  },
  {
    "url": "features/content/bulk-content-importer.html",
    "revision": "074e45b4a1e01e9a40b7ca76a2ab0477"
  },
  {
    "url": "features/customization/language.html",
    "revision": "7fd2233e8bbe86b2b3a29a99a57debf4"
  },
  {
    "url": "features/customization/routes.html",
    "revision": "2529cdf1959884b4cbabdbea89361932"
  },
  {
    "url": "features/customization/theme.html",
    "revision": "194ac3dd26e0e4b8680911edb346f789"
  },
  {
    "url": "features/integrations/external-storage.html",
    "revision": "b1ef4a756b248cf71b47c9ed03eedd5b"
  },
  {
    "url": "features/integrations/pup.html",
    "revision": "f58e7ee970d2b6c7a6631a5c6134fb0d"
  },
  {
    "url": "features/integrations/sharex.html",
    "revision": "ba321d50b1e1178dad74e2a1a6566180"
  },
  {
    "url": "features/integrations/social-login.html",
    "revision": "f7180e639f7747e5f8dcdc440b8b65c9"
  },
  {
    "url": "features/reference/security.html",
    "revision": "f8b4a53abeea451053b2878b109e78b1"
  },
  {
    "url": "get-started/deploy.html",
    "revision": "9b5e1fb45645116fab7de0c6aa6a0323"
  },
  {
    "url": "get-started/index.html",
    "revision": "9ff8cecb8e1ce3e06f74f134dd92c9db"
  },
  {
    "url": "get-started/status.html",
    "revision": "e1bc9af20a50c7366c4a58b1c294d78a"
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
    "revision": "52d00490136c74c1473d089684670c40"
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
    "revision": "cc9397882fa76f13640a07c537369ecf"
  },
  {
    "url": "manual/first-steps/setup-cron.html",
    "revision": "8a0f0b567fe7a7b41683c7aa80a04d64"
  },
  {
    "url": "manual/first-steps/setup-email.html",
    "revision": "62aeac5e46aa3296abdf60b0e939931f"
  },
  {
    "url": "manual/troubleshooting/debug.html",
    "revision": "6a8df751ca3016da5f85991ffca5f361"
  },
  {
    "url": "manual/troubleshooting/errors.html",
    "revision": "966e2ef0621255df1d9844bd17ec9eeb"
  },
  {
    "url": "manual/troubleshooting/server-issues.html",
    "revision": "74b92bd99275259d5a573f6eee735d1e"
  },
  {
    "url": "settings/additional-settings.html",
    "revision": "bf1a6179279f3c7b8df18db8f9b4be50"
  },
  {
    "url": "settings/api.html",
    "revision": "a8197cc62369505566c4403a207de43d"
  },
  {
    "url": "settings/banners.html",
    "revision": "7b30b8de515ce361ebd08621c22529e6"
  },
  {
    "url": "settings/categories.html",
    "revision": "954d38ba2086c07852927dff6052fd2b"
  },
  {
    "url": "settings/consent-screen.html",
    "revision": "bc5490575153fda454eafdf715c6ed40"
  },
  {
    "url": "settings/content.html",
    "revision": "f9b5de616a9b39cc2c155a122c835cce"
  },
  {
    "url": "settings/email.html",
    "revision": "2a3d7190416cde1fd779ada2eabff382"
  },
  {
    "url": "settings/external-services.html",
    "revision": "da9d13201ac3cd4c0e6797a7b825aeea"
  },
  {
    "url": "settings/external-storage.html",
    "revision": "eb89f0decb908eb873844f6d4adeffc3"
  },
  {
    "url": "settings/flood-protection.html",
    "revision": "cf8f732082330f29f661bfe17a3090aa"
  },
  {
    "url": "settings/homepage.html",
    "revision": "5f603dd4f4e65abe46bc3adf5c3bd7df"
  },
  {
    "url": "settings/image-upload.html",
    "revision": "9ef6a5a98229760744f44b5225c6e597"
  },
  {
    "url": "settings/index.html",
    "revision": "b3d8186922daa39bc446cd8c7f2d9961"
  },
  {
    "url": "settings/ip-bans.html",
    "revision": "271589e9d29236c83ab645e396f03e44"
  },
  {
    "url": "settings/languages.html",
    "revision": "354e3171721f6525e43db76563533940"
  },
  {
    "url": "settings/listings.html",
    "revision": "cf062391a62ffa6d7617cca193bd4228"
  },
  {
    "url": "settings/pages.html",
    "revision": "d9d14ac18b70636f93aecdede9600af5"
  },
  {
    "url": "settings/routing.html",
    "revision": "ea602bd780d4293119f542e5f8461e74"
  },
  {
    "url": "settings/social-networks.html",
    "revision": "af7f4a71d98cfdd0963803cf909f2f9a"
  },
  {
    "url": "settings/system.html",
    "revision": "61d1a00870192812a4714cea846a5a7b"
  },
  {
    "url": "settings/theme.html",
    "revision": "b1baf44c1070673fc91e84dcb842228a"
  },
  {
    "url": "settings/tools.html",
    "revision": "327cb622384146812c73028a94edabd7"
  },
  {
    "url": "settings/users.html",
    "revision": "d873111637dc061415dd23b78a656e20"
  },
  {
    "url": "settings/website.html",
    "revision": "02be4374c16d48785b96ee4354085984"
  },
  {
    "url": "setup/container/bootstrapped.html",
    "revision": "728f185d15d3b8f19c990016df62df8a"
  },
  {
    "url": "setup/container/registry.html",
    "revision": "f9ca67e621c2abad70b2d520e4a16afb"
  },
  {
    "url": "setup/server/cpanel.html",
    "revision": "3d9503283abad50b64d1831359677c59"
  },
  {
    "url": "setup/server/installation.html",
    "revision": "8e25a4d6d801d94cad97bff94967cef8"
  },
  {
    "url": "setup/server/requirements.html",
    "revision": "0a4b493e05fc042dc0a876aef8f7a7c4"
  },
  {
    "url": "setup/server/settings-file.html",
    "revision": "443455bc962664fa658ae1ec201ce346"
  },
  {
    "url": "setup/server/updating.html",
    "revision": "0e65151154b7e4da70af2330f645eb09"
  },
  {
    "url": "setup/server/upgrading.html",
    "revision": "60b354e9ebb89c6e8e410b56ad9944df"
  },
  {
    "url": "setup/system/environment.html",
    "revision": "495dc0b71cdbcc7382db7d6538045151"
  },
  {
    "url": "setup/system/requirements.html",
    "revision": "11d6f47fdd3af256bb0132aaa6696c89"
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
