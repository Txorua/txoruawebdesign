const version = 'V0.03'
const staticCacheName = version + 'staticfiles'

// Install Event
addEventListener('install', installEvent => {
  console.log('The service worker is installing...')
  skipWaiting()
  installEvent.waitUntil(
    caches.open(staticCacheName)
    .then( staticCache => {
      return staticCache.addAll([
        '/assets/main.css',
        '/assets/js/main.js'
      ])
    })
  )
})

// Active Event
addEventListener('activate', activateEvent => {
  activateEvent.waitUntil(
    caches-keys()
    .then( cacheNames => {
      return Promise.all(
        cacheNames.map( cacheName => {
          if (cacheName != staticCacheName) {
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
  fetchEvent.respondWith(
    caches.match(request)
      .then(responseFromCache => {
        if (responseFromCache !== undefined) {
          return responseFromCache
        }
        return fetch(request)
      })
  )
})
