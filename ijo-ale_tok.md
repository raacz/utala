---
layout: main
---
<ul>
{% assign sorted_pages = site.pages  %}

{% for page in sorted_pages %}
  {% if page.layout == "main" %}
    <li>
      <a href="{{ page.url }}">{{ page.data.title }}</a>
    </li>
  {% endif %}
{% endfor %}

{% assign sorted_pages = site.pages  %}

{% for page in sorted_pages %}
  {% if page.layout == "lipu" %}
    <li>
      <a href="{{ page.url }}">{{ page.nimi_lipu }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>