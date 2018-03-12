---
layout: post
title: Problemas con .gitignore
created: 1380201083
categories:
 - git
 - vim
---
Trasteando con [jekyll][jekyll] me he topado con un problema que estaba empezando a causarme un dolor de cabeza. El caso que el fichero .gitignore del proyecto no funcionaba si tenía más de una línea lo cual es un problemón. El problema era que el final de línea no era correcto, no se el motivo, tal vez la última actualización de [LMDE][mint], no lo se.

La solución si usas vim

{% highlight vim %}
    :set ff=unix
{% endhighlight %}

Vía [.gitignore file not ignoring][stackoverflow].

[jekyll]: http://jekyllrb.com
[mint]: http://www.linuxmint.com
[stackoverflow]: http://stackoverflow.com/a/9531213
