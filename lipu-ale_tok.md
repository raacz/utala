---
layout: main
title: lipu ale
---

<h1>lipu ale</h1>
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
<h2>lipu pi utala musi la nasin PDF en nasin EPUB li lon!</h2>
<figure>
<img alt="book cover" src="sinpin_lipu.png">
<div></div>
<figcaption>
<p>tenpo ni la, o lukin e lipu musi ale tan<strong> utala musi pi tenpo sike #MAML </strong> lon lipu pi nasin PDF, lon lipu pi nasin EPUB a.</p>
<ul><li>o lukin e lipu pi sin nanpa wan
<ul><li><a href="https://raw.githubusercontent.com/raacz/utala-pdf-epub/main/typ/output.pdf
"> kepeken nasin PDF</a></li>
<li><a href="https://raw.githubusercontent.com/raacz/utala-pdf-epub/main/output.epub
">kepeken nasin EPUB</a></li></ul></li>
<li>o lukin <a href="https://github.com/raacz/utala-maml-pdf-epub/blob/main/versions.yaml">e pali sin ale pi lipu ni</a> lon ilo Kita</li>
</ul>
<p>sina wile ante e ijo lon lipu tu ni (tan pakala mi, tan wile ante pi lipu sina, tan sona nasin)  la o toki tawa <a href="mailto:tokipona.sasalin@gmail.com">jan Lakuse</a>.</p>
</figcaption>

</figure>

</div>
<hr>


<h2>lipu suli ale</h2>

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

