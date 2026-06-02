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
  <h1>Competition Info</h1>
</div>

The Toki Pona writing competition is back stronger than ever! Closing date is July 12. 

**This annual writing contest accepts creative, artistic writing of all kinds.** Toki Pona speakers of all proficiency levels are invited to submit entries. Scroll to the bottom of the page to be inspired by submissions and winners of previous contests, and read through all the information below as there are some changes this year, **including two new categories for illustrated works!**


## Categories

<div class="categories" markdown="1">

<div class="category-child">{% include  icons/document-review-read-document-document-revision-read-instructions.svg %}</div>




### Small Worded Document

- **Length**: These must be less than 300 words long. There is no minimum length.
- **Writing system**:  If composed in Sitelen Pona, you must also provide a version in the Latin script. If composed in the Latin script, you may also provide a Sitelen Pona version. If you do not provide a Sitelen Pona version, one may be made for you. 
- **Submission format**: Markdown-formatted text or .md files are preferred, but all formats are accepted, including: Markdown, html, plain text, Word .docx/.odt, PDF.  
- **Submissions per person:** One submission is allowed per person. 

</div>
<div class="categories" markdown="1">

<div class="category-child">{% include  icons/book-opened-book-guide-volume.svg %}</div>



### Large Worded Document

- **Length**: These must be more than 500 words long. There is no maximum length.
- **Writing system**: If composed in Sitelen Pona, you must also provide a version in the Latin script. If composed in the Latin script, you may also provide a Sitelen Pona version. 
- **Submission format**: You must submit a file in Markdown, HTML, or plain text (not preferred if your submission has bold/italics). You may additionally submit a PDF/Word document/JPG if your entry as a reference for any formatting requirements. 
- **Submissions per person:** Multiple submissions are allowed.

</div>
<div class="categories" markdown="1">

<div class="category-child">{% include  icons/mobile-app-phone-smartphone.svg %}</div>


### Small Image Document (Comic)
- **Length**: These must be less than 8 pages long. They must have less than 300 words and more than 30 words.
- **Writing system**: You may use either Sitelen Pona, the Latin script, or a mix of the two. 
- **Submission format**: JPG, PNG, or SVG is accepted. In addition to the work itself, you must include a second file that contains all the text of your story. I will use this file to make an accessible descriptive transcript of your submission.  
- **Submissions per person**: Two submissions are allowed per person. 

</div>
<div class="categories" markdown="1">

<div class="category-child">{% include  icons/article-story-report-piece-svgrepo-com.svg %}</div>




### Large Worded Document with Additional Images
- **Length**: These must be more than 500 words long and have at least three illustrations. 
- **Writing system**: If composed in Sitelen Pona, you must also provide a version in the Latin script. If composed in the Latin script, you may also provide a Sitelen Pona version. 
- **Illustration purpose**:  Illustrations should be decorative. Your narrative should be able to function with the images removed, and should not rely on illustrations to convey information. Text contained in illustrations must be also contained in the text submission. 
- **Submission format**:  Illustrations may be sent in JPG, PNG, or SVG. You must submit the submission's text in Markdown, plain text, or HTML file. You may additionally submit a PDF/Word document/JPG if your entry requires specific formatting. 
- **Submissions per person**: Multiple submissions are allowed. 

</div>

## What to Expect

<div class="expectations" markdown="1">

<div class="expectations-child">{% include  icons/hourglass-date-time-period-svgrepo-com.svg %}</div>


### Submission deadline

Entries will be expected **July 12, 2026.** The submission form will permanently close on July 16; I reserve the right to reject submissions sent between July 13 and July 16. 



</div>
<div class="expectations" markdown="1">

<div class="expectations-child">{% include  icons/clipboard-research-investigate-study-svgrepo-com.svg %}</div>


### Terms of submission
- **Licensing**: When you submit to the contests, you allow your work to be licensed using the [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/4.0/), also known as CC-BY-SA-4.0. Understand that under the terms of this license, people who properly follow the terms of the license are able to use your work, re-host your work, create derivatives of your work and even sell your work. 
- **Own work**: All illustrations and text must be your own. 
- **Authenticity**: Content generated by chatbots/LLMs/AI like ChatGPT, Claude, Copilot, Gemini etc., is not permitted. 
- **Appropriate content**: Content must not depict graphic sex or violence or promote harmful ideologies. 
- **Monolingual**: Content should be written in Toki Pona. Exceptions for minor passages in different languages may be made on a case-by-case basis. 


</div>
<div class="expectations" markdown="1">

<div class="expectations-child">{% include  icons/crystal-ball-envision-future-forecast-svgrepo-com.svg %}</div>


### Determining a winner

Following the submission deadline, anonymized entries will appear on this website for public viewing, followed by a voting form. Top three winners of each category will be determined through popular vote. Winners are announced live during *suno pi toki pona* 2026. **Until the competition is over, participants must keep secret and not tell others which submission belongs to them**. 



</div>
<div class="expectations" markdown="1">
<div class="expectations-child">{% include  icons/approval-notice-notice-of-approval-get-approved-svgrepo-com.svg %}</div>


### Where to Submit

You must separately submit your document and fill out an information form. These two things are separate. The information form must be completed for each entry, if you are submitting multiple. 
- **Fill out the information form** linked here [🏷️ utala musi lipu: sona pi lipu sina](https://forms.gle/vqxFrnEHbLdrEgLa6)
- **Submit your entry** using one of these three methods: via Discord DM (@raacz106),  [through email](mailto:tokipona.sasalin@gmail.com) , or through this linked form: [📃 utala musi: pana pi lipu sina](https://forms.gle/S87Q8yYC5veRhbas5) (using the form requires you to log into a Google account)



</div>

## Support and Questions

### Contact

All questions regarding the contest may be directed to myself. My name is jan Lakuse. You can reach me at Discord @raacz106 or by email [tokipona.sasalin@gmail.com](mailto:tokipona.sasalin@gmail.com). 

Feel free to DM or email me at any time.  If you feel like you need additional support, I'd love to help out with proofreading, brainstorming, editing, formatting, and even sending reminders about the approaching deadline. If you expect take advantage of editing and proofreading support, please try to get your submission to me as soon as you can.

### FAQ (will be updated as needed)



<details markdown="1" style="margin-top: 1em" markdown="1">
<summary>Why Markdown, and How?</summary>

In previous years, I've had to manually convert things to Markdown. This year, I'm introducing a Markdown/HTML requirement within some categories to make things quicker on my end with regards to spacing, bold/italics, and headings. 

<div class="markdown-example">
<pre>
<code>#### An Example of Markdown Text

Markdown supports **bold** and *italicized* text. Headers of descending orders are indicated by #. 

Markdown treats
spaces 
weird. I don't use any 
spaces
after the words in this paragraph.

In this paragraph,  
I end each line with two spaces.  
That way it doesn't wrap.  
</code>
</pre>
<div markdown="1">

#### An Example of Markdown Text

Markdown supports **bold** and *italicized* text. Headers of descending orders are indicated by # of different amounts. 

Markdown treats
spaces weird.
I don't use any spaces
after the words in this paragraph.

In this paragraph,  
I end each line with two spaces.  
That way it doesn't wrap.  
</div>
</div>


If you are interested in learning more about Markdown syntax, here is a [linked guide](https://www.markdownguide.org/basic-syntax/).


#### Easy Markdown with Google Docs

If Markdown and HTML are all new to you, there is no try to learn new technology. Simply send me the document in the filetype that you prefer (this may be .docx or .pdf). I will treat this document as the 'authoritative' copy for your formatting preferences. 

Then, copy your document to Google Docs, making sure to preserve whatever bold/italic you have. Google Docs has a built-in Markdown converter in File > Download > Markdown (.md). You can download and send this to me with basically no additional work. 

#### Other Easy Solutions

If you are on a Mac, the Notes program has an automatic Markdown converter. 

If you cannot use Google Docs and are still befuddled, copy the full text of your submission into a .txt file. Make sure the paragraph breaks look right, and there are no suspicious characters, send it to me. I much prefer Markdown over plaintext like this, but I don't want Markdown knowledge to be a blocker to participation. 


</details>
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