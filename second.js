const mainArray = ['c', 'r', 'e', 'a', 't', 'e'];
const ayString = 'ay'
let counter = 0;
console.log('Main Array outside of the loop:', mainArray)


while (counter < mainArray.length){
  if (mainArray[0] !== 'a' && mainArray[0] !== 'e' && mainArray[0] !== 'i' && mainArray[0] !== 'o' && mainArray[0] !== 'u'){
      console.log('Are you broken?', mainArray[0]);
      mainArray.push(mainArray[0])
      mainArray.shift();
      console.log('Main Array after loop:', mainArray);
      counter++
  } else {
      console.log('This is the break', mainArray[0]);
      break
  }
  console.log('Post if statement', mainArray[0])
}

let pigLatinResults = mainArray.join("").concat(ayString)
console.log('Final Results',pigLatinResults)




// for (let i=0; i < mainArray.length; i++){
//   console.log('Outside of if block', mainArray[i])
  
//   if (mainArray[i] !== 'a' && mainArray[i] !== 'e' && mainArray[i] !== 'i' && mainArray[i] !== 'o' && mainArray[i] !== 'u'){
//     console.log('Are you broken?', mainArray[i]);
//     secondArray.unshift(mainArray[i]);
//     mainArray.shift();
//     console.log('Main Array after loop:', mainArray);
//     console.log('Second Array after loop:', secondArray);
//   } else {
//       console.log('This is the break', mainArray[i]);
//       break
//   }
//   console.log('Post if statement', mainArray[i])
// }