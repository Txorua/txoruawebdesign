(function () {
  const version = 'V0.37'
  const staticCacheName = version + 'staticfiles'
  const imageCacheName = 'images'
  const cacheList = [
    staticCacheName,
    imageCacheName
  ]

  // Install Event
  addEventListener('install', installEvent => {
    console.log('The service worker is installing...')
    skipWaiting()
    installEvent.waitUntil(
      caches.open(staticCacheName)
      .then( staticCache => {
        //non-blocking files
        staticCache.addAll([])
        // Must be cached
        return staticCache.addAll([
          '/assets/main.css',
          '/assets/js/main.js',
          '/offline.html'
        ])
      })
    )
  })

  // Active Event
  addEventListener('activate', activateEvent => {
    activateEvent.waitUntil(
      caches.keys()
      .then( cacheNames => {
        return Promise.all(
          cacheNames.map( cacheName => {
            if (!cacheList.includes(cacheName)) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then( () => {
        return clients.claim()
      })
    )
  })

  addEventListener('fetch', event => {
    event.respondWith(async function() {
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      const responseFromFetch = await fetch(event.request);
      if (responseFromFetch) {
        const copy = responseFromFetch.clone()
        const cacheName = event.request.headers.get('Accept').includes('image') ? imageCacheName : staticCacheName
        caches.open(cacheName)
        .then(cache => {
          cache.put(event.request, copy)
        })
          
        return responseFromFetch
      };
      
    }());
  });

}())


/*
    fetchEvent.respondWith(
      caches.match(request)
      .then (responseFromCache => {
        if (responseFromCache) {
          return responseFromCache
        }

        console.log("Not Cached!!")

        fetch(request)
        .then ( responseFromFetch => {
          const copy = responseFromFetch.clone()
          const cacheName = request.headers.get('Accept').includes('image') ? imageCacheName : staticCacheName
          caches.open(cacheName)
          .then( cache => {
            cache.put(request, copy)
            return responseFromFetch
          })
        })
        .catch (error =>  {
          return caches.match('/offline.html')
        })
      }) 
    )
    */