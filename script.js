
/*----------------------------CREATING ELEMENTS/VARIABLES----------------------------*/
let p1 = document.createElement('h1');
p1.id = 'initial'
let p2 = document.createElement('h2');
// p2.id = 'key-pressed'
let p3 = document.createElement('h2');
p3.id = 'key-code';
let body = document.querySelector('body')

/*----------------------------CREATING TEXTS----------------------------*/
p1.innerHTML = 'Press Any Keyboard Key';

/*-----------------APPENDING THE ELEMENTS CREATED ABOVE-----------------*/
body.appendChild(p1);
body.appendChild(p3);

/*-----------------------------------STYLING ELELMENTS-----------------------------------*/
body.style.height = '100vh'
document.body.style.cssText = 'height: 100vh; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;'
p1.style.cssText = 'box-shadow: rgb(136 136 136 / 14%) -2px 3px 9px 5px; color: #000000; text-shadow: 2px 4px #77777769; font-size: 4em; font-family: poppins; padding: 20px; '

/*-----------------CREATING FUNCTIONALITIES AROUND ELENENTS-----------------*/
document.body.addEventListener('keydown', e=>{
    let a = e.key;
    p1.innerHTML = `You just pressed <span>${a}</span>`
    document.querySelector('span').style.color = '#22b522'
    p3.innerHTML = e.keyCode;
    p3.style.cssText = 'box-shadow: rgb(136 136 136 / 14%) -2px 3px 9px 5px; color: #000000; text-shadow: 2px 4px #77777769; font-size: 4em; font-family: poppins; margin: 0; padding: 30px;'

})