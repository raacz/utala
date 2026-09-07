---
layout: main
title: Writing Contest 2026
---


<style>
    .work {
        display: flex;
        flex-wrap: wrap;
        row-gap: 2em;
        justify-content: space-between;
    }
    .work li {
        display: grid;
        grid-template-columns: 8em;
        align-items: end;
        grid-template-rows: minmax(2em, max-content) 1fr auto;
        text-align: center;
        margin: 0;
    }
    .work a {
        align-self: start;
        display: block;
        overflow-x: clip;
        padding-bottom: 0.5em;
    }
    .work .jan-pali {
        min-height: 2em;
        line-height: 1em;
    }
    .prize::before{
         box-shadow: 0 0 0  0.2em var(--loje-laso);
         display: block;
         position: absolute;
         content: '';
         width: 110%;
         height: 120%;
         z-index: 2;
         left: -0.5em;
         border-radius: 0.4em;
         text-align: left;    
    }
     .prize.w::before{
        background-color: rgba(255, 204, 0, 20%);
        content: "🥇" ;
    
    }
    .prize.t::before{
        background-color: rgba(94, 93, 92, 20%);
        content: "🥈";

    }
    .prize.tw::before{
        background-color: rgba(222, 125, 40, 20%);
         content: "🥉";
    }

    .prize.w::before{
    }
    .prize {
        position: relative;
    }
    .prize .jan-pali{
        z-index: 3;
    }
    .prize a{
        z-index: 3;

    }

    .nanpa-wan-a{
        display: flex;
        flex-wrap: wrap;
        row-gap: 1em;
        justify-content: space-evenly;
        margin-block-end: 2em;
    }
    .nanpa-wan-a li{
        display: grid;
        grid-template-columns: 3em 9em;
        grid-template-rows: 1em 1fr 2em max-content;
        align-items: center;
        box-shadow: 0 0 0 0.3em  var(--jelo);
        max-width: max-content;
        margin: 0;

    }


    main .nanpa-wan-a a{
        font-size: 1.3em;
        text-decoration: none;
        font-weight: 600;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        justify-self: center;
        text-align: center;
        margin-block: 0.5em;
    }
    .nanpa-wan-a span.medal{
        font-size: 0.9em;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
                justify-self: center;

    }
    .nanpa-wan-a span.jan-pali{
        font-size: 0.8em;
        grid-column: 2 / 3;
        grid-row: 3 / 4;
        align-self: start;
        line-height: 1em;
        text-align: center;


    }
    .nanpa-wan-a img.medal{
        grid-column: 1 / 2;
        grid-row: 1 / 6;
    }
    .nanpa-wan-a .subtext-comp {
        grid-column: 2 / 3;
        grid-row: 4 / 5;
        align: end;
        justify-self: center;
        text-align: center;
        font-size: 0.7em;
        line-height: 1.1em;
        margin-block-end: 1em;

    }
</style>


# 2026 Writing Contest


View the [competition rules](/mamlw/lipu-musi/lawa/lawa_tok).  
View the [voting page](/mamlw/lipu-musi/pana-pilin/pana-pilin_tok). 







## Large Worded Document

<ul class="nanpa-wan-a">

<li>
<span class="medal">First Place </span>
<img class="medal" alt="" src="/maml/lipu-musi/winners/nanpa-wan.png">
<span class="jan-pali">jan Etekin</span>
<a href="/mamlw/lipu-musi/lipu-nimi-suli/tomo-sewi-li-wile-e-seme">
        <span>tomo sewi li wile e seme</span>
    </a>
<span class="subtext-comp">Large Worded Document <br> 2026</span>
</li>
                    <li>
    <span class="medal">Second Place </span>
    <img class="medal" alt="" src="/maml/lipu-musi/winners/nanpa-tu.png">
    <span class="jan-pali">jan Satase</span>
    <a href="/mamlw/lipu-musi/lipu-nimi-suli/o-moku-pona">
            <span>o moku pona</span>
        </a>
    <span class="subtext-comp">Large Worded Document <br> 2026</span>
</li>
</ul>

<ul class="work" role="list">
  {% assign sorted_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-suli/'" %} 
  {% for page in sorted_pages %}
  {% if page.layout == "lipu" %}
  <li {% if page.prize %} class="prize {{page.prize}}" {% endif %}>
    <span class="jan-pali"> {{ page.jan_pali }}: </span>
      <a href="{{ page.url }}">{{ page.title }} </a> 
    </li>  {% endif %}
{% endfor %}
</ul>


## Large Worded Document with Additional Illustrations

<ul class="nanpa-wan-a">

<li>
<span class="medal">First Place</span>
<img class="medal" alt="" src="/maml/lipu-musi/winners/nanpa-wan.png">
<span class="jan-pali">waso Seko</span>
<a href="/mamlw/lipu-musi/lipu-nimi-suli-sitelen/o-kule-e-lipu/">
        <span>o kule e lipu</span>
    </a>
<span class="subtext-comp">Illustrated Document<br> 2026</span>
</li>








</ul>

<ul class="work" role="list">
  {% assign sorted_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-suli-sitelen/'" %} 
  {% for page in sorted_pages %}
  {% if page.layout == "lipu" %}
  <li {% if page.prize %} class="prize {{page.prize}}" {% endif %}>
    <span class="jan-pali"> {{ page.jan_pali }}: </span>
      <a href="{{ page.url }}">{{ page.title }} </a> 
    </li>  {% endif %}
{% endfor %}
</ul>

## Small Worded Document 

<ul class="nanpa-wan-a">
        <li>
        <span class="medal">First Place </span>
        <img class="medal" alt="" src="/maml/lipu-musi/winners/nanpa-wan.png">
        <span class="jan-pali">jan Etekin</span>
        <a href="/mamlw/lipu-musi/lipu-nimi-lili/index.html#o-lape-a!">
                <span>o lape a!</span>
         </a>
        <span class="subtext-comp">Small Worded Document <br> 2026</span>
    </li>
            <li>
        <span class="medal">Second Place </span>
        <img class="medal" alt="" src="/maml/lipu-musi/winners/nanpa-tu.png">
        <span class="jan-pali">jan jape</span>
        <a href="/mamlw/lipu-musi/lipu-nimi-lili/index.html#len-lawa-suli">
                <span>len lawa suli</span>
         </a>
        <span class="subtext-comp">Small Worded Document <br> 2026</span>
    </li>
                <li>
        <span class="medal">Third Place </span>
        <img class="medal" alt="" src="/maml/lipu-musi/winners/nanpa-tu-wan.png">
        <span class="jan-pali">soweli Solen</span>
        <a href="/mamlw/lipu-musi/lipu-nimi-lili/index.html#mi-tu-li-soweli">
                <span>mi tu li soweli</span>
         </a>
        <span class="subtext-comp">Small Worded Document <br> 2026</span>
    </li>
</ul>

{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-lili/ale'" | where_exp: "page", "page.path contains '.md' or page.path contains '.html'" | where_exp: "page", "page.template == nil or page.template == blank" %}

<ul role="list" class="work">
    {% for page in lipu_pages %}
    {% assign stripped_title = page.title | replace: " ", "-"  | replace: '"', ' %}

  <li {% if page.prize %} class="prize {{page.prize}}" {% endif %}>
    <span class="jan-pali"> {{ page.jan_pali }}:</span>
      <a href="lipu-lili/index.html#{{stripped_title}}">{{ page.title }} </a>
    </li>
        {% endfor %}
</ul>

## Comic

<ul class="nanpa-wan-a">

<li>
    <span class="medal">First Place</span>
    <img class="medal" alt="" src="/maml/lipu-musi/winners/nanpa-wan.png">
    <span class="jan-pali">jan Pala</span>
    <a href="/mamlw/lipu-musi/lipu-sitelen-lili/kijetesantakalu-en-ma-kasi/">
            <span>kijetesantakalu en ma kasi</span>
        </a>
    <span class="subtext-comp">Comic <br> 2026</span>
</li>
<li>
    <span class="medal">Second Place</span>
    <img class="medal" alt="" src="/maml/lipu-musi/winners/nanpa-tu.png">
    <span class="jan-pali">kapesi Pake</span>
    <a href="/mamlw/lipu-musi/lipu-sitelen-lili/lawa-toki-pi-toki-Inli">
            <span>lawa toki pi toki Inli</span>
        </a>
    <span class="subtext-comp">Comic <br> 2026</span>
</li>
</ul>




{% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-sitelen-lili/'" | where_exp: "page", "page.path contains '.md' or page.path contains '.html'" | where_exp: "page", "page.template == nil or page.template == blank" | where_exp: "page", "page.hub == blank or page.hub == nil" | sort: "title" %}

<ul class="work" role="list">
  {% for page in lipu_pages %}
    <li {% if page.prize %} class="prize {{page.prize}}" {% endif %}>
    <span class="jan-pali"> {{ page.jan_pali }}: </span>
      <a href="{{ page.url }}">{{ page.title }} </a> 
    </li>
{% endfor %}
</ul>
