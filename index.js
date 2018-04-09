var submit = document.getElementById("submit")
var kenoBoard = document.getElementById("kenoBoard")
let kenoBlock = document.createElement('div')
kenoBlock.setAttribute("class", "numbers")
var blockArray = []
var playersNums;

for(i=1; i<= 80; i++){
	playersNums = []
	let kenoBlock = document.createElement('div')
	kenoBlock.setAttribute("class", "numbers")
	kenoBlock.style.height = '80px'
	kenoBlock.style.width = '80px'
	kenoBlock.style.border = '1px solid black'
	kenoBlock.style.display = 'inLine-block'
	kenoBlock.style.fontSize = '25px'
	kenoBlock.style.textAlign = 'center'
	kenoBlock.style.background = "yellow"
	kenoBlock.innerHTML = i
	kenoBoard.appendChild(kenoBlock)
    blockArray.push(kenoBlock)
	
	kenoBlock.addEventListener("click", function(){
		if(playersNums.length<6){
			playersNums.push(kenoBlock.innerHTML)
			kenoBlock.style.background = "blue"

		}
		console.log(playersNums)
		
	})
	
     
}


function numPicked(){
	var selection = Math.floor((Math.random() * 80) + 1);
	return selection
}

function kenoNumbers(){
	let picks = []
	let num = 0
	while (picks.length < 20){
		num = numPicked()
		if(repeat(picks, num) == false){
			picks.push(num)
			if(blockArray[num].style.background = "blue"){
				blockArray[num].style.background = "green"
			}
			if(blockArray[num].style.background = "yellow"){
				blockArray[num].style.background = "red"


			}
		}
	}
 }


	


function repeat (arr, num){
  return (arr.indexOf(num) === -1) ? false : true
}



// submit.addEventListener("click", function(){


	




// })



// function firstFive (numString){
// 	    let numbers = []
// 	    let num = 0
// 	    while (numbers.length < 5){
// 	        let version = numberType(69)
// 	        if (version < 9){
// 	            do{
// 	                num = numString.split('')[(Math.floor(Math.random() * numString.length ))];
// 	            }
// 	            while (num == 0);
// 	            num = "0" + num
// 	        }
// 	        if (version >= 9){
// 	            do{
// 	                digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
// 	            }
// 	            while (digit1 > 6 || digit1 == 0);
// 	            digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
// 	            num = digit1.concat(digit2)


// 	        }
// 	        if (repeat (numbers, num) == false){
// 	            numbers.push(num)
// 	        }
// 	    }
// 	    return numbers
// 	}


  







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
