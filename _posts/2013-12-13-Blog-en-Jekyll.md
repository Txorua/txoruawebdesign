---
layout: post
title: "Blog en Jekyll"
date: "2013-12-13 15:56:15"
categories:
 - jekyll
 - drupal
---

Me he decidido a migrar el blog que tenía con [Drupal 7][drupal] a [Jekyll][jekyll] librándome de esta manera de tener que lidiar con una base de datos y consiguiendo una mejora importante en el redimiento de la página.

Primero he tenido que importar el contenido que tenía ya publicado sigiendo las instrucciones de [Jekyll import][jekyll_import], muy sencillo. Tras repasar los post y realizar alguna pequeña modificación, me he conectado al servidor y he creado un repositorio git. Ya instalé [jekyll en el server][jserver], solo falta preparar un hook de git para cuando quiera publicar los post jekyll regenere el sitio. Está, quizas, ha sido la parte que más me ha costado, pero al final, como casi siempre, [la solución][kristian] es más sencilla de lo que parece. El fichero es el mismo que figura en [Jekyll deployment methods][jdeploy], salvo el [shebang][wikipedia], que producía en un error de comando no encontrado; por lo que lo he cambiado por:

{% highlight bash %}#!/home/user/.rvm/bin/rvm-shell 2.0.0-p247{% endhighlight %}

Ahora en local añado como remoto el repositorio recien creado en el server,

{% highlight bash %}git remote add deploy deployer@example.com:~/myrepo.git{% endhighlight %}

y con hacer

{% highlight bash %}git push deploy master{% endhighlight %}

el blog queda actualizado.


[drupal]: http://drupal.org
[jekyll]: http://jekyllrb.com
[jekyll_import]: http://import.jekyll.com
[jserver]: http://www.txorua.com/2013/09/25/instalar-ruby-con-rvm-sin-privelegios-de-root.html
[jdeploy]: http://jekyllrb.com/docs/deployment-methods/
[wikipedia]: http://es.wikipedia.org/wiki/Shebang
[kristian]: https://kristianfreeman.com/deploying_a_static_site/
