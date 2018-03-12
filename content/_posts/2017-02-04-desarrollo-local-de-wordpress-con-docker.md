---
title: Desarrolo local de Wordpress con Docker
layout: post
created: 2017-02-04
categories:
  - wordpress
  - docker
---

Esta receta para trabajar con Wordpress en local está basada en la que se encuentra en ls [documentación oficial de Docker](https://docs.docker.com/compose/wordpress/) pero con unas ligeras modificaciones. Usando la original no consigo que los datos y las modificaciones hechas al sitio persistan. Después de unas cuantas búsquedas he terminado con el siguiente archivo *docker-compose.yml*:

{% highlight yaml %}
    version: '2'

    services:
      mysql:
        image: mysql:5.7
        restart: always
        volumes:
          - ./BBDD/mysql:/var/lib/mysql
        environment:
          MYSQL_ROOT_PASSWORD: wordpress
          MYSQL_DATABASE: wordpress
          MYSQL_USER: wordpress
          MYSQL_PASSWORD: wordpress

      wordpress:
        depends_on:
          - mysql
        image: wordpress:latest
        ports:
          - "8000:80"
        restart: always
        volumes:
          - ./wordpress:/var/www/html
        environment:
          WORDPRESS_DB_HOST: mysql:3306
          WORDPRESS_DB_PASSWORD: wordpress
{% endhighlight %}

Creamos una carpeta nueva y, en ella, creamos el archivo *docker-compose.yml*, tal y como aparece arriba. También creamos las carpetas *BBDD* y *wordpress* que contendrán la base de datos y la instalación de Wordpress. Ahora ejecutamos el siguiente comando desde una terminal:

{% highlight bash %}
    $ docker-compose up -d
{% endhighlight %}

y sequimos los pasos de la instalación. Cuando hallamos terminado de trabajar en el sitio ejecutamos:

{% highlight bash %}
    $ docker-compose down
{% endhighlight %}

Con esta sencilla receta tendremos una instalación de Wordpress lista en pocos minutos.
