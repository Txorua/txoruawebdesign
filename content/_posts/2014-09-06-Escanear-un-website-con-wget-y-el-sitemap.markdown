---
title: 'Escanear un website con wget y el sitemap'
layout: post
date: "2014-09-06 13:56:32"
categories:
 - cli
---

Comando para escanear un website usando [wget][wget] y el [sitemap.xml][sitemaps] del mismo sitio. A mi me resulta útil porque uso [boost][boost] en [Drupal][drupal] para servir las páginas cacheadas pero éstas son generadas por el primer usuario anónimo que las visitas; de esta manera, me aseguro de que estén ya generadas.

{% highlight bash %}
    $ wget --quiet http://www.example.com/sitemap.xml --output-document - | egrep -o "http://www\.example\.com[^<]+" | wget --spider -i - --wait 1
{% endhighlight %}

Visto en [www.wezm.net][wezm]

[drupal]: https://www.drupal.org
[boost]: https://www.drupal.org/project/boost
[wget]: https://www.gnu.org/software/wget/
[sitemaps]: http://www.sitemaps.org/
[wezm]: http://www.wezm.net/technical/2009/05/spider-a-site-with-wget-using-sitemap-xml/
