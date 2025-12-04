const CACHE_NAME = 'gamehub-v1';
const ASSETS = [
  '.', 'index.html', 'apps.js'
];
// install
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)));
  self.skipWaiting();
});
// activate
self.addEventListener('activate', e=>{
  e.waitUntil(self.clients.claim());
});
// fetch
self.addEventListener('fetch', e=>{
  if(e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(r=> r || fetch(e.request).then(resp=>{
      // cache strategy: cache new GET requests (fallback)
      return caches.open(CACHE_NAME).then(cache=>{
        try{ cache.put(e.request, resp.clone()); }catch(e){}
        return resp;
      });
    }).catch(()=>caches.match('index.html')))
  );
});
