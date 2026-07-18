---
layout: main
title: utala musi pi sike#MAMLW
---


# utala musi lipu pi sike #MAML: tenpo pi lukin lipu li lon!

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

### pi sitelen namako
- [seme li weka e kiwen mani](lipu-nimi-suli-sitelen/seme-li-weka-e-kiwen-mani/index.html)
- [o kule e lipu](lipu-nimi-suli-sitelen/o-kule-e-lipu/index.html)
