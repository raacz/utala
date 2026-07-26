---
layout: sijelo
toki: "tok"
title: null
---

<style>
.icon-banner svg{
  max-width: 3em;
  max-height: 3em;
}
.icon-banner {
  display: grid;
  grid-template-columns: max-content 1fr ;
}
.icon-banner h1{
  padding-inline-start: 1em;
}

.timeline ul {
  border-left: 0.5em solid var(--jelo);
  padding-left: 1em;
}
.timeline-container {
  border-left: 0.2em solid var(--pimeja);
}

.timeline li {
  font-size: 0.9em;
}


.timeline h2{
  padding-left: 1.5em;
  position: relative;

}
.timeline h2::before{
  position: absolute;
  content: ' ';
  display: block;
  background-color: var(--pimeja);
  left: 0;
  top: 1em;

  --t: 45%; /* control the tail part */
  --h: 30%; /* control the head part */
  
  aspect-ratio: 3/2;
  width: 1em;
  clip-path: polygon(0 calc(50% - var(--t)/2),calc(100% - var(--h)) calc(50% - var(--t)/2),calc(100% - var(--h)) 0,100% 50%,calc(100% - var(--h)) 100%,calc(100% - var(--h)) calc(50% + var(--t)/2),0 calc(50% + var(--t)/2));}
</style>

<main markdown="1">
<div class="container-in-main" markdown="1">

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





</div>



<div class="container-in-main timeline" markdown="1">

<div class="icon-banner">
    {% include  icons/read-blog-blog-post-phone-smartphone-svgrepo-com.svg %}

  <h1>utala pi tenpo pini</h1>

  </div>
  
{: #utala-pini}

<div  class="timeline-container" markdown="1">

## tenpo sike #MAML

- mun #LTW: [utala musi lipu](/maml/lipu-musi/) la lipu lili en lipu suli li kama tan pali musi pi kulupu wawa ni. 


## tenpo sike #MAMTT

- mun #LTW: [utala musi lipu](/mamtt/lipu-musi/) la kulupu li pali e lipu musi sin mute a!


## tenpo sike #MAMTW

- mun #LTW: [utala musi pi lipu suli pi toki lili](/mamtw/toki-en-lipu/index.md) la kulupu li pali e toki lili mute e lipu suli mute en lipu tu pi suli mute a
- mun #L: [utala pi musi mu](/mamtw/musi-mu/) la o lukin e musi tawa e musi kalama e musi lukin o kama mu suli tan pilin musi wawa!
- mun #T: [utala pi sitelen ma](/mamtw/sitelen-ma-nanpa-tu/) la kulupu pi ma pona li wile e sitelen musi sin lon ilo Siko. sitelen mute li kama. taso sitelen seme li pona nanpa wan?

## tenpo sike #MAMT

- mun #LTW: [utala pi lipu musi lili](/mamt/lipu-lili/) la jan mute li sitelen e lipu soweli e lipu monsuta e lipu olin e lipu pona!

## tenpo sike #MAMW

- mun #LT: [utala pi sitelen ma](/mamw/sitelen-ma/) la kulupu li pali e sitelen musi tawa ni: ma pona pi toki pona li seme lukin tawa jan lon ilo Siko?
- mun #T: [utala pi lipu kalama tawa](/mamw/lipu-kalama-tawa/) la kulupu li kama e lipu suli tawa ni: jan li ken kalama e ona lon poka!


## tenpo sike #MAM

- mun #LLW [utala pi toki musi](/mam/toki-musi-lili/) la kulupu li pali e toki musi lili mute! musi pi jan seme li pona tawa kulupu tawa jan Sonja?

</div>
</div>
</main>
