const CACHE_NAME = 'canning-house-v1';
const ASSETS = [
  '/','/index.html','/manifest.json',
  '/images/hero.jpg','/images/starters.jpg','/images/brunch.jpg',
  '/images/salads.jpg','/images/burgers.jpg','/images/sandos.jpg','/images/sides.jpg',
  '/images/crabby-fries.jpg','/images/mozz-moons.jpg','/images/brulee-pbj.jpg',
  '/images/salmon-toast.jpg','/images/chicken-waffles.jpg','/images/griddle-sando.jpg',
  '/images/berry-brunch.jpg','/images/brunch-burger.jpg','/images/salmon-salad.jpg',
  '/images/reuben.jpg','/images/hot-honey-chicken.jpg','/images/grilled-cheese.jpg',
  '/images/crabby-grilled-cheese.jpg','/images/truffle-mac.jpg','/images/truffle-fries.jpg',
  '/icons/icon-192x192.png','/icons/icon-512x512.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
    if (!res || res.status !== 200 || res.type !== 'basic') return res;
    const clone = res.clone();
    caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
    return res;
  }).catch(() => e.request.mode === 'navigate' ? caches.match('/index.html') : undefined)));
});
