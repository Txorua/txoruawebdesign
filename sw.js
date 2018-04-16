---
layout: null
---
var urlsToCache = [];

// Cache assets
{% for asset in site.static_files %}
    {% if asset.path contains '/assets/images' %}
    urlsToCache.push("{{ file.path }}")
    {% endif %}
{% endfor %}

// Cache posts
{% for post in site.posts %}
  urlsToCache.push("{{ post.url }}")
{% endfor %}

// Cache pages
{% for page in site.html_pages %}
  urlsToCache.push("{{ page.url }}")
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
