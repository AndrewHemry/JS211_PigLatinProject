import mainConverter from './main'

let input = ''

const resetButton = document.getElementById('resetButton')
const translateButton = document.getElementById('translateButton')
const inputText = document.getElementById('user-input')


// 1. TEST INPUT TO CONSOLE
inputText.addEventListener('keyup', (event) => {
    input = event.target.value
    console.log(input)
  })
  
  // 2. TEST TRANSLATE BUTTON
  resetButton.addEventListener('click', (event) => {
    console.log(mainConverter(word))
  })


  // 3. TEST RESET BUTTON