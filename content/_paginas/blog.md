---
title: Blog
layout: page
permalink: /blog
heading: 'Ideas, escritos y recetas'
intro: >-
  Escribo sobre desarrollo web, temas relacionados con el software libre y
  recetas de código.También sobre mis hobbies.
---
{% assign posts = site.posts %}
{% for post in posts %}
- [{{ post.title }}]({{ post.url }}) &bull; {{ post.date | date: '%d-%m-%Y' }}
{% endfor %}

{% assign igs = site.data.instagram %}
<div style="display: flex; flex-wrap: wrap;">
{% for ig in igs %}
<div style="padding: 0.5rem">
<img src="{{ site.baseurl }}/{{ ig.localImageURL }}">
<div>{{ ig.caption | markdownify }}</div>
</div>
{% endfor %}
</div>