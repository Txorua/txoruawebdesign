---
layout: post
title: "WiFi solo funciona tras resumir"
date: "2014-04-12 17:30:10"
categories:
 - hardware
 - wifi
 - linux mint
---

Me he hecho con un portátil Asus i5 X552C y he instalado Linux Mint 16; todo perfecto salvo una pequeña molestia, la WiFi.

Resulta que al encender no levanta la interfaz y no soy capaz de hacerlo de ninguna de las manera. La tarjeta la detecta pero parece que hay un &laquo;Hard Block&raquo; sobre ella y el switch de wifi (alt-f2) no funciona. Sorprendentemente, si resumo el portátil y lo vuelvo a enceder, la WiFi funciona.
 
Todos los post que he visto dicen de hacer

{% highlight bash %}sudo rfkill unblock all{% endhighlight %}

pero nada de nada. Al final he encontrado uno que ha solucionado el asunto. [Karim Ouda] en su blog comenta que puede haber un conflicto con un módulo adional de wifi y, en efecto, lo hay. En mi caso son los módulos *asus-nb-wmi* y *asus-wmi*. Los incluyo en el fichero

{% highlight bash %}/etc/modprobe.d/blacklist.conf{% endhighlight %}

reinicio y tachán.

[Karim Ouda]: http://karim-ouda.blogspot.com.es/2011/11/wifi-now-disabled-by-radio-killswitch.html?showComment=1397312837353#c7626831579031145368

