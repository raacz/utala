---
layout: lipu-main
title: lipu lili ale pi sike#MAML
---

<section class="frontmatter container-in-main" markdown="1">

# lipu musi lili

{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'maml/lipu-musi/lipu-suli/'" %}

{% for page in lipu_pages %}
  <h2>{{ page.title }}</h2>
  {{ page.content }}
  <hr>
{% endfor %}


</section>
<section class="content" markdown="1">
{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'maml/lipu-musi/lipu-lili/'" %}

{% for page in lipu_pages %}
  <h2>{{ page.title }}</h2>
  {{ page.content }}
  <hr>
{% endfor %}
</section>