---
layout: post
title: RVM y Compass en Xubuntu 12.04
created: 1340703436
categories:
 - ruby
 - rvm
 - compass
 - ubuntu
---
Para la instalación de **rvm** y **compass** he seguido los siguientes pasos:

{% highlight bash %}
sudo apt-get install build-essential openssl libreadline6 libreadline6-dev /
curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-dev sqlite3 /
libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev automake libtool bison /
subversion
{% endhighlight %}

{% highlight bash %}
curl -L https://get.rvm.io | bash -s stable --ruby
{% endhighlight %}

Editar .bashrc y añadir la siguiente línea:

{% highlight bash %}
[[ -s "/home/inaki/.rvm/scripts/rvm" ]] && source "/home/inaki/.rvm/scripts/rvm"  # This loads RVM into a shell session.
{% endhighlight %}

Para solucionar un error con las gemas:

via: [Compass gem throwing error][stackoverflow].

{% highlight bash %}
rubygems-bundler-uninstaller
{% endhighlight %}

{% highlight bash %}
gem install compass
{% endhighlight %}


Más información en la [página oficial de **rvm**][rvm] y en [la página de **Compass**][compass].

[stackoverflow]: http://stackoverflow.com/questions/10659662/compass-gem-throwing-error
[rvm]: http://rvm.io/
[compass]: http://compass.style.org/
