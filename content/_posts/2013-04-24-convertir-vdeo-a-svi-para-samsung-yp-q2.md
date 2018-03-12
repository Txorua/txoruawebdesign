---
layout: post
title: Convertir vídeo a svi para Samsung YP-Q2
created: 1366795937
categories:
 - mplayer
 - video
---
Tras muchos intentos infructuosos de convertir un archivo de vídeo al formato svi para el reproductor Samsung YP-Q2, encontré la respuesta en este foro: [Transcode/encode video for Samsung YP-Q2][ubuntu].

Con las siguientes órdenes desde la línea de comandos se obra el milagro ;)

{% highlight bash %}
    $ mencoder entrada.mp4 -o salida.avi -ovc lavc -lavcopts vcodec=mpeg4 -vf scale=320:240,crop=320:240 -mf fps=25 -oac mp3lame -lameopts cbr:br=128
    $ mv salida.avi salida.svi
{% endhighlight %}

[ubuntu]: http://ubuntuforums.org/showthread.php?t=1346980
