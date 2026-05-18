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



<div class="container-in-main instructions" markdown="1">

<style>
  .categories svg{
    width: 4em;
    height: 4em;
    object-fit: contain;

  }
  .expectations svg{
    width: 4em;
    height: 4em;
    object-fit: contain;

  }

  .categories {
    display: grid;
    grid-template-columns: max-content 1fr;
  }
  .expectations {
    grid-template-columns: 1fr max-content;
    column-gap: 2em;
  }

  .categories h3{
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
    .expectations h3{
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  .categories .category-child, .expectations .expectations-child
{
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    background-color: var(--jelo);
    width: 5em;
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .categories .category-child{
    grid-column: 1 / 2;
    grid-row: 2 / 3;
        align-self: center;

    }
    .expectations .expectations-child{
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      float: right;
      align-self: start;
    }
  .categories ul{
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  .expectations ul{
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .markdown-example{
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 0.5em;
    margin: 1.5em 0.25em 0.5em 0.25em;
    padding-block: 0.5em;
    border-block: 0.1em solid var(--laso-pimeja);
  }
  .markdown-example code{
    white-space: pre-line;
  }
  .instructions details:nth-of-type(2n + 1) {
    background-color: var(--jelo);
  }
  .instructions details:nth-of-type(2n) {
    background-color: var(--jelo-walo);
  }
  .instructions details{
    padding: 1em;
    color: var(--pimeja);
  }
  .instructions summary{
    font-family: "Teachers-Bold", sans-serif;
  }

@media (max-width: 40rem){
  .categories {
    display: flex;
    flex-direction: column;
  }
  .expectations {
    display: flex;
    flex-direction: column;
  }
  .expectations .expectations-child{
    align-self: center;
  }
  .instructions :is(h3, h2){
    text-align: center;
  }

}

</style>

<div class="icon-banner">
{% include  icons/notetaking-app-phone-smartphone-svgrepo-com.svg %}
  <h1>o utala musi!</h1>
</div>

kulupu o, tenpo sin la utala musi pi pali lipu li open a. o lukin e sona ale. tenpo pi pali lipu li pini lon tenpo suno #LLT pi tenpo mun #LT!


**utala ni pi lipu musi li open sin lon tenpo sike ale.** kulupu li pali e lipu musi mute ni: ona li toki e ijo musi kepeken nasin musi. (lipu o pona ala tawa lipu Wikipesija o pana sona taso ala). ale li ken pana e lipu tawa utala musi ni: sina sona wawa e toki pona la o pali! sina sona lili e toki pona la o pali (mi ken pana e pona)! lon anpa pi lipu ni la sina ken lukin e utala lipu mute pi tenpo pini. kin lao lukin pona e sona ale pi tenpo sike ni: nasin utala li kama ante lili. **tenpo sike ni la: jan li ken pali e lipu pi nimi taso ala e lipu pi sitelen kule musi kin!**

## lipu pi nasin tu tu 

<div class="categories" markdown="1">

<div class="category-child">{% include  icons/document-review-read-document-document-revision-read-instructions.svg %}</div>




### lipu nimi lili

- **suli lipu**: mute nimi o lili tawa TWA.
- **nasin sitelen pi toki pona**:  sina wile kepeken sitelen pona, la sina o pana kepeken sitelen Lasina kin. sina wile kepeken sitelen Lasina la sina ken pana e ona pi sitelen pona kin, lon wile. sina kepeken sitelen Lasina taso li pana ala e sitelen pona la o sona e ni: mi ken kama sitelen pona e lipu lili sina.  
- **lipu ilo li ken nasin seme**: wile mi la sina kepeken [nasin Matan](#nasin-matan-li-seme).  taso lon la sina ken pana kepeken nasin ante ale ni: nasin Matan en nasin HTML en nasin pi namako ala en nasin lipu pi [kulupu Makoso](https://tok.wikipedia.org/wiki/kulupu_Makoso) (en nasin lipu ni pi kulupu Makoso ala) en nasin PDF en nasin JPG. 
- **pana wan:** jan wan li ken pali e lipu nimi lili wan taso.  

</div>
<div class="categories" markdown="1">

<div class="category-child">{% include  icons/book-opened-book-guide-volume.svg %}</div>



### lipu nimi suli 

- **suli lipu**: mute nimi o suli tawa LA.
- **nasin sitelen pi toki pona**: sina wile kepeken sitelen pona, la sina o pana kepeken sitelen Lasina kin. sina wile kepeken sitelen Lasina la sina ken pana e ona pi sitelen pona kin, lon wile. 
- **lipu ilo li ken nasin seme**: o pana e lipu sina tawa mi kepeken nasin wan pi nasin tu wan ni: [nasin Matan](#nasin-matan-li-seme) anu nasin HTML, anu nasin .txt. sina ni la sina ken pana e lipu sama kin kepeken nasin ni, lon wile sina: nasin lipu pi [kulupu Makoso](https://tok.wikipedia.org/wiki/kulupu_Makoso) (en nasin lipu ni pi kulupu Makoso ala) en nasin PDF en nasin JPG.  
- **pana mute:** jan wan li ken pali e lipu nimi suli mute.

</div>
<div class="categories" markdown="1">

<div class="category-child">{% include  icons/mobile-app-phone-smartphone.svg %}</div>


### lipu sitelen lili
- **suli lipu**: sitelen suli wan li sama leko suli wan li ken jo e sitelen mute lon insa ona. lipu sitelen lili la mute pi sitelen suli o lili tawa luka tu tu. mute nimi o suli tawa MLL o lilii tawa TWA. 
- **nasin sitelen**: sitelen Lasina en sitelen pona li pona. 
- **lipu ilo li ken nasin seme**: lipu sitelen lili sina li ken kepeken nasin JPG anu nasin PNG anu nasin SVG. sina o pana lipu sitelen lili e lipu nanpa tu tawa mi: lipu nanpa tu o jo e toki nimi ale pi lipu nanpa wan. kepeken lipu nanpa tu la mi pali tu. nanpa wan la mi alasa e ni: nimi pi mute seme li lon lipu sitelen lili sina? nanpa tu la mi toki e ni tawa jan pi ken lukin ala: lipu sitelen sina li sitelen e seme li toki e seme. 
- **pana tu**: jan wan li ken pali e lipu sitelen lili wan anu lipu sitelen lili tu. 

</div>
<div class="categories" markdown="1">

<div class="category-child">{% include  icons/article-story-report-piece-svgrepo-com.svg %}</div>

### lipu nimi suli pi sitelen namako
- **suli lipu**: mute nimi o suli tawa LA. sitelen namako li ken sitelen e ijo  kepeken walo kepeken pimeja kepeken kule. mute pi sitelen namako o suli tawa T. 
- **nasin sitelen**: sina wile kepeken sitelen pona, la sina o pana kepeken sitelen Lasina kin. sina wile kepeken sitelen Lasina la sina ken pana e ona pi sitelen pona kin, lon wile. 
- **nasin pi sitelen namako**:  sitelen namako ni o namako taso. weka pi sitelen namako o pakala ala e ken sona pi lipu sina. sitelen namako o sitelen ala e nimi ni: ona li lon ala lipu pi sitelen namako ala. 
- **Submission format**:  o pana e sitelen namako tawa mi kepeken nasin JPG anu nasin PNG anu nasin SVG. o pana e toki nimi pi lipu sina tawa mi kepeken nasin wan pi nasin tu wan ni: [nasin Matan](#nasin-matan-li-seme) anu nasin HTML, anu nasin .txt. sina ni la sina ken pana e lipu sama kin kepeken nasin ni, lon wile sina: nasin lipu pi [kulupu Makoso](https://tok.wikipedia.org/wiki/kulupu_Makoso) (en nasin lipu ni pi kulupu Makoso ala) en nasin PDF en nasin JPG.  
- **pana mute**: jan wan li ken pana e lipu nimi suli mute pi sitelen namako. 

</div>

## nasin utala

<div class="expectations" markdown="1">

<div class="expectations-child">{% include  icons/hourglass-date-time-period-svgrepo-com.svg %}</div>


### pini pi tenpo pana

sina wile pali e lipu tawa utala musi la o pana e lipu sina lon tenpo pona. tenpo pona li pini **lon suno #LLT pi mun #LT pi sike #MAMLW.** 

tenpo pona li pini la sina awen ken lukin pana e pali sina lon tenpo lili, taso ken la mi toki e ni: sina pana lon tenpo ike la mi ken ala kepeken pali sina. nasin pana li pini wawa lon tenpo suno #LLLW pi tenpo mun sama. 

<details margin="0 auto" style="margin-bottom: 2em; padding: 0; background: none;">
<summary>nasin sitelen Alapi la</summary>
pini pona: suno #12 pi mun #7 pi sike #2026  <br>
pini ale: suno #16 pi mun #7 pi sike #2026
</details>


</div>
<div class="expectations" markdown="1">

<div class="expectations-child">{% include  icons/clipboard-research-investigate-study-svgrepo-com.svg %}</div>


### lawa pi utala ni
- **ken esun pi pali sina**: sina pana e lipu musi tawa utala musi ni, la sina toki e ni: lipu lawa [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/4.0/) (CC-BY-SA-4.0) li lawa e ken esun pi lipu musi sina. o sona e ni: jan ante li toki e nimi sina e nimi pi lipu lawa la ona li ken kepeken pali sina lon nasin ante mute a: ona li ken esun e pali sina li ken kama e mani tan ona. ona li ante e pali sina la pali sin ni li wile kepeken nasin esun pi lipu lawa sama.  o sona pona e lawa a!
- **o pana e pali sina**:  sina pana e lipu e sitelen tawa utala musi, la lipu ni en sitelen ni o tan pali sina taso o tan ala pali pi jan ante. lipu o lipu sina. sitelen o sitelen sina. musi o musi sina. 
- **tan ilo ala**: ilo pi sona toki o pali ala e lipu sina e sitelen sina. ilo pi sona toki li ken pali e lipu e sitelen kepeken toki sina kepeken toki mute pi sina ala. ilo ale ni pi taso ala li ilo pi sona toki: ilo ChatGPT, en ilo Claude, en ilo Copilot, en ilo Gemini. 
- **nasin pona**: lipu la o sewi ala e nasin ike. o toki mute ala e unpa e pakala sijelo. o sitelen mute ala e unpa e pakala sijelo.
- **toki pona**: lipu sina o kepeken toki pona taso. sina wile pana e toki lili kepeken toki ante kepeken toki pona ala la nanpa wan la o toki tawa mi. ken la mi ken e wile sina. ken la mi ken ala e wile sina. 

</div>
<div class="expectations" markdown="1">

<div class="expectations-child">{% include  icons/crystal-ball-envision-future-forecast-svgrepo-com.svg %}</div>


### seme li wawa nanpa wan 

tenpo pi pana lipu li pini la, mi kama pana e lipu musi ale tawa lukin pi ale kulupu. mi toki ala e ni: seme li pali e lipu seme. kulupu li kama lukin e lipu li ken kama sona e pilin ona: lipu seme li musi nanpa wan li wawa nanpa wan? jan li sona e pilin ona la ona li ken toki e pilin tawa mi kepeken lipu pi pana pilin. mi nanpa e pilin ale kulupu li kama sona e ni: lipu nimi lili tu wan seme en lipu nimi suli tu wan seme en lipu sitelen lili tu wan seme en lipu nimi suli tu wan seme pi sitelen namako li wawa suli tawa kulupu. mi toki e sona ale ni lon *suno pi toki pona*. nasin ni la, ala o sona e ni: seme li pali e lipu seme. **utala li pini ala la o len e sona ni tan jan ante: sina pali e lipu seme!**



</div>
<div class="expectations" markdown="1">
<div class="expectations-child">{% include  icons/approval-notice-notice-of-approval-get-approved-svgrepo-com.svg %}</div>


### o pana e lipu!

o awen lili-- mi awen pali e nasin pi pana lipu. mi pini la sina ken lukin e nasin pi pana lipu lon ni a. 


</div>

## sona namako

### o toki tawa mi

mi jan Lakuse. sona pi wile sina li lon ala lipu ni la o toki tawa mi. mi en sina li ken toki kepeken ilo Siko anu kepeken ilo pi pana lipu. 

**ilo Siko** la: @raacz106.   
**ilo pi pana lipu** la: [tokipona.sasalin@gmail.com](mailto:tokipona.sasalin@gmail.com).  

### mi ken pona e pali sina


o toki tawa mi a! mi wile e ni: sina pana e lipu tawa utala musi. 
- ken la sina sin tawa toki pona li wile e ni: jan ante li lukin e lipu sina li alasa e pakala pi nasin toki. mi ken ni! 
- ken la sina sona ala e ni: sina o sitelen e seme lon lipu seme. mi en sina li ken toki lon ni! 
- ken la sina wile e ni: jan ante li lukin e lipu sina li suli e ken sona lipu e ken musi lipu. mi ken ni! 
- ken la sina sona ala e nasin Matan. mi ken pana e sona ni!
- ken la sina wile pali, taso sina pilin monsuta tan ken ni: sina weka e sona li kama ala pali. mi ken mu lon tenpo pona tawa sina sama ni: o pali!

sina wile e lukin mi e pali mi la o pana tawa mi lon pini ala pi tenpo ken. mi lukin e pali sina la mi wile e tenpo, la o ken e ni: tenpo ni li lon. 

### wile sona (mi sin e ni lon wile)



<details id="nasin-matan-li-seme" style="margin-top: 1em" markdown="1">
<summary>nasin Matan (Markdown) li pona tan seme li kepeken nasin seme?</summary>

lipu utala.pona.la li pana ilo e lipu musi ale kepeken nasin Matan. ni li utala musi lipu nanpa luka. lon utala tu tu pi tenpo sike tu tu la mi kepeken tenpo mute mi tawa ni: lipu utala.pona.la li pana pona e lipu musi ale. lon la mi kepeken tenpo suli tawa ni: mi ante e lipu musi ale tawa nasin Matan. tenpo sike ni la mi wile lili e tenpo pali mi, la mi ante lili e lawa pi utala musi. 

suli la nasin Matan li pana e sona ni tawa ilo: lipu ni la linja toki sin li open lon seme, nimi seme li selo wawa, nimi seme li tawa poka, nimi seme li suli li nimi e kipisi toki. o lukin lili:

<div class="markdown-example">
<pre>
<code>#### lipu ni li kepeken nasin Matan

nasin Matan la nimi li  **selo wawa** li *tawa poka*. sitelen # li open e linja sin la nasin Matan li sona e ni: nimi ni li suli li nimi e kipisi toki. sitelen # wan la nimi li suli nanpa wan. sitelen ## la nimi li suli nanpa tu. 

nasin Matan la 
weka sitelen 
li nasa. leko toki ni la mi pana ala e
weka sitelen
namako lon pini pi linja toki sin ale.

taso leko toki ni la, mi pana e   
weka sitelen   
tu sin lon pini pi linja sin ale.    
ni la   
nasin Matan li sona e ni: linja ni   
o ante   
o kama ala wan.   
</code>
</pre>
<div markdown="1">
#### lipu ni li kepeken nasin Matan

nasin Matan la nimi li  **selo wawa** li *tawa poka*. sitelen # li open e linja sin la nasin Matan li sona e ni: nimi ni li suli li nimi e kipisi toki. sitelen # wan la nimi li suli nanpa wan. sitelen ## la nimi li suli nanpa tu. 

nasin Matan la 
weka sitelen 
li nasa. leko toki ni la mi pana ala e
weka sitelen
namako lon pini pi linja toki sin ale.

taso leko toki ni la, mi pana e   
weka sitelen   
tu sin lon pini pi linja sin ale.    
ni la   
nasin Matan li sona e ni: linja ni   
o ante   
o kama ala wan.   
</div>
</div>


sina wile sona mute e nasin Matan la o lukin e [lipu sona ni pi toki Inli](https://www.markdownguide.org/basic-syntax/).


#### kepeken sona ala la o nasin Matan e lipu kepeken ilo lipu pi [kulupu Kuko](https://tok.wikipedia.org/wiki/kulupu_Kuko) 

ken la sina sona ala a e nasin Matan e nasin HTML. o kute pona e ni: sina wile ala kama sona e ona la ale li pona. nanpa wan la o pana e lipu sina tawa mi kepeken nasin pi wile sina. mi pana e lipu sina tawa lipu utala.pona.la la mi selo e ona kepeken nasin pi lipu ni nanpa wan. 

nanpa tu la, o open e ilo lipu pi kulupu Kuko. o pana e toki ale pi lipu sina tawa lipu sin pi kulupu Kuko. ilo lipu pi kulupu Kuko li ken ante e lipu sina tawa nasin Matan. lon anpa pi nimi lipu, la ilo mute li lon: 'lipu' en 'pali' en 'lukin' en 'ijo' en 'selo' en 'ilo' en 'pona.' o open e ilo 'lipu' la sina kama lukin e ilo sin mute. o lukin e ilo pi leko nanpa tu: 'o pana tawa jan ante' en 'o pana kepeken nasin lipu' en 'o pana tawa ilo sina.' o open e ilo 'o pana tawa ilo sina' la  o luka e 'nasin Matan.' pini! o pana e lipu ni pi nasin Matan tawa mi. 

#### nasin ante pi sona ala li wile ala e kulupu Kuko

ilo sina li tan [kulupu esun 'kili'](https://tok.wikipedia.org/wiki/kulupu_Ape) la ilo pali ona pi lipu toki li ken nasin Matan e lipu, sama ilo lipu pi kulupu Kuko. 

taso a. sina ken ala kepeken ilo Kuko li ken ala kepeken ilo ante sama li awen sona ala pana, la o kepeken nasin ni: o pana e lipu kepkeen nasin pi wile sina. kin la o pana e toki ale pi lipu sina tawa lipu sin pi nasin .txt. o lukin e lipu: pakala nasa li lon ala lon? linja toki ale li pona ala pona lukin? pona la o pana e lipu ni tawa mi. lon la nasin Matan li pona nanpa wan tawa mi, taso mi wile e ni: jan pi sona ni ala kin li awen ken lon utala. 

ale li pona. sina awen sona ala la o toki tawa mi. mi wile pana e sona tawa sina li wile wawa e pali sina. 
</details>
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
