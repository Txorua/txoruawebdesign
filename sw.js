---
layout: null
---
var urlsToCache = [];

// Cache assets
{% assign cache_images = site.static_files | where: 'cache', true %}
{% for asset in cache_images %}
  urlsToCache.push("{{ asset.path }}")
  console.log("{{ asset.path }}")
{% endfor %}

// Cache posts
{% for post in site.posts %}
  urlsToCache.push("{{ post.url }}")
{% endfor %}

// Cache pages
{% for page in site.paginas %}
  urlsToCache.push("{{ page.permalink }}")
  console.log("{{ page.permalink }}")
{% endfor %}


self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v2').then(function (cache) {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    if (response !== undefined) {
      return response
    } else {
      return fetch(event.request).then(function (response) {
        let responseClone = response.clone()
        caches.open('v2').then(function (cache) {
          cache.put(event.request, responseClone)
        })
        return response
      }).catch(function () {
        return caches.match('')
      })
    }
  }))
})
