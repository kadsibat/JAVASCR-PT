// Write a function that takes an array of characters and reverses the words order.


let word = prompt(`Enter a string:`);
let newWord = "";
for(let  i=word.length-1; i>=0; i--){

    newWord +=word[i];
  
}
console.log(newWord);
