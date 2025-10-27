self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("vehicle-manager-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./fuel.html",
        "./service.html",
        "./report.html",
        "./docs.html",
        "./drivingrules.pdf",
        "./FuelTracker.png",
        "./maa.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
