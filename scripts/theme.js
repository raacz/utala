/* Code from fossheim.io's tutorial on writing accessible theme selectors*/



const pressedButtonSelector = '[data-theme][aria-pressed="true"]';
const defaultTheme = 'walo';

const applyTheme = (theme) => {
const target = document.querySelector(`[data-theme="${theme}"]`);
document.documentElement.setAttribute("data-selected-theme", theme);
document.querySelector(pressedButtonSelector).setAttribute('aria-pressed', 'false');
target.setAttribute('aria-pressed', 'true');
};

const handleThemeSelection = (event) => {
const target = event.target;
const isPressed = target.getAttribute('aria-pressed');
const theme = target.getAttribute('data-theme');        

if(isPressed !== "true") {
applyTheme(theme);
localStorage.setItem('selected-theme', theme);
}
}

const setInitialTheme = () => {
const savedTheme = localStorage.getItem('selected-theme');
if(savedTheme && savedTheme !== defaultTheme) {
applyTheme(savedTheme);
}else if (savedTheme == null){ 
overridePreference();
}
};

//THIS IS AN ADDITION AND MAY BE SOURCE OF BUGS
const overridePreference = ()=> {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('pimeja');
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        applyTheme('walo');
    }
}

setInitialTheme();

const themeSwitcher = document.querySelector('.theme-switcher');
const buttons = themeSwitcher.querySelectorAll('button');

buttons.forEach((button) => {
button.addEventListener('click', handleThemeSelection);
});



//ADDITION
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => { 
overridePreference();   
});
//ADdITION ENDS