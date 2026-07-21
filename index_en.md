---
layout: sijelo
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

The 2026 Toki Pona Document Competition

  <h1>Read the Entries! Vote!</h1>


<style>
  .pana-pilin-mamlw {
    column-width: 13em;
    gap: 2em;

  }
      .pana-pilin-mamlw h2 {
      break-inside: avoid;
    }

  </style>

<div class="pana-pilin-mamlw" markdown="1">


<h2>Big Worded Documents</h2>
  
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
  
  
<h2>Big Worded Documents with Additional Images</h2>
  
  <ul class="work" role="list">
    {% assign sorted_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-suli-sitelen/'" | sort: "title" %}
    {% for page in sorted_pages %}
    {% if page.layout == "lipu" %}
      <li>
        <a href="{{ page.url }}">{{ page.title }} </a>
      </li>
    {% endif %}
  {% endfor %}
  </ul>
  

 <h2>Small Illustrated Documents</h2>

  {% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-sitelen-lili/'" | where_exp: "page", "page.path contains '.md' or page.path contains '.html'" | where_exp: "page", "page.template == nil or page.template == blank" | where_exp: "page", "page.hub == blank or page.hub == nil" | sort: "title" %}
  
  <ul role="list" class="nimi-pi-lipu-lili">
      {% for page in lipu_pages %}
      {% assign stripped_title = page.title | replace: " ", "-" | replace: '"', ' '%}
  
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
          {% endfor %}
  </ul>
   
  
  
 <h2><a href="/mamlw/lipu-musi/lipu-nimi-lili/">Small Worded Documents</a></h2>
  
  {% assign lipu_pages = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-lili/ale'" | where_exp: "page", "page.path contains '.md' or page.path contains '.html'" | where_exp: "page", "page.template == nil or page.template == blank" %}
  
  <ul role="list" class="nimi-pi-lipu-lili">
      {% for page in lipu_pages %}
      {% assign stripped_title = page.title | replace: " ", "-"  | replace: '"', ' %}
  
  <li><a href="/mamlw/lipu-musi/lipu-nimi-lili/index.html#{{ stripped_title }}">{{ page.title }}</a></li>
          {% endfor %}
  </ul>

</div>

<hr>

## The Voting Form
The voting form will land here soon when its ready!

<hr>

## Information:

### How many entries are in the competition?

- Small Worded Documents: 22
- Small Illustrated Documents: 5
- Big Worded Documents: 6
- Big Worded Documents with Additional Images: 3

### How many entries will win?

In past years, we've assigned three winners per category. Due to the lower amount of entries competing in each category this year, I've adjusted the amount of winners in categories to be this:


- Small Worded Documents: First Prize, Second Prize, Third Prize
- Small Illustrated Documents: First Prize, Second Prize
- Big Worded Documents: First Prize, Second Prize
- Big Worded Documents with Additional Images: First Prize 


### You didn't format my submission right!

If this is the case please notify me, I want to make it better. 

### I see a grammar mistake in my submission, can I correct it?

Yes, you may. Reach out to me and I will fix it. 

### How can I contact you?

tokipona.sasalin@gmail.com is my email, and @raacz106 on Discord. 

</div>





<div class="container-in-main timeline" markdown="1">

<div class="icon-banner">
    {% include  icons/read-blog-blog-post-phone-smartphone-svgrepo-com.svg %}

  <h1>Past Competitions</h1>

  </div>
  
{: #utala-pini}

Note: the English translation page does not have all of the competitions that have been held. 

<div  class="timeline-container" markdown="1">


## 2025
- August: [artistic document competition](/maml/lipu-musi/), where big documents and little documents came from the artistic labour of this amazing group.

## 2024
- August: [amusing document competition](/mamtt/lipu-musi/), where the group made lots of documents!

## 2023
- August:  [competition of big documents and little communications](/mamtw/toki-en-lipu/index_en.md), where the group made lots of little communications and lots of big documents and two very very big documents!

## 2022
- August: [competition of small artistic documents](/mamt/lipu-lili/index_en.md), where the group wrote animal documents, horror documents, love documents, and good documents!


## 2021
- July: [place picture contest](/mamw/sitelen-ma/index_en.md), where the group made entertaining pictures to establish how Ma Pona was going to appear on Discord.

- February: [competition of sound movement documents ](/mamw/lipu-kalama-tawa/index_en.md), where the group made long documents, so that people can recite them together! 

## 2020

- November: [poetry competition](/mam/toki-musi-lili/index_en.md) where the group made many amusing poems! Who wrote the poem that both the community and the creator of Toki Pona liked?
</div>
</div>
</main>