/* Code from fossheim.io's tutorial on writing accessible theme selectors*/

document.getElementsByClassName('nasin-sitelen')[0].style.display = 'block';

const pressedFontButtonSelector = '[data-font][aria-pressed="true"]';
const defaultfont = 'walo';

const applyfont = (font) => {
const target = document.querySelector(`[data-font="${font}"]`);
document.documentElement.setAttribute("data-selected-font", font);
document.querySelector(pressedFontButtonSelector).setAttribute('aria-pressed', 'false');
target.setAttribute('aria-pressed', 'true');
};

const handlefontSelection = (event) => {
const target = event.target;
const isPressed = target.getAttribute('aria-pressed');
const font = target.getAttribute('data-font');        

if(isPressed !== "true") {
applyfont(font);
localStorage.setItem('selected-font', font);
}
}

const setInitialfont = () => {
const savedfont = localStorage.getItem('selected-font');
if(savedfont && savedfont !== defaultfont) {
applyfont(savedfont);
}
};



setInitialfont();

const fontSwitcher = document.querySelector('.font-switcher');
const fontButtons = fontSwitcher.querySelectorAll('button');

fontButtons.forEach((button) => {
button.addEventListener('click', handlefontSelection);
});


