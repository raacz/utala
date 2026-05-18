---
layout: main
title: lipu suli | lipu musi pi sike#MAML
---

# lipu suli | utala lipu pi sike #MAML

[o tawa utala](/maml/lipu-musi/index.html)


{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'maml/lipu-musi/lipu-suli/'" | where_exp: "page", "page.layout != 'main'" %}


<hr>

<h2 id="nimi">nimi lipu taso</h2>

<ul>
{% for page in lipu_pages %}
    <li>
    <a href="{{ page.url }}">{{ page.title }}</a>, tan {{page.jan_pali}} 
    </li>
{% endfor %}
</ul>

<hr>

{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'maml/lipu-musi/lipu-suli/'" | where_exp: "page", "page.layout != 'main'" %}

<h2 id="ijo-toki">o kama sona e ni: lipu li toki e seme</h2>

<ul class="ijo-mute">
{% for page in lipu_pages %}
    <li>
    <a href="{{ page.url }}">{{ page.title }}</a> 
    <span> {{ page.suli_lipu}}, tan {{ page.jan_pali }}</span>
     <span>{{ page.ijo_toki }}</span>
    </li>
{% endfor %}
</ul>
