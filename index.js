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
    	if(playersNums.length<10){
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
	payOut()
	
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
		blockArray[x-1].style.color = "white"
		blockArray[x-1].style.background = "black"
	}
	if(x.length > 1){
		for(i=0; i<x.length; i++){
			blockArray[x[i]-1].style.color = "white"
			blockArray[x[i]-1].style.background = "black"
		}
	}
}

function payOut(){
	if (x.length == 0){
		console.log("Not this time")
	}
	if(playersNums.length == 1 && x.length == 1){
		console.log("You win 3x your bet")
	}
	if(playersNums.length == 2 && x.length == 1){
		console.log("So close, but no")
	}
	if(playersNums.length == 2 && x.length == 2){
		console.log("Wow, you won 12x your bet.  Easy now.")
	}
	if(playersNums.length == 3 && x.length == 2){
		console.log("Oh, wow, almost!  But No.")
	}
	if(playersNums.length == 3 && x.length == 1){
		console.log("You can't even hit three numbers in keno you moron")
	}
	if(playersNums.length == 3 && x.length == 3){
		console.log("Oh!, easy with the 43x stuff")
	}
	if(playersNums.length == 4 && x.length == 4){
		console.log("Madonna Mia! You just got me for 130x your bet!")
	}
	if(playersNums.length == 4 && x.length == 3){
		console.log("That was close.  Take the 3x your bet and shut your hole.")
	}
	if(playersNums.length == 4 && x.length == 2){
		console.log("Nah, kid.  Two won't do.  Play again.")
	}
	if(playersNums.length == 4 && x.length == 1){
		console.log("You can take that one number you hit and jam it up your ass.")
	}
	if(playersNums.length == 5 && x.length == 5){
		console.log("You just cracked me for 800x your bet.  I'm pissed.")
	}
	if(playersNums.length == 5 && x.length == 4){
		console.log("That was too frigin close.  Giving you 10x your bet seems like a steal for me.")
	}
	if(playersNums.length == 5 && x.length == 3){
		console.log("Here.  Take your bet back.  You'll never hit five out of five you idiot!")
	}
	if(playersNums.length == 5 && x.length == 2){
		console.log("Two??  What are you gonna do with two numbers?  Scram.")
	}
	if(playersNums.length == 5 && x.length == 1){
		console.log("One number?  Stevie Wonder can pick one number out offive and he can't fuckin' see.")
	}
	if(playersNums.length == 6 && x.length == 6){
		console.log("1500x your bet??? What the f....")
	}
	if(playersNums.length == 6 && x.length == 6){
		console.log("1500x your bet??? What the f....")
	}
	if(playersNums.length == 6 && x.length == 5){
		console.log("Here you go hittin numbers now.  95x your bet is alot of money for a degenerate like you.")
	}
	if(playersNums.length == 6 && x.length == 4){
		console.log("You think you're gonna live off of these four out of six pays?  You're not. Take the 4x.")
	}
	if(playersNums.length == 6 && x.length == 3){
		console.log("Not even gonna give you your bet back for that.")
	}
	if(playersNums.length == 6 && x.length == 2){
		console.log("That's pitiful.  This ain't your game maybe")
	}
	if(playersNums.length == 6 && x.length == 1){
		console.log("One stinkin' number out of six.  How could you smile?")
	}
	if(playersNums.length == 7 && x.length == 7){
		console.log("That fuckin' hurt.  8000x your bet.")
	}
	if(playersNums.length == 7 && x.length == 6){
		console.log("350x ain't 8000x so I feel ok.")
	}
	if(playersNums.length == 7 && x.length == 5){
		console.log("25x is nothing to sneeze at.")
	}
	if(playersNums.length == 7 && x.length == 4){
		console.log("Take your money back, you'll just play again.")
	}
	if(playersNums.length == 7 && x.length == 3){
		console.log("Three doesn't do it here bo.")
	}
	if(playersNums.length == 7 && x.length == 2){
		console.log("Two won't do.")
	}
	if(playersNums.length == 7 && x.length == 1){
		console.log("One out of seven??  This is why I'm rich")
	}
	if(playersNums.length == 8 && x.length == 8){
		console.log("25,000x your bet.  Mr. Big Shot over here.")
	}
	if(playersNums.length == 8 && x.length == 7){
		console.log("You're a lucky bastard.  Take the 1500x your bet.")
	}
	if(playersNums.length == 8 && x.length == 6){
		console.log("90x your bet.  You're feelin'good right now, punk, huh?")
	}
	if(playersNums.length == 8 && x.length == 5){
		console.log("I can pay you 9x your bet all day long for what you lose.")
	}
	if(playersNums.length == 8 && x.length == 4){
		console.log("Four is a no-no here, pal.")
	}
	if(playersNums.length == 8 && x.length == 3){
		console.log("Three gets you a slap on the back.")
	}
	if(playersNums.length == 8 && x.length == 2){
		console.log("You suck at this.")
	}
	if(playersNums.length == 8 && x.length == 1){
		console.log("Did I mention you suck at this?")
	}
	if(playersNums.length == 9 && x.length == 9){
		console.log("I'm sick to my stomach.  50,000x your bet.")
	}
	if(playersNums.length == 9 && x.length == 8){
		console.log("Daddy Warbucks over here.  4000x your bet.")
	}
	if(playersNums.length == 9 && x.length == 7){
		console.log("What's going on today?  You shouldn't be winning 280x your bet.")
	}
	if(playersNums.length == 9 && x.length == 6){
		console.log("50x your bet is no joke.")
	}
	if(playersNums.length == 9 && x.length == 5){
		console.log("Take the 4x your bet, you'll need Uber fare home.")
	}
	if(playersNums.length == 9 && x.length == 4){
		console.log("Close but no.  You can't win.")
	}
	if(playersNums.length == 9 && x.length == 3){
		console.log("Three is also the number of brain cells you have in your head.")
	}
	if(playersNums.length == 9 && x.length == 2){
		console.log("You just dropped a deuce...in your pants!")
	}
	if(playersNums.length == 9 && x.length == 1){
		console.log("One number? Throw the money in the ocean and let me kick you in the nuts.")
	}
	if(playersNums.length == 10 && x.length == 10){
		console.log("25,000x your bet.  Mr. Big Shot over here.")
	}
	if(playersNums.length == 10 && x.length == 10){
		console.log("25,000x your bet.  Mr. Big Shot over here.")
	}
	if(playersNums.length == 10 && x.length == 10){
		console.log("Jack-fuckin-pot.  Take the 100,000x your bet.  You are banned!")
	}
	if(playersNums.length == 10 && x.length == 9){
		console.log("5000x your bet? You serious? I gotta tighten up the screws.")
	}
	if(playersNums.length == 10 && x.length == 8){
		console.log("1000x is a lot of money, buddy.  Kick your bet out of the dirt now.")
	}
	if(playersNums.length == 10 && x.length == 7){
		console.log("150x is nothing to me.  You'll never hit 7 outta 10 again.")
	}
	if(playersNums.length == 10 && x.length == 6){
		console.log("22x your bet is peanuts.  You weren't even close to the jackpot.")
	}
	if(playersNums.length == 10 && x.length == 5){
		console.log("You know what?  I'm not even giving you your bet back for 5 outta 10.")
	}
	if(playersNums.length == 10 && x.length == 4){
		console.log("You wanna know what 4 outta 10 wins?  Open your empty hand and see.")
	}
	if(playersNums.length == 10 && x.length == 3){
		console.log("Walk away.  Just go.")
	}
	if(playersNums.length == 10 && x.length == 2){
		console.log("You're embarrassing yourself now.  You want a paper bag to wear on your head?")
	}
	if(playersNums.length == 10 && x.length == 1){
		console.log("1 outta 10???  This ain't rocket science, kid.  You must be stupid.")
	}


	
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
