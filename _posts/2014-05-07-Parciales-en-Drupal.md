---
layout: post
title: "Parciales en Drupal"
date: "2014-05-07"
categories:
 - drupal
---

Recientemente me he encontrando repitiendo código html en un proyecto con Drupal y sabía que en frameworks como Jekyll se hace un uso de las parciales; en Drupal existen las templates pero son para las páginas o tipos de contenido. Para incluir un parcial de HTML he utilizado la función:

{% highlight php %}
  <?php
    theme_render_template($template_file, $variables);
  ?>
{% endhighlight %}

Así, si tenemos el siguiente código:

{% highlight html %}
  <ul>
    <li>GNU</li>
    <li>GPL</li>
    <li>Arduino</li>
    <li>Processing</li>
  </ul>
{% endhighlight %}

en la template que queramos incluirla pondremos:

{% highlight php %}
  <?php
    print theme_render_template('/path/to/partial/', $vars = array());
  ?>
{% endhighlight %}

