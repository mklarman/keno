var submit = document.getElementById("submit")
var kenoBoard = document.getElementById("kenoBoard")
let kenoBlock = document.createElement('div')
kenoBlock.setAttribute("class", "numbers")
var blockArray = []
var playersNums = []
var x = []
var numPicks = document.getElementById("numPicks")
var squares = document.getElementsByClassName("numbers")

for(i=1; i<= 80; i++){
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
	blockArray.push(kenoBlock)
	kenoBoard.appendChild(kenoBlock)
	kenoBlock.addEventListener("click", function(){
    	if(playersNums.length<6){
			kenoBlock.style.background = "blue"
			if(repeat(playersNums, kenoBlock.innerHTML) == false){
			playersNums.push(kenoBlock.innerHTML)
			console.log(playersNums.length)
			}
		}
		numPicks.innerHTML = playersNums
		// submit.addEventListener("click", function(){
		// 	console.log(playersNums)
  //   })
  //   blockArray.push(kenoBlock)

	})
}


submit.addEventListener("click", function(){
	kenoNumbers()
	findMatch()
	changeBackground()
	
})



// for(i=0; i<squares.length; i++){
// 	x.push(i)
// 	squares[i].addEventListener("click", function(){
// 		squares[6].style.background = "blue"
// 	})
// }

// 	kenoBlock.addEventListener("click", function(){
// 		if(playersNums.length<6){
// 			kenoBlock.style.background = "blue"
// 			if(repeat(playersNums, kenoBlock.innerHTML) == false){
// 			playersNums.push(kenoBlock.innerHTML)
// 			console.log(playersNums.length)
// 			}
// 		}
// 		numPicks.innerHTML = playersNums
// 		submit.addEventListener("click", function(){
// 			console.log(playersNums)

// 		})		
		
		
// 	})


// }


// function playerPicks(){
// 	for(i=0; i<blockArray.length; i++){
// 		blockArray[i].addEventListener("click", function(){
// 			blockArray[i].style.background = "blue"
// 		})
// 	// }
// 	// numbersDiv.style.background == "blue"
// 	// if(repeat(playersNums, numbersDiv.innerHTML) == false){
// 	// 	x.push(numbersDiv.innerHTML)
// 	// }
		
// 	}
// }



function repeat (arr, num){
  return (arr.indexOf(num) === -1) ? false : true
}


function numPicked(){
	var selection = Math.floor((Math.random() * 80) + 1);
	return selection
}
var picks = []
function kenoNumbers(){
	let num = 0
	while (picks.length < 20){
		num = numPicked()
		console.log(num)
		if(repeat(picks, num) == false){
			picks.push(num)
			blockArray[num-1].style.background = "red"
			
		}
	}
	
}



function findMatch(){
	for(i=0; i<playersNums.length; i++){
		// console.log(playersNums[i])
	
		for(z=0; z<picks.length; z++){
			if(playersNums[i] == picks[z]){
				x.push(playersNums[i])
			}

		}
	}
	console.log(x)
}
	

function changeBackground(){
	if(x.length == 0){
		console.log("no matches")
	}
	if(x.length == 1){
		blockArray[x[0]-1].style.background = "green"
	}
	if(x.length > 1){
		for(i=0; i<x.length; i++){
			blockArray[x[i]-1].style.background = "green"
		}
	}
}
	// var ary = new Array();
	// for(i = 0;i < arr2.length; i++){
  		
 //  		for(z = 0; z < arr2.length; z++){
    		
 //    		if(arr2[i] == arr1[z]){
 //      			ary.push(arr2[i]);
 //    		}
 //  		}

	// }
	// return ary







 



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
