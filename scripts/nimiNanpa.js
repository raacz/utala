

    const modifiedQuote = "[Nasin Nanapa POna integers LLTinclude M and MLTW.";
const regexpModifications = /(M*L*T*W*[MLTW]A)*M*L*T*W*[MLTWA]\b/gm;
console.log(modifiedQuote.match(regexpModifications));

console.log(document.getElementsByTagName("body")[0].innerText.match(regexpModifications));

/*
    function: convert number system
        activate function: 
        'are arabic numerals present'
        if arabic numerals, 
            activate function: 'find all arabic numerals'
            for each arabic numeral
                activate function, 'convert arabic to NNP'
            return success
        
        activate function: 'are nnp numerals present'
        if true nnp
            activate function: 'find all nnp numerals'
            for each nnp numeral
                activate function, 'convert nnp to arabic'
            return success

    function: 'convert arabic to NNP' 
        returns NNP from arabic numeral 
    function: 'find all arabic numerall NNP numerals'als/
        returns a list of all numbers in span element ready to convert over
    function: return all nnp
        reutnrs 

*/


