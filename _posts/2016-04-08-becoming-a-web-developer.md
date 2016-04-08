---
layout: note
title:  Becoming a web developer!
date:   Friday, April 8, 2016
tags:   Resources
---

A friend asked me recently for a rundown of things to learn to get an entry-level web developer position. The following is the email I sent, which ended up being longer than I initially anticipated! All of this I based on my experience. I’m curious to hear of any resources I may have omitted due to ignorance. This could likely be improved!

---------------------------------------

So a few things in general:

- I’ve learned way more from trying stuff out than reading about it. Like we might be different kinds of learners, but I think side / example projects are invaluable. Even if they are just like for personal uses.
- I Google everything all the time.

**HTML**

- [HTML5 For Web Designers](http://html5forwebdesigners.com/): A book about newer stuff happening with the HTML spec. Also has a good history. (The full text of the book is available online).
- [Dave Raggett’s Introduction to HTML](https://www.w3.org/MarkUp/Guide/): A very mellow guide to how HTML documents are structured. I suspect you know a lot of this already.

**CSS**

- [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started): Goes a bit into the history of CSS, how it works, some tutorials and examples. It’s a little dry, but it is the best I can think of.
- [Mastering CSS coding](https://www.smashingmagazine.com/2009/10/mastering-css-coding-getting-started/): A little dated, but gets into the box model, which is important.
- Responsive Web Design: I turned this into a whole section (below) because it is super important.
- CSS Preprocessors: Writing CSS can be repetitive and tedious, so people write in languages that get compiled to CSS like [Sass](http://sass-lang.com/) and [Less](http://lesscss.org/). It’s better to learn CSS first, but this is something you’ll likely run into down the line.
- CSS Frameworks: Again, writing CSS can be really fun and rewarding, but also a drag. There are tons of CSS frameworks that try to offer common patterns, especially for things like layout. A good example is [Bootstrap](http://getbootstrap.com/).

**JavaScript**

- [JavaScript For Cats](http://jsforcats.com/): A pretty good introduction to JavaScript and interacting with the browser console. Actually pretty good introduction to programming concepts in general (loops, arrays, objects…).
- [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript): Goes in deeper on JavaScript as a programming language.
- [JavaScript: The Good Parts](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf): Another book (PDF), gets _way_ more technical.

**Blogs / Resources**

- [CSS-Tricks](https://css-tricks.com/): Definitely more than CSS. Lots of good examples/tutorials. Probably end up here Googling for help.
- [HTML5 Rocks](http://www.html5rocks.com/en/): Sponsored by Google. Goes pretty in depth to new stuff coming to browsers.
- [dropshado.ws](http://dropshado.ws/): Gets into edge cases and minutiae of web development. Tends to be more advanced stuff.
- [MDN](https://developer.mozilla.org/en-US/): Wiki for web development. Very good. Always opt for this over w3 schools in search results. (That site used to be good, but now it is shitty, full of ads, and kind of spammy).
- [Stack Overflow](http://stackoverflow.com/): Question and answer site for programmers. Often I Google something and end up here because someone has already asked and answered the question.
- [How DNS Works](https://howdns.works/): A really good series on DNS, basically how like google.com gets resolved to a server somewhere.

**Courses**

- [The Lodge](https://css-tricks.com/lodge/): From CSS-Tricks. Free.
- [Code Academy](https://www.codecademy.com/): Also free, some additional stuff not covered on The Lodge.
- [Treehouse](https://teamtreehouse.com/): Cost money, more support (I assume!).

**Tools**

- Text editors: They are all pretty good. Super teched out folks use [vim](http://www.vim.org/) or [emacs](https://www.gnu.org/software/emacs/) (don’t use these). I use [Sublime Text](https://www.sublimetext.com/). [Coda](https://panic.com/coda/) is nice because it has a built in browser for testing. [Atom](https://atom.io/) is like Sublime Text but free.
- [CodePen](http://codepen.io/): Text editor in the browser. Nice feedback loop of edit => preview => edit => preview… Associated with the CSS-Tricks folks. Good place to get started.
- [Chrome Developer Tools](https://developer.chrome.com/devtools): The cool thing about the web is you can always view the source of websites and see how they are made.

**Git / Version Control**

- [Atlassian’s Getting Git Right](https://www.atlassian.com/git/): The whole series of tutorials is pretty good, I refer back to it often. Good place to get started: [What is version control](https://www.atlassian.com/git/tutorials/what-is-version-control).
- [GitHub](https://github.com/): A git repository hosting service. Important, monolithic. [This is me](https://github.com/matthewspencer/).
- [Tower](https://www.git-tower.com/): A good GUI for git. Cost money. (Graphical User Interface… as apposed to a Command Line Interface or CLI…) GitHub has a [free GUI](https://desktop.github.com/). It’s okay.

**Responsive Web Design**

This is perhaps more of a conceptual point, but is mega-important to writing CSS. So, briefly… websites used to be designed for a specific screen size (a long time ago 640px or 800px wide, in more recent eras 960px). After the iPhone (this is somewhat of a simplification, but you get the idea), the idea is to build websites that are flexible to any screen size (within reason), often considering the mobile screen first and expanding to the larger tablet and desktop views. This was an important conceptual change in the early 2010s, but now is 100% integrated with like everything. So mega-important. Anyhow, here’s some articles and books:

- [Responsive Web Design](http://alistapart.com/article/responsive-web-design): Early article coining the terminology and discussing the benefits of the approach.
- [Responsive Web Design: What It Is and How To Use It](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/): Kind of rehashes the previous link but gets more into media queries.
- [Responsive Web Design](https://abookapart.com/products/responsive-web-design): Book by the guy who wrote the first article.
- [Responsive web design basics](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/?hl=en): Documentation of the technical details of responsive web design, made by Google.
- [Mobile First](https://abookapart.com/products/mobile-first): Another book on the concept of developing for mobile first which I briefly mentioned above.

**Web Standards**

Oh god, this should also be mentioned. There used to be a time when each browser supported different things. Writing cross browser code was a nightmare. There was a big push for web standards. Things have gotten better, but there is still not 100% parity between all browsers, especially mobile. W3C & WHATWG both kind of manage the HTML spec, W3C for CSS too, and ECMA for JavaScript.

**Vocabulary**

- CSS: Cascading Stylesheets
- HTML: HyperText Markup Language
- DNS: Domain Name System
- API: application programming interface
- GUI: graphic user interface
- CLI: command line interface
- Front-end: Things that happen in the browser—HTML, CSS, JavaScript.
- Back-end: Things that happen on the server. Lots more programming languages, some common PHP, Ruby, Python, MySQL (databases), Node.js (JavaScript again, this is confusing I know)…
