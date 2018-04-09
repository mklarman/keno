for(i=1; i<= 80; i++){
	let kenoBlock = document.createElement('div')
	kenoBlock.setAttribute("class", "numbers")
	kenoBlock.style.height = '80px'
	kenoBlock.style.width = '80px'
	kenoBlock.style.border = '1px solid black'
	kenoBlock.style.display = 'inLine-block'
	kenoBlock.style.fontSize = '25px'
	kenoBlock.style.textAlign = 'center'
	kenoBlock.innerHTML = i
	
	kenoBlock.addEventListener("click", function(){
		kenoBlock.style.background = "green"

	})
	
     kenoBoard.appendChild(kenoBlock)
}
  







  // hiddenLetters = document.createElement('div') 
  // hiddenLetters.setAttribute("class", "letter")
  // hiddenLetters.style.height = '35px'
  // hiddenLetters.style.width = '35px'
  // hiddenLetters.style.borderBottom = 'solid white'
  // hiddenLetters.style.display = 'inLine-block'
  // hiddenLetters.style.marginLeft = '15px'
  // hiddenLetters.style.marginTop = '27px'
  // hiddenLetters.style.fontSize = '23'
  // hiddenLetters.style.textAlign = 'center'
  // wordToGuess.appendChild(hiddenLetters)
  // }
