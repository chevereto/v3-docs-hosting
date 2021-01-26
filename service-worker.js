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
    "revision": "dd260a3a10aabadd79b9f727d86e6ca0"
  },
  {
    "url": "API/index.html",
    "revision": "0c831ad89fc16a4877623ec78d6d82ec"
  },
  {
    "url": "API/V1.html",
    "revision": "1e410f98d6dc3743cd1931fbd05fd91d"
  },
  {
    "url": "assets/css/0.styles.4740d439.css",
    "revision": "752c993b07319e51724b9560276e70ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.206b3dd7.js",
    "revision": "720e9bac90dcd5b4c0e2c200b4f83d04"
  },
  {
    "url": "assets/js/11.39014c7e.js",
    "revision": "525688b590360e902227675760317044"
  },
  {
    "url": "assets/js/12.df57db84.js",
    "revision": "4aaf9854ce720723327bfa7ecd579e86"
  },
  {
    "url": "assets/js/13.d14ca303.js",
    "revision": "3c03a395898cddce02603bce7c1adf7d"
  },
  {
    "url": "assets/js/14.305cc2e6.js",
    "revision": "67539b0726dca8895ba3f6a7e0f80137"
  },
  {
    "url": "assets/js/15.74b93294.js",
    "revision": "a675421c33ac07fdc551fc226e8609ac"
  },
  {
    "url": "assets/js/16.ddddbaf0.js",
    "revision": "50515700bc6932d533705c0c8bc0fe16"
  },
  {
    "url": "assets/js/17.c2409140.js",
    "revision": "9099366aeba66f9c99c0aed0c06b64e7"
  },
  {
    "url": "assets/js/18.cee25cf3.js",
    "revision": "ba4c420d737f301ce9f278da7a92b96f"
  },
  {
    "url": "assets/js/19.18907367.js",
    "revision": "ce7931107b3ada9625fdac886040d8e8"
  },
  {
    "url": "assets/js/20.8bf6f9e9.js",
    "revision": "c53c339eb5e0c63b2860267a291d9456"
  },
  {
    "url": "assets/js/21.08262f33.js",
    "revision": "e9c643f7a1aa25a5177a239bc7867da9"
  },
  {
    "url": "assets/js/22.77df7383.js",
    "revision": "a940633507bb4e035a46807eb32aa4d1"
  },
  {
    "url": "assets/js/23.0b93518f.js",
    "revision": "9d3591d3eaf05f2b4abc866da71b2b73"
  },
  {
    "url": "assets/js/24.4d84a2d1.js",
    "revision": "afda40f5dd2b4cac64b2d82a99a8cbfe"
  },
  {
    "url": "assets/js/25.5feffc9c.js",
    "revision": "580465da1effe3d8ee0813eea41f4eef"
  },
  {
    "url": "assets/js/26.7fa77ad7.js",
    "revision": "aa2b55a6eed6bd7b5f56fb3d240fb97d"
  },
  {
    "url": "assets/js/27.06f87f55.js",
    "revision": "e51447850fb5e4f969cf1331036085c2"
  },
  {
    "url": "assets/js/28.b842efe2.js",
    "revision": "1a6245a7f93f56e4db3f5ea33a665629"
  },
  {
    "url": "assets/js/29.5f556e83.js",
    "revision": "a49673973d55c80ccafe32e19498ce54"
  },
  {
    "url": "assets/js/3.4515a572.js",
    "revision": "cb0e497fea46e37c4ca0561bfe83265e"
  },
  {
    "url": "assets/js/30.721a4c73.js",
    "revision": "34ec48f6e9eff64f7bcf0a86200d3340"
  },
  {
    "url": "assets/js/31.bee5b88f.js",
    "revision": "dfc0107397fba726152782481fcd4fe7"
  },
  {
    "url": "assets/js/32.00610eaa.js",
    "revision": "64b06660d4da7b9b63c94db6f5bc1c0e"
  },
  {
    "url": "assets/js/33.b960edbd.js",
    "revision": "77e2d6a3186942ff0bb20e6484475b4f"
  },
  {
    "url": "assets/js/34.1fc3fa95.js",
    "revision": "8dce3ec5bcbc4f66b898c10ebf29d667"
  },
  {
    "url": "assets/js/35.ecbec9b4.js",
    "revision": "34a98e33179ed057d699a6d0e7ae1831"
  },
  {
    "url": "assets/js/36.e552267b.js",
    "revision": "2c2006ed4bc19eda5c507faf9abeec16"
  },
  {
    "url": "assets/js/37.959fff77.js",
    "revision": "45f8ed661d654590c9f8a899e86c3318"
  },
  {
    "url": "assets/js/38.bbdd131f.js",
    "revision": "9ffdf05568706c45898f4217dbbbc049"
  },
  {
    "url": "assets/js/39.2469ef3d.js",
    "revision": "b73d444243e043b880044a83e602c7b0"
  },
  {
    "url": "assets/js/4.f46e38da.js",
    "revision": "6bbdbdd749b142caeeec69cda597e1d1"
  },
  {
    "url": "assets/js/40.b27ee742.js",
    "revision": "db606caf391d21d7cee1dd46ac5a31ab"
  },
  {
    "url": "assets/js/41.d7cf1423.js",
    "revision": "00a1fc91e44a03823bbe6a4b619bb648"
  },
  {
    "url": "assets/js/42.ade7ab10.js",
    "revision": "a731be5d585c470708419514fde184e1"
  },
  {
    "url": "assets/js/43.77573363.js",
    "revision": "c7e392746899726c3d12f2d0de6f01f5"
  },
  {
    "url": "assets/js/44.f637161b.js",
    "revision": "5ac40f72053e2111865fbbdc53cbcee4"
  },
  {
    "url": "assets/js/45.2d500972.js",
    "revision": "ca0d42b15e7dbadc0a67f472627ee590"
  },
  {
    "url": "assets/js/46.06d9623c.js",
    "revision": "7064232272a8aee719789bc186897b6c"
  },
  {
    "url": "assets/js/47.81cdf2b1.js",
    "revision": "936534fb0c415e9a90178fd35c2eb95e"
  },
  {
    "url": "assets/js/48.e067f757.js",
    "revision": "c7fe6a9ca5fe64f96095ac43b54a7c55"
  },
  {
    "url": "assets/js/49.b9e45969.js",
    "revision": "4abc4fb65a6884b1277791d45fedb758"
  },
  {
    "url": "assets/js/5.ed8adbe0.js",
    "revision": "3a21cfa3a6a5f7b04abe97353325b70f"
  },
  {
    "url": "assets/js/50.353b80a6.js",
    "revision": "9304affae814e22a654126cc18631e8a"
  },
  {
    "url": "assets/js/51.3849ed66.js",
    "revision": "5e57166d8378d79ac5e21a862f79da79"
  },
  {
    "url": "assets/js/52.289dedf5.js",
    "revision": "c456bbabf173b55770cbc1bbd9843c38"
  },
  {
    "url": "assets/js/53.b7d4b1aa.js",
    "revision": "e326d11073287b34bd79c6aaeac8fffb"
  },
  {
    "url": "assets/js/54.d85a392b.js",
    "revision": "94bddf2ae3f47737041a7e04922336a3"
  },
  {
    "url": "assets/js/55.78de9666.js",
    "revision": "681e7f3e9cae9e740a62c67b0b5b183e"
  },
  {
    "url": "assets/js/56.fa22e53b.js",
    "revision": "e19872f6c36f8d9525bcabe0fcbc8645"
  },
  {
    "url": "assets/js/57.f5d8fdff.js",
    "revision": "27f1e1f5b6e10e0011942f37ee90fa61"
  },
  {
    "url": "assets/js/58.2129e604.js",
    "revision": "4e455315aeff46a6d514c65bdeacc9bb"
  },
  {
    "url": "assets/js/59.e8b7faa2.js",
    "revision": "37792d02de86b85a03f6f6ecb10ad29f"
  },
  {
    "url": "assets/js/6.611e3330.js",
    "revision": "07ccd5f68131cc675532165ad722611f"
  },
  {
    "url": "assets/js/60.6c5a9396.js",
    "revision": "cb3879c462aea12f1d08c7c50ec63e2c"
  },
  {
    "url": "assets/js/7.adf3cf98.js",
    "revision": "bc67e57c934c7d4381a10f7b56947989"
  },
  {
    "url": "assets/js/8.15dfe6a5.js",
    "revision": "5ac65654242e2ed7c88f310a336b0731"
  },
  {
    "url": "assets/js/9.44e8cc40.js",
    "revision": "3ac71ef8a37641c1cc498bd19b3f3726"
  },
  {
    "url": "assets/js/app.45a3a24b.js",
    "revision": "80b3ba05acbb0936785e6edea3287d34"
  },
  {
    "url": "assets/js/vendors~docsearch.4a8594da.js",
    "revision": "a7f873a5253473dc3f052868e7f95f8e"
  },
  {
    "url": "components/listing.html",
    "revision": "cafa358f0e4ffaeef660ff8403137a8b"
  },
  {
    "url": "contributed.html",
    "revision": "06eb99052aba83d792bcd8036c9fe3b1"
  },
  {
    "url": "customization/language.html",
    "revision": "91e1a7091900f7c471a646530e729ef8"
  },
  {
    "url": "customization/routes.html",
    "revision": "6c662009dc465d4025b7466ad3fde268"
  },
  {
    "url": "customization/theme.html",
    "revision": "269a9a3a7ae261e6c01f32a413497c28"
  },
  {
    "url": "extra/CDN.html",
    "revision": "c1642039c4f3bc8593cfa06cbd2811a8"
  },
  {
    "url": "extra/CloudFlare.html",
    "revision": "e856d32d720c514941fd102cdd8bc4f2"
  },
  {
    "url": "extra/ShareX.html",
    "revision": "16ec39f52915b06027075be3d34820e5"
  },
  {
    "url": "features/bulk-content-importer.html",
    "revision": "d395229033c4c740a125e0b426b41d81"
  },
  {
    "url": "features/external-storage.html",
    "revision": "60c6f256f012971debdac17c380f1064"
  },
  {
    "url": "features/PUP.html",
    "revision": "7f94462358387757ca2a8bc185856f9c"
  },
  {
    "url": "features/security.html",
    "revision": "b73d6904d4285a4a601c6675ce14391e"
  },
  {
    "url": "features/social-login.html",
    "revision": "c9fc8dc874e572fed764f408a6b85031"
  },
  {
    "url": "get-updates.html",
    "revision": "b8ad7fdbcc5f79ff509124887c1b6527"
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
    "revision": "cbdb8470ef7882ce242e209f4769b470"
  },
  {
    "url": "licenses.html",
    "revision": "26e92b1fd61539a1878b683fa1a55d95"
  },
  {
    "url": "logo.svg",
    "revision": "751323071ef8d62d968b22863d94bc4b"
  },
  {
    "url": "settings/additional-settings.html",
    "revision": "ccf1cf24b3ed5c1f06a2027fabe80db0"
  },
  {
    "url": "settings/api.html",
    "revision": "dd81d5d840414799ad10f15fdfc52725"
  },
  {
    "url": "settings/banners.html",
    "revision": "3fbd9e3fdbe8397daa512d731f518d06"
  },
  {
    "url": "settings/categories.html",
    "revision": "5e582b871af90c8a47609109ac77e36f"
  },
  {
    "url": "settings/consent-screen.html",
    "revision": "9ee98dc12ae0d193536f5c275d05d306"
  },
  {
    "url": "settings/content.html",
    "revision": "7cdcf402cfeb89b84bcc6f4dc1ab37b1"
  },
  {
    "url": "settings/email.html",
    "revision": "12464161b7cbfb65fcd0c7ab2b9e5c8d"
  },
  {
    "url": "settings/external-services.html",
    "revision": "16f1a71f602285099b8c01c1142e1040"
  },
  {
    "url": "settings/external-storage.html",
    "revision": "bd40ba504e7b72dd33be4accdb863c0f"
  },
  {
    "url": "settings/flood-protection.html",
    "revision": "bf2bc88b715f418e0c977f02bfcdcc69"
  },
  {
    "url": "settings/homepage.html",
    "revision": "306a0cdbc0aebce7b3ce2b90dbc0b2bd"
  },
  {
    "url": "settings/image-upload.html",
    "revision": "6275bb2d9332b2cb2440d0511988f4e8"
  },
  {
    "url": "settings/index.html",
    "revision": "4b25f45defbe822ef3114e766224d6ee"
  },
  {
    "url": "settings/ip-bans.html",
    "revision": "42fd48b376a0f34ba546b7295fecbb78"
  },
  {
    "url": "settings/languages.html",
    "revision": "0cb6c174d8a2fa8d61b85a2044b4bfd3"
  },
  {
    "url": "settings/listings.html",
    "revision": "4837995a509f1aea7ac98076a363a248"
  },
  {
    "url": "settings/pages.html",
    "revision": "20b39882cdf5dd893a569fd2d0e6fdfe"
  },
  {
    "url": "settings/routing.html",
    "revision": "aa7a6f251db3a1c2a25dff0208fcaedf"
  },
  {
    "url": "settings/social-networks.html",
    "revision": "e2b45e955ebc4641845868f9d4d727fd"
  },
  {
    "url": "settings/system.html",
    "revision": "bc6cad6127208d72365b19911f4994bb"
  },
  {
    "url": "settings/theme.html",
    "revision": "a410e33ebc20c7efba34e7030c808a32"
  },
  {
    "url": "settings/tools.html",
    "revision": "96c61b7eae9c32a9633305e79fbfbf10"
  },
  {
    "url": "settings/users.html",
    "revision": "df57764ba9fbabf7bd680263399279e3"
  },
  {
    "url": "settings/website.html",
    "revision": "fa2fe724a3b0954fe4c7e560ec61895e"
  },
  {
    "url": "setup/debug.html",
    "revision": "85f809b58498bbe15ac354334c7751cc"
  },
  {
    "url": "setup/hosting.html",
    "revision": "19135631d99bfd2dc07bb3661344c2e7"
  },
  {
    "url": "setup/index.html",
    "revision": "693b6c81253529d2da9345a19ac76020"
  },
  {
    "url": "setup/install.html",
    "revision": "fe582b7a9229f939c63266f2acb05b33"
  },
  {
    "url": "setup/requirements.html",
    "revision": "e1819134ff44b3dbbf2eabcba4ab0e5a"
  },
  {
    "url": "setup/root-install.html",
    "revision": "ccebdce9754566aae68c0cc57057d66f"
  },
  {
    "url": "setup/root-openlitespeed.html",
    "revision": "35ddc48da32bb9081c310078ca955989"
  },
  {
    "url": "setup/server-issues.html",
    "revision": "a0bbc8da9e8537d99b012553ff73d9a1"
  },
  {
    "url": "setup/settings-file.html",
    "revision": "b95a8927d782250364f1ed3e73cf2857"
  },
  {
    "url": "setup/troubleshot.html",
    "revision": "4465cc9c4d62d2c5776a25d12bb663ee"
  },
  {
    "url": "setup/update-guide.html",
    "revision": "91cabb1e3f48afe574ce47a8d5766979"
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
