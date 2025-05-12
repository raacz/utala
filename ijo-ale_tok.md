---
layout: main
title: ijo ale pi lipu ni
---

# ijo ale pi lipu ni

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



<h2>lipu mute</h2>
<ul>
  {% for page in other_pages %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endfor %}
</ul>

<h2>lipu musi lili</h2>
<ul>

{% assign sorted_pages = site.pages  %}

{% for page in sorted_pages %}
  {% if page.layout == "lipu-main" %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>


<h2>lipu musi suli</h2>
<ul>

{% assign sorted_pages = site.pages  %}

{% for page in sorted_pages %}
  {% if page.layout == "lipu" %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>

<h2>lipu pi toki Inli</h2>
<ul lang="en">
  {% for page in english_pages %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endfor %}
</ul>