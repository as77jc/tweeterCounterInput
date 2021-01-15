let string = document.getElementById('string');
let counter = document.getElementById('counterFooter')
let btn = document.getElementById('btn')

btn.classList.add('buttonDisabled')
let textInput = '';
let loader = [];

////////////////////////////////////////////////////////////////
///////   create loader 
////////////////////////////////////////////////////////////////

for (let i = 0; i < 140; i++) {  
    loader[i] = document.createElement('div')
    loader[i].classList.add('white')
    counter.appendChild(loader[i])
}

////////////////////////////////////////////////////////////////
///////   Check Text Box length 
////////////////////////////////////////////////////////////////

string.addEventListener('keyup', e => {
    
    textInput = string.value;
    
    if (textInput.length == 0 /*|| textInput.length > 140*/) {
        btn.classList.add('buttonDisabled');
    } else btn.classList.remove('buttonDisabled');
    
    checkLoader()
})

////////////////////////////////////////////////////////////////
///////   twitter button event listener 
////////////////////////////////////////////////////////////////

btn.addEventListener('click', e => {
    
    if (!btn.classList.contains('buttonDisabled')) {
        open(`https://twitter.com/intent/tweet?text=${textInput}`, '_blank');
    } 
})

////////////////////////////////////////////////////////////////
///////   Character counter check status 
////////////////////////////////////////////////////////////////

function checkLoader() {
    for (let i = 0; i < loader.length; i++) {
        if (loader[i].classList.contains('green')) loader[i].classList.remove('green')
        if (loader[i].classList.contains('yellow')) loader[i].classList.remove('yellow')
        if (loader[i].classList.contains('red')) loader[i].classList.remove('red')
    }
    
    // for (let i = 0; i < textInput.length; i++){
    //     if (i < 120) loader[i].classList.add('green')
    //     if (i >= 120 && i < 135) loader[i].classList.add('yellow')
    //     if (i >= 135 && i < 140) loader[i].classList.add('red')
    // }
    for (let i = 0; i < textInput.length; i++){
        if (textInput.length < 120) loader[i].classList.add('green')
        if (textInput.length >= 120 && textInput.length < 135) loader[i].classList.add('yellow')
        if (textInput.length >= 135 && textInput.length <= 140) loader[i].classList.add('red')
    }
}
