---
layout: lipu-main
title: lipu lili ale pi sike#MAML
---

<section class="frontmatter container-in-main" markdown="1">

# lipu musi lili

## lipu suli
- [akesi li moku e suno](lipu-suli/akesi-li-moku-e-suno.html)
- [kon en jan](lipu-suli/kon-en-jan.html)
- [meli tu pi lawa ante](lipu-suli/meli-tu-pi-lawa-ante.html)
- [nimi len](lipu-suli/nimi-len.html)
- [pakala mani](lipu-suli/pakala-mani.html)
- [sitelen kiwen](lipu-suli/sitelen-kiwen.html)
- [tenpo o pona](lipu-suli/tenpo-o-pona.html)
- [utala insa](lipu-suli/utala-insa.html)

<!--
{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'maml/lipu-musi/lipu-suli/'" %}

{% for page in lipu_pages %}
  <h2>{{ page.title }}</h2>
  {{ page.content }}
  <hr>
{% endfor %}

-->
</section>
<section class="content" markdown="1">
{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'maml/lipu-musi/lipu-lili/'" %}

{% for page in lipu_pages %}
  <h2>{{ page.title }}</h2>
  {{ page.content }}
  <hr>
{% endfor %}
</section>