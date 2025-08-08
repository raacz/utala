---
layout: main
title: lipu suli | lipu musi pi sike#MAML
---

# lipu suli | utala lipu pi sike #MAML

[o tawa utala](/index.html)

lipu suli mute li lon. 

lon lipu ni la sina ken lukin e lipu suli ale pi utala ni kepeken nasin tu wan.

- [nimi lipu li taso](#nimi)
- [o lukin e ijo toki](#ijo-toki)
- [o lukin e suli lipu](#suli-lipu)

{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'maml/lipu-musi/lipu-suli/'" | where_exp: "page", "page.layout != 'main'" %}


<hr>

<h2 id="nimi">nimi lipu taso</h2>

<ul>
{% for page in lipu_pages %}
    <li>
    <a href="{{ page.url }}">{{ page.title }}</a> 

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
     <span>{{ page.suli_lipu}}</span>
     <span>{{ page.ijo_toki }}</span>
    </li>
{% endfor %}
</ul>

<hr>

{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'maml/lipu-musi/lipu-suli/'" | where_exp: "page", "page.layout != 'main'" | sort: "mute_nimi" | reverse %}

<h2 id="suli-lipu">lipu li suli seme?</h2>

<ul>
{% for page in lipu_pages %}
    <li>
        <a href="{{ page.url }}">{{ page.title }}</a>,  {{ page.suli_lipu }}
       </li>
{% endfor %}
</ul>
