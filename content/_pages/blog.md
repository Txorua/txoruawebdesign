---
title: Blog
layout: page
permalink: /blog
---

{% assign posts = site.posts %}
{% for post in posts %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
