---
layout: lipu-main
title: lipu lili | lipu musi pi sike#MAML
---

<section class="frontmatter container-in-main" markdown="1">


# lipu lili | utala lipu pi sike#MAML

[o tawa utala](/tenpo-ni_tok.html)


<hr>

{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'maml/lipu-musi/lipu-lili/'" | where_exp: "page", "page.path contains '.md' or page.path contains '.html'" | where_exp: "page", "page.layout == nil or page.layout == blank" %}


<style>
    .nimi-pi-lipu-lili{
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        list-style: circle;


    }
</style>

<ul role="list" class="nimi-pi-lipu-lili">
{% for page in lipu_pages %}
    {% assign stripped_title = page.title | replace: " ", "-" %}

  <li><a href="#{{ stripped_title }}">{{ page.title }}</a></li>
{% endfor %}
</ul>






</section>
<section class="content" markdown="1">

{% for page in lipu_pages %}
    {% assign stripped_title = page.title | replace: " ", "-" %}
  <h2 tabindex="-1" id="{{ stripped_title }}">{{ page.title }}</h2>
  {{ page.content }}
  <hr>
{% endfor %}
</section>