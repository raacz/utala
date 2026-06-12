---
layout: main
title: All Documents
---

# All Documents
<style>
  .pdf {
    figure{
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 0.5em;
      img {
        max-width: 9em;
        border: 0.1em solid var(--walo);
      }
    }
    ul {
      text-wrap: balance;
      padding-left: 1em;
    }
  }
  @media (max-width: 35em){
    .pdf figure {
      grid-template-columns: 1fr;
      justify-items: center;
    }

  }
</style>


<div class="pdf">
<h2>Digital PDF and EPUB release!</h2>
<figure>
<img alt="book cover" src="sinpin_lipu.png">
<div></div>
<figcaption>
<p><strong> utala musi 2025 </strong> is now downloadable as a digital PDF and EPUB.</p>
<ul><li>Download the <a href="https://raw.githubusercontent.com/raacz/utala-pdf-epub/main/typ/output.pdf
">latest PDF.</a></li>
<li>Download the <a href="https://raw.githubusercontent.com/raacz/utala-pdf-epub/main/output.epub
">latest EPUB.</a></li>
<li>View <a href="https://github.com/raacz/utala-maml-pdf-epub/blob/main/versions.yaml">version history</a> on GitHub</li>
</ul>
<p>If you have feedback, or if you are a participant that would like to make changes to your work as it is presented in these releases, please contact  <a href="mailto:tokipona.sasalin@gmail.com">jan Lakuse</a>.</p>
</figcaption>

</figure>

</div>
<hr>


<h2>Large Documents</h2>


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

