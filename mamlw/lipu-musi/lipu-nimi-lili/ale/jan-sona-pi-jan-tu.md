---  
title:   jan sona pi jan tu
sptitle:  jan sona pi jan tu
ws_pref: spona
font: linjalaso
permalink: null
---

<style>
.jansonasp{
    line-height: 1.22em;
}
.jansonasp .line{
    display: block;
}
.sLasina.jansonalas p {
    white-space: normal;
    line-height: 1.22em;
    padding: 0;
}
.jansonasp p{
    line-height: 1.22em;
    padding: 0;
}
.jansonasp button{
    font-family: inherit;
    font-size: inherit;
    background-color: inherit;
    border: none;
}

  .display.visible {
    opacity: 1;
  }
.display{
    opacity: 0;
    display: block;
    text-align: center;
    margin-top: 1em;
}
.active{
    background-color: var(--lipu-monsi)
    color: var(--lipu-monsi)
}

</style>

<div markdown="1" class="sLasina jansonalas">

<em>mama pi lipu ni la lipu li ken lon sitelen pona taso. sina sona ala lukin e sitelen pona la o luka e ona. sitelen Lasina li kama lon anpa:
</em> 

<span class="display">nbsp;</span>

</div>
<div markdown="1" class="spona jansonasp">


<noscript>
mi mani pipi jan sina  
taso tomo tu li lipu  
nasin tawa anu kama pan  
pini li wan kiwen poki   
sina sike en ma mi  
</noscript>

<p><button class="jansonaword">mi</button> <button class="jansonaword">mani</button> <button class="jansonaword">pipi</button> <button class="jansonaword">jan</button> <button class="jansonaword">sina</button></p>
<p><button class="jansonaword">taso</button> <button class="jansonaword">tomo</button> <button class="jansonaword">tu</button> <button class="jansonaword">li</button> <button class="jansonaword">lipu</button></p>
<p><button class="jansonaword">nasin</button> <button class="jansonaword">tawa</button> <button class="jansonaword">anu</button> <button class="jansonaword">kama</button> <button class="jansonaword">pan</button></p>
<p><button class="jansonaword">pini</button> <button class="jansonaword">li</button> <button class="jansonaword">wan</button> <button class="jansonaword">kiwen</button> <button class="jansonaword">poki</button></p>
<p><button class="jansonaword">sina</button> <button class="jansonaword">sike</button> <button class="jansonaword">en</button> <button class="jansonaword">ma</button> <button class="jansonaword">mi</button></p>

</div>

<script>
  const displayEl = document.querySelector('.display');
  const wordButtons = document.querySelectorAll('.jansonaword');
  let activeWordEl = null;

  wordButtons.forEach(wordEl => {
    wordEl.addEventListener('click', () => {
      const isSame = activeWordEl === wordEl;

      if (activeWordEl) {
        activeWordEl.classList.remove('active');
      }

      if (isSame) {
        activeWordEl = null;
        displayEl.textContent = '\u00A0';
        displayEl.classList.remove('visible');
      } else {
        wordEl.classList.add('active');
        activeWordEl = wordEl;
        displayEl.textContent = wordEl.textContent;
        displayEl.classList.add('visible');
      }
    });
  });

</script>



