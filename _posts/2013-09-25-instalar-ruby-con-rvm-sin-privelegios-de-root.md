---
layout: post
title: Instalar ruby con rvm sin privelegios de root
created: 1380116553
categories:
 - ruby
 - rvm
---
Si quieres instalar ruby con [rvm][rvm] en un entorno donde careces de privilegios de superusuario, como puede ser un hosting, debes debes deasativar *autolibs*:

{% highlight bash %}
$ rvm autolibs disable
$ rvm requirements
$ rvm install ruby
{% endhighlight %}

vía [How to install RVM system requirements without giving sudo for rvm user][stackoverflow].


[rvm]: http://rvm.io
[stackoverflow]: http://stackoverflow.com/a/17219765
