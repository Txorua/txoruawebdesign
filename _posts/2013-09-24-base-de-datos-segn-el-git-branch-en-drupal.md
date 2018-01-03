---
layout: post
title: Base de datos según el Git Branch en Drupal
created: 1380022843
categories:
 - git
 - drupal
 - base de datos
---
Desarrollando sitios con Drupal, a menudo, pruebas módulos que modifican la estructura de la base de datos y si quieres utilizar un sistema de  control de versiones como Git, te encuentras con que la base de datos no está en sintonía con las distintas ramas. La solución parece obvia: utilizar bases de datos para cada distinta rama de desarrollo. Después de mucho buscar, creo que di con la solución: [Automatically Change Database Based on the Git Branch][foggy].

Basicamente incluye un código al final del settings.php que consulta la rama en la que estamos y elige la base de datos en consecuencia.

[foggy]: http://foggyperspective.com/article/automatically-change-database-based-git-branch
