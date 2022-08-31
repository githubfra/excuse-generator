let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


function generateExcuse (whoArray, whatArray, whenArray) {
    let whatRandom = Math.floor(Math.random() * whatArray.length) 
    let whoRandom = Math.floor(Math.random() * whoArray.length)
    let whenRandom = Math.floor(Math.random() * whenArray.length)

    return who[whoRandom] + " " + what[whatRandom] + " " + when[whenRandom]
}

let result = generateExcuse(who, what, when);

const parrafo = document.querySelector("#excuse");
            
parrafo.innerHTML = result

console.log(result)