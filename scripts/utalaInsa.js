let nena = document.getElementById("o-weka-e-namako");
let poki_toki = document.getElementById("poki-pi-sitelen-Lasina");

nena.addEventListener('click', function() {
    if (poki_toki.classList.contains('sskjuniko')) {
        // Remove class and change text
        poki_toki.classList.remove('sskjuniko');
        nena.innerText = 'o pana sin e namako selo pi sitelen Lasina.';

    } else {
        // Add class back and restore original text
        poki_toki.classList.add('sskjuniko');
        nena.innerText = 'o weka e namako selo pi sitelen Lasina'; // assuming this was the original text
    }
});