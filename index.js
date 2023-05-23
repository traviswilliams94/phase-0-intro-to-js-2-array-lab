// Write your solution here!

let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    cats.push('Ralph');
    return cats
}

function destructivelyPrependCat(name){
    cats.unshift('Bob');
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats
}

function appendCat(name){
    const appendCats = [...cats, 'Broom'];
    return appendCats
}

function prependCat(name){
    const prependCats = ['Arnold', ...cats];
    return prependCats
}

function removeLastCat(){
   let newCats = cats.slice(0, cats.length - 1);
   return newCats
}

function removeFirstCat(){
    let newerCats = cats.slice(1);
    return newerCats
}