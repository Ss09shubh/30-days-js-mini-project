const btn = document.getElementById("btn");
const output = document.querySelector('.output');

let quote = [
    "Be yourself; everyone else is already taken.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "True friends stab you in the front.",
    "Women are made to be Loved, not understood.",
    "Be the change that you wish to see in the world.",
    "Be yourself; everyone else is already taken.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "True friends stab you in the front.",
    "Women are made to be Loved, not understood.",
    "Be the change that you wish to see in the world.",

]

btn.addEventListener("click",()=>{
    let random = Math.floor(Math.random()*quote.length);
    output.textContent = quote[random];
}
)