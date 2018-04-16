---
layout: post
title: "Publicar el website con Rakefile y rsync"
date: "2014-09-02 10:37:57"
categories:
 - rsync
 - rake
 - deploy
---

Un método rápido y sencillo de automatizar el deploy del website es utilizar rake, configurando una tarea que use rsync. Ésta se describe en el fichero *Rakefile* de la siguiente manera.

{% highlight vim %}
    desc "Publicar website"
    task :deploy do
      puts "Publicando website..."
      user   = "example"
      server = "example.com"
      path   = "www/"
      sh "rsync -rtzh --delete _site/ #{user}@#{server}:#{path}"
      puts "Website publicado"
    end
{% endhighlight %}

donde *user* es el nombre de usuario en el server, *server* es el servidor y *path* el directorio donde publicar el sitio.

Esta receta de publicación la he encontrando googleando un poco en [Deploying a Jekyll site with a Rakefile](http://blog.grayghostvisuals.com/workflow/deploying-jekyll-with-rake/), donde la explicación del fichero Rakefile es más amplia y además incluye un screencast explicativo.
