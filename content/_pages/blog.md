---
title: Blog
layout: page
permalink: /blog
intro: >-
  Escribo sobre desarrollo web, temas relacionados con el software libre y
  recetas de código.También sobre mis hobbies.
---
{% assign posts = site.posts %}
{% for post in posts %}
- [{{ post.title }}]({{ post.url }})
   {{ post.excerpt }}
{% endfor %}
