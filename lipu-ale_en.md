---
layout: main
title: All Documents
---

# All Big Documents 

In this page you can look at all of the documents using these methods:
- [With TP summaries](#learn-what-the-document-is-about)
- [With document length](#documents-with-lots-of-words-are-at-the-top-documents-with-few-words-are-at-the-bottom)

## Learn what the document is about

<ul lang="tok" role="list" class="ijo-mute">
    {% for page in site.pages %}
  {% if page.layout == "lipu" %}
    <li>
    <a href="{{ page.url }}">{{ page.title }}</a> 
     <span><span lang="en">by</span> {{page.jan_pali}}</span>
     <span>{{ page.ijo_toki }}</span>
    </li>
  {% endif %}
{% endfor %}
</ul>

## Documents with lots of words are at the top. Documents with few words are at the bottom.
<ul lang="tok">
  {% assign sorted_pages = site.pages | sort: "mute_nimi" | reverse %} 
  {% for page in sorted_pages %}
  {% if page.layout == "lipu" %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>, <span lang="en">by {{ page.jan_pali }}. Words: </span>{{ page.mute_nimi }}
    </li>
  {% endif %}
{% endfor %}
</ul>

