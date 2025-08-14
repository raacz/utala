---
layout: lipu-main
title: lipu lili | lipu musi pi sike#MAML
---

<section class="frontmatter container-in-main" markdown="1">


# lipu lili | utala lipu pi sike#MAML

[o tawa utala](/index.html)


<hr>

{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'maml/lipu-musi/lipu-lili/'" | where_exp: "page", "page.path contains '.md' or page.path contains '.html'" | where_exp: "page", "page.layout == nil or page.layout == blank" %}


<style>
    .nimi-pi-lipu-lili{
        gap: 1em;
        list-style: circle;
    }
    main h2{
      padding-block-end: 0;
    }
    .nimi-jan{
      margin-block-end: 0.5em;
      font-size: 0.9em;
    }
    
</style>

<ul role="list" class="nimi-pi-lipu-lili">
{% for page in lipu_pages %}
    {% assign stripped_title = page.title | replace: " ", "-" %}

  <li><a href="#{{ stripped_title }}">{{ page.title }}</a>, tan {{ page.jan_pali }}</li>
{% endfor %}
</ul>






</section>
<section class="content" markdown="1">

{% for page in lipu_pages %}
    {% assign stripped_title = page.title | replace: " ", "-" %}
  <h2 tabindex="-1" id="{{ stripped_title }}">{{ page.title }}</h2>
  <em class="nimi-jan">tan {{ page.jan_pali }}</em>

  {{ page.content }}
  <hr>
{% endfor %}
</section>
