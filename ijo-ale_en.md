---
layout: main
title: Site Map
---


# Site Map

{% assign english_pages = "" | split: "" %}
{% assign other_pages = "" | split: "" %}

{% for page in site.pages %}
  {% if page.layout == "main" %}
    {% if page.url contains '_en' %}
      {% assign english_pages = english_pages | push: page %}
    {% else %}
      {% assign other_pages = other_pages | push: page %}
    {% endif %}
  {% endif %}
{% endfor %}

<h2>Pages in English</h2>
<ul lang="en">
  {% for page in english_pages %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endfor %}
</ul>



<h2>General Pages in Toki Pona</h2>
<ul lang="tok">
  {% for page in other_pages %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endfor %}
</ul>

<h2>Small Amusing Documents</h2>
<ul lang="tok">

{% assign sorted_pages = site.pages  %}

{% for page in sorted_pages %}
  {% if page.layout == "lipu-main" %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>


<h2>Big Amusing Documents</h2>
<ul lang="tok">

{% assign sorted_pages = site.pages  %}

{% for page in sorted_pages %}
  {% if page.layout == "lipu" %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>

