---
layout: main
title: "pana pilin pi sike #MAMLW"
---

utala musi lipu pi tenpo sike #MAMLW la

  <h1>o lukin e lipu! o pana e pilin!</h1>


<style>
  .pana-pilin-mamlw {
    column-width: 13em;
    gap: 2em;

  }
  .pana-pilin-mamlw div{
    break-inside: avoid;
  }
  </style>

<div class="pana-pilin-mamlw" markdown="1">


<div>
  <h2>lipu nimi suli</h2>
  
    <ul class="work" role="list">
      {% assign lipu_nimi_suli = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-suli/'" %}
      {% for page in lipu_nimi_suli %}
      {% if page.layout == "lipu" %}
        <li>
          <a href="{{ page.url }}">{{ page.title }} </a>
        </li>
      {% endif %}
    {% endfor %}
    </ul>
</div>
  
  
<div>
  <h2>lipu nimi suli pi sitelen namako</h2>
  
    <ul class="work" role="list">
      {% assign nimi_suli_sitelen = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-suli-sitelen/'" | sort: "title" %}
      {% for page in nimi_suli_sitelen %}
      {% if page.layout == "lipu" %}
        <li>
          <a href="{{ page.url }}">{{ page.title }} </a>
        </li>
      {% endif %}
    {% endfor %}
    </ul>
</div>
  

 <div>
   <h2>lipu sitelen lili</h2>
   
    {% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-sitelen-lili/'" | where_exp: "page", "page.path contains '.md' or page.path contains '.html'" | where_exp: "page", "page.template == nil or page.template == blank" | where_exp: "page", "page.hub == blank or page.hub == nil" | sort: "title" %}
   
    <ul role="list" class="nimi-pi-lipu-lili">
        {% for page in lipu_pages %}
        {% assign stripped_title = page.title | replace: " ", "-" | replace: '"', ' '%}
   
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
            {% endfor %}
    </ul>
   
 </div>
  
 <div>
   <h2><a href="/mamlw/lipu-musi/lipu-nimi-lili/">lipu nimi lili</a></h2>
   
    {% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-lili/ale'" | where_exp: "page", "page.path contains '.md' or page.path contains '.html'" | where_exp: "page", "page.template == nil or page.template == blank" %}
   
    <ul role="list" class="nimi-pi-lipu-lili">
        {% for page in lipu_pages %}
        {% assign stripped_title = page.title | replace: " ", "-"  | replace: '"', ' %}
   
    <li><a href="/mamlw/lipu-musi/lipu-nimi-lili/index.html#{{ stripped_title }}">{{ page.title }}</a></li>
            {% endfor %}
    </ul>
 </div>
</div>

<hr>

## nasin pi pana pilin:

[o pana e pilin sina lon lipu ni!](https://docs.google.com/forms/d/e/1FAIpQLScxhuP7rcMOAwdUUSlasnk91pGG_-cY3-CTonRvLnuzhrxqZA/viewform)

<a href="https://docs.google.com/forms/d/e/1FAIpQLScxhuP7rcMOAwdUUSlasnk91pGG_-cY3-CTonRvLnuzhrxqZA/viewform" aria-hidden="true"><img src="/mamlw/lipu-musi/pana-pilin/pana-pilin.png" alt=""></a>

<hr>

## wile sona:

### lipu pi mute seme li lon?

- lipu nimi lili: MTT
- lipu sitelen lili: LW
- lipu nimi suli: LW
- lipu nimi suli pi sitelen namako: TW

### utala musi la lipu pi mute seme li ken wawa?

tenpo pini la mi toki e ni: lipu seme TW li wawa tawa kulupu lon utala pi lipu lili lon utala pi lipu suli. 

tenpo sike ni la, utala tu tu li lon. kin la, ale la mute lipu li lili. ni la mi kama ante e nasin:

- utala pi lipu nimi lili: lipu TW seme li wawa
- utala pi lipu sitelen lili: lipu T seme li wawa 
- utala pi lipu nimi suli: lipu T seme li wawa
- utala pi lipu nimi suli pi sitelen namako: lipu W seme li wawa  


### lawa pi utala ni li seme?

o lukin e [lawa pi utala ni](/mamlw/lipu-musi/lawa/lawa_tok).


### sina pana pona ala e lipu mi! 

ni li lon la o toki tawa mi; mi wile pona e ona. 

### mi lukin e pakala toki lon insa pi lipu mi: mi ken ala ken pona e ona?

sina ken. o toki tawa mi; mi kama pona e ona. 

## mi wile toki tawa sina

nasin pi pana lipu la o toki kepeken nimi ni: tokipona.sasalin@gmail.com. ilo Siko la o toki kepeken nimi ni: @raacz106


<hr>

## lipu suli li toki e seme?

### lipu nimi suli

<ul role="list" class="ijo-mute">
    {% for page in lipu_nimi_suli %}
  {% if page.layout == "lipu" %}
    <li>
    <a href="{{ page.url }}">{{ page.title }}</a> 
     <span>{{ page.suli_lipu }}</span>
     <span>{{ page.ijo_toki }}</span>
    </li>
  {% endif %}
{% endfor %}
</ul>


### lipu nimi suli pi sitelen namako

<ul role="list" class="ijo-mute">
    {% for page in nimi_suli_sitelen %}
  {% if page.layout == "lipu" %}
    <li>
    <a href="{{ page.url }}">{{ page.title }}</a> 
     <span>{{ page.suli_lipu }}</span>
     <span>{{ page.ijo_toki }}</span>
    </li>
  {% endif %}
{% endfor %}
</ul>


