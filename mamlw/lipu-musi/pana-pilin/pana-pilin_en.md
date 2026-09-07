---
layout: main
title: Voting 2026
---

  <h1>Voting 2026</h1>


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
    {% assign lipu_nimi_suli = site.pages | where_exp: "page", "page.path contains 'mamlw/lipu-musi/lipu-nimi-suli/'" %}
    {% for page in lipu_nimi_suli %}
    {% if page.layout == "lipu" %}
      <li>
        <a href="{{ page.url }}">{{ page.title }} </a>
      </li>
    {% endif %}
  {% endfor %}
  </ul>
  
  
<h2>Big Worded Documents with Additional Images</h2>
  
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

[Vote using this form!](https://docs.google.com/forms/d/e/1FAIpQLScxhuP7rcMOAwdUUSlasnk91pGG_-cY3-CTonRvLnuzhrxqZA/viewform)

<a href="https://docs.google.com/forms/d/e/1FAIpQLScxhuP7rcMOAwdUUSlasnk91pGG_-cY3-CTonRvLnuzhrxqZA/viewform" aria-hidden="true"><img src="/mamlw/lipu-musi/pana-pilin/pana-pilin.png" alt=""></a>


<hr>

## Information:

### How many entries are in the competition?

- Small Worded Documents: 24
- Small Illustrated Documents: 6
- Big Worded Documents: 6
- Big Worded Documents with Additional Images: 3

### How many entries will win?

In past years, we've assigned three winners per category. Due to the lower amount of entries competing in each category this year, I've adjusted the amount of winners in categories to be this:


- Small Worded Documents: First Prize, Second Prize, Third Prize
- Small Illustrated Documents: First Prize, Second Prize
- Big Worded Documents: First Prize, Second Prize
- Big Worded Documents with Additional Images: First Prize 

### What are the competition's rules? 

Read through [this competition's rules](/mamlw/lipu-musi/lawa/lawa_en).



### You didn't format my submission right!

If this is the case please notify me, I want to make it better. 

### I see a grammar mistake in my submission, can I correct it?

Yes, you may. Reach out to me and I will fix it. 

### How can I contact you?

tokipona.sasalin@gmail.com is my email, and @raacz106 on Discord. 



<hr>

## What are the Big Documents about?


### Big Worded Documents

<ul role="list" class="ijo-mute">
    {% for page in lipu_nimi_suli %}
  {% if page.layout == "lipu" %}
    <li>
    <a href="{{ page.url }}">{{ page.title }}</a> 
     <span>{{page.mute_nimi}} words</span>
     <span lang="en">{{ page.ijo_toki }}</span>
    </li>
  {% endif %}
{% endfor %}
</ul>


### Big Worded Documents with Additional Images

<ul role="list" class="ijo-mute">
    {% for page in nimi_suli_sitelen %}
  {% if page.layout == "lipu" %}
    <li>
    <a href="{{ page.url }}">{{ page.title }}</a> 
     <span>{{page.mute_nimi}} words</span>
     <span lang="en">{{ page.ijo_toki }}</span>
    </li>
  {% endif %}
{% endfor %}
</ul>


