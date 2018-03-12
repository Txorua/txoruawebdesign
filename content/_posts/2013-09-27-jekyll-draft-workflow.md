---
layout: post
title: Jekyll Draft Workflow
created: 1380289968
categories:
 - jekyll
---
Simple plugin para [Jekyll][jekyll] para crear un workflow que permite tener borradores y publicarlos cuando gustes.
Te bajas [el plugin][git] y lo guardas en la carpeta

{% highlight bash %}
    \_plugins
{% endhighlight %}

creas las carpetas

{% highlight bash %}
    \_drafts
{% endhighlight %}

y

{% highlight bash %}
    \_plublish
{% endhighlight %}

y ya está.

Ahora solo has de crear tus posts en la carperta

{% highlight bash %}
    \_drafts
{% endhighlight %}

sin necesidad de prefijar el archivo con la fecha; cuando hayas terminado y desees publicarlo, lo mueves a la carperta

{% highlight bash %}
    \_publish
{% endhighlight %}

y el plugin se encarga se renombrar el archivo prefijandolo con la fecha de publicación y moverlo a la carpeta

{% highlight bash %}
    \_posts
{% endhighlight %}.

A los borradores debes de incluirles en la cabecera una etiqueta

{% highlight yaml %}
    date: unpublished
{% endhighlight %}

y una vez publicado el plugin lo sustituirá con el <span lang="en">timestamp</span> de la publicación.

Para una mejor explicación visitar [la página del autor][js] del plugin.

[jekyll]: http://jekyllrb.com
[git]: https://gist.github.com/4689219
[js]: http://jeffreysambells.com/2013/02/01/jekyll-draft-publishing-plugin
