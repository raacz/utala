---
layout: main
title: utala musi pi sike#MAMLW
---


# utala musi lipu pi sike #MAMLW: tenpo pi lukin lipu li lon!

[lipu nimi lili](lipu-nimi-lili)

## lipu nimi suli 

<ul class="work" role="list">
  {% assign sorted_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-suli/'" %} 
  {% for page in sorted_pages %}
  {% if page.layout == "lipu" %}
    <li>
      <a href="{{ page.url }}">{{ page.title }} </a> 
    </li>
  {% endif %}
{% endfor %}
</ul>


## lipu nimi suli pi sitelen namako

<ul class="work" role="list">
  {% assign sorted_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-suli-sitelen/'" %} 
  {% for page in sorted_pages %}
  {% if page.layout == "lipu" %}
    <li>
      <a href="{{ page.url }}">{{ page.title }} </a> 
    </li>
  {% endif %}
{% endfor %}
</ul>

## lipu nimi lili 

{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-lili/ale'" | where_exp: "page", "page.path contains '.md' or page.path contains '.html'" | where_exp: "page", "page.template == nil or page.template == blank" %}

<ul role="list" class="nimi-pi-lipu-lili">
    {% for page in lipu_pages %}
    {% assign stripped_title = page.title | replace: " ", "-"  | replace: '"', ' %}

<li><a href="lipu-nimi-lili/index.html#{{ stripped_title }}">{{ page.title }}</a></li>
        {% endfor %}
</ul>

## lipu sitelen lili 

{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-sitelen-lili/'" | where_exp: "page", "page.path contains '.md' or page.path contains '.html'" | where_exp: "page", "page.template == nil or page.template == blank" | where_exp: "page", "page.hub == blank or page.hub == nil" | sort: "title" %}

<ul role="list" class="nimi-pi-lipu-lili">
    {% for page in lipu_pages %}
    {% assign stripped_title = page.title | replace: " ", "-" | replace: '"', ' '%}

<li><a href="{{ page.url }}">{{ page.title }}</a></li>
        {% endfor %}
</ul>
