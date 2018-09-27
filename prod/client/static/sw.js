importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.18832a442298b5f48eff.js",
    "revision": "c1232384487f9dd62dd3c64c2b1d7812"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.08b45bd5e367b60e9d35.js",
    "revision": "803179d1837834e5031916f3bd81d513"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.817461e7d95d87e9fcca.js",
    "revision": "a897de8cce6116fd3c9182f60e58cc89"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.23e81e28f95412dea3e8.js",
    "revision": "ed0a796efab9a0a7692144d36cbd6383"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.83cb73ac668670c912ee.js",
    "revision": "d3fd0b92e8dc8d7754afe0cab359ff6f"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.1ef9b0c11b0f6670af4d.js",
    "revision": "1f44dfb4efc5d82c851ac31fb8d74702"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "85e997ff73f1f3522d4d19f3a9c315e2"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.40f29c2e.json",
    "revision": "1236d15be4764198f3c1a68667140062"
  },
  {
    "url": "/_nuxt/manifest.b33effd468815c14e188.js",
    "revision": "80297a8de351db1ec73e43682b42fcaf"
  },
  {
    "url": "/_nuxt/nuxt.bundle.f760f42367fb4623938f.js",
    "revision": "e6cea7fa6b3ff3e8fcc3260306f509fe"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "c89953c5dc7beada955fbc35f2dcfd95"
  },
  {
    "url": "/_nuxt/vendor.bundle.d5747a7a20a8133a7eec.js",
    "revision": "02addd74378338a41a68743632713653"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "wp-vue-ssr_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
