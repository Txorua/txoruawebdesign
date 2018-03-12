---
layout: post
title: Quickstart en GNU/Debian 6
created: 1331471234
categories:
 - drupal
 - debian
 - quickstart
---
Instalación de **quickstart** con **GNU/Debian 6**:

1. Instalación del sistema base.
2. Instalación de git.
3. Instalación de Vim.
4. Instalación de configuración de Vim.
5. Descarga de quickstart.
git clone --branch master http://git.drupal.org/project/quickstart.git
6. Instalación de quickstart-prep.
7. Instalación de quickstart-1a-guest.
8. Instalación de quickstart-3-lamp.
9. Instalación de quickstart-6-dev.

Después de crear un sitio con:

{% highlight bash %}
    $ drush qc --domain=misitio.dev --profile=minimal
{% endhighlight %}

Hay que recargar squid3 con:

{% highlight bash %}
    $ sudo service squid3 reload
{% endhighlight %}

[Documentación de Quickstart][drupal]

[drupal]: http://drupal.org/node/788080
