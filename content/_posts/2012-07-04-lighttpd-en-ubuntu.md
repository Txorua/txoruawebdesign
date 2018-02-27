---
layout: post
title: Lighttpd en Ubuntu
created: 1341395328
categories:
 - lighttpd
 - ubuntu
---
Instalación de **lighttpd** en **Ubuntu**:

{% highlight bash %}
$ sudo apt-get install lighttpd php5-cgi php5-cli php5-common php5-gd php5-sqlite php5-dev php5-intl php-apc make
$ sudo lighty-enable-mod fastcgi userdir fastcgi-php
{% endhighlight %}

Editar el archivo *php.ini* y poner

{% highlight bash %}
$ short_open_tag = off
$ date.timezone = Europe/Madrid
{% endhighlight %}

He editado tanto el php.ini en */etc/php5/cgi* como el de */etc/php5/cli*.

{% highlight bash %}
$ sudo service lighttpd force-reload
{% endhighlight %}

vía: [Moeblog][moeblog] y las indicaciones del configurador de [Symfony][symfony].

[moeblog]: http://blog.etxea.net/index.php/2008/04/09/entorno-personal-ligero-de-desarrollo-web-ubuntulighttpdphpsqlitesymfony
[symfony]: http://symfony.com
