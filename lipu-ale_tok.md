---
layout: main
title: lipu ale
---

# lipu suli ale 

lon lipu ni la sina ken lukin e lipu ale kepeken nasin mute.

- [o lukin e ijo toki](#o-kama-sona-e-ni-lipu-li-toki-e-seme)
- [o lukin e suli lipu](#lipu-pi-nimi-lili-li-lon-anpa-lipu-pi-nimi-mute-li-lon-sewi)

## o kama sona e ni: lipu li toki e seme

<ul role="list" class="ijo-mute">
    {% for page in site.pages %}
  {% if page.layout == "lipu" %}
    <li>
    <a href="{{ page.url }}">{{ page.title }}</a> 
     <span>tan {{page.jan_pali}}</span>
     <span>{{ page.ijo_toki }}</span>
    </li>
  {% endif %}
{% endfor %}
</ul>

## lipu pi nimi lili li lon anpa. lipu pi nimi mute li lon sewi.
<ul role="list">
  {% assign sorted_pages = site.pages | sort: "mute_nimi" | reverse %} 
  {% for page in sorted_pages %}
  {% if page.layout == "lipu" %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>, tan {{ page.jan_pali }}. mute nimi: {{ page.mute_nimi }}
    </li>
  {% endif %}
{% endfor %}
</ul>

