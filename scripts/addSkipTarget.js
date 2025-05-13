//set it on main fiirst heading

var skipbuttons = document.getElementsByClassName("skip-button");
for (button of skipbuttons){
    button.style.display = 'block';
}

var skiptarget = document.getElementsByTagName("h1")[0];
skiptarget.setAttribute('tabindex', '-1');
skiptarget.setAttribute('id', 'skip-target-main');

skiptarget = document.getElementsByTagName("footer")[0];
skiptarget.setAttribute('tabindex', '-1');
skiptarget.setAttribute('id', 'skip-target-footer');





