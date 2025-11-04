self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("vehicle-manager-cache-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./FuelTracker.png",
        "./vehicle.html"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
