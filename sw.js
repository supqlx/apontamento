self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('apontamento-cache').then((cache) => {
      return cache.addAll([
        './index.html',
        './relatorio.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
