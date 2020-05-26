(function () {
  const version = 'V0.08'
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

  // Fetch Event
  addEventListener('fetch', fetchEvent => {
    console.log('The service worker is listening.')
    const request = fetchEvent.request

    // User request image
    if (request.headers.get('Accept').includes('image')) {
      fetchEvent.respondWith(
        caches.match(request)
        .then( responseFromCache => {
          if (responseFromCache) {
            return responseFromCache
          }
          return fetch(request)
          .then( responseFromFetch => {
            const copy = responseFromFetch.clone()
            fetchEvent.waitUntil(
              caches.open(imageCacheName)
              .then( imageCache => {
                imageCache.put(request, copy)
              })
            )
            return responseFromFetch
          })
        })
      )
      return
    }
    
    fetchEvent.respondWith(
      caches.match(request)
      .then (responseFromCache => {
        if (responseFromCache) {
          return responseFromCache
        }
        return fetch(request)
        .then ( responseFromFetch => {
          const copy = responseFromFetch.clone()
          fetch.waitUntil(
            caches.open(staticCacheName)
            .then( staticCache => {
              staticCacheName.put(request, copy)
            })
          )
          return responseFromFetch
        })
      }) 
    )
    
  })
}())
