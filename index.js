var bet;
var message = document.getElementById("message")
var bank = document.getElementById("bank")
var submit = document.getElementById("submit")
var kenoBoard = document.getElementById("kenoBoard")
let kenoBlock = document.createElement('div')
kenoBlock.setAttribute("class", "numbers")
var blockArray = []
var playersNums = []
var x = []
var numPicks = document.getElementById("numPicks")
var picks = []
var bankroll = 500
message.innerHTML = "Play some Keno"
bank.innerHTML = bankroll





function playKeno(){
	if(blockArray.length == 0){
		bet = prompt("How much you wanna bet on this game?");
		bank.innerHTML = bankroll - parseInt(bet)
		if(parseInt(bet)>50)
		message.innerHTML = "$" + bet + " bet, huh?  You must think you're somebody.  Well, you're not."
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
			})
		}

		submit.addEventListener("click", function(){
			kenoNumbers()
			findMatch()
			changeBackground()
			payOut()
		
		})
   }else{

   		for(i=0; i < picks.length; i++){
			blockArray[picks[i] -1].style.background = "yellow"
			blockArray[picks[i] -1].style.color = "black"
		}
		for(i=0; i < playersNums.length; i++){
			blockArray[playersNums[i] -1].style.background = "yellow"
			blockArray[playersNums[i] -1].style.color = "black"
		}
		picks = []
		playersNums = []
		x = []
		bet = prompt("How much you wanna bet on this game?");
		bank.innerHTML = bankroll - parseInt(bet)
		if(parseInt(bet)>50)
		message.innerHTML = "$" + bet + " bet, huh?  You must think you're somebody.  Well, you're not."
		submit.addEventListener("click", function(){
			kenoNumbers()
			findMatch()
			changeBackground()
			payOut()		
	})


   }
	
}

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

function repeat (arr, num){
  return (arr.indexOf(num) === -1) ? false : true
}

function numPicked(){
	var selection = Math.floor((Math.random() * 80) + 1);
	return selection
}


function findMatch(){
	for(i=0; i<playersNums.length; i++){
	
		for(z=0; z<picks.length; z++){
			if(playersNums[i] == picks[z]){
				x.push(playersNums[i])
			}

		}
	}
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
		message.innerHTML = "That's a big zilch.  Nada.  Zip.  Goose egg.  Know what I mean?"
	}
	if(playersNums.length == 1 && x.length == 1){
		message.innerHTML = "You win 3x your bet, you lucky S-O-B"
		bank.innerHTML = (parseInt(bet) * 3) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 2 && x.length == 1){
		message.innerHTML = "So close, but no"
	}
	if(playersNums.length == 2 && x.length == 2){
		message.innerHTML = "Wow, you won 12x your bet.  Easy now."
		bank.innerHTML = (parseInt(bet) * 12) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 3 && x.length == 2){
		message.innerHTML = "Oh, wow, almost!  But No."
	}
	if(playersNums.length == 3 && x.length == 1){
		message.innerHTML = "You can't even hit three numbers in keno you moron"
	}
	if(playersNums.length == 3 && x.length == 3){
		message.innerHTML = "Oh!, easy with the 43x stuff"
		bank.innerHTML = (parseInt(bet) * 43) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 4 && x.length == 4){
		message.innerHTML = "Madonna Mia! You just got me for 130x your bet!"
		bank.innerHTML = (parseInt(bet) * 130) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 4 && x.length == 3){
		message.innerHTML = "That was close.  Take the 3x your bet and shut your hole."
		bank.innerHTML = (parseInt(bet) * 3) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 4 && x.length == 2){
		message.innerHTML = "Nah, kid.  Two won't do.  Play again."
	}
	if(playersNums.length == 4 && x.length == 1){
		message.innerHTML = "You can take that one number you hit and jam it up your ass."
	}
	if(playersNums.length == 5 && x.length == 5){
		message.innerHTML = "You just cracked me for 800x your bet.  I'm pissed."
		bank.innerHTML = (parseInt(bet) * 800) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 5 && x.length == 4){
		message.innerHTML = "That was too frigin close.  Giving you 10x your bet seems like a steal for me."
		bank.innerHTML = (parseInt(bet) * 10) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 5 && x.length == 3){
		message.innerHTML = "Here.  Take your bet back.  You'll never hit five out of five you idiot!"
		bank.innerHTML = bankroll
	}
	if(playersNums.length == 5 && x.length == 2){
		message.innerHTML = "Two??  What are you gonna do with two numbers?  Scram."
	}
	if(playersNums.length == 5 && x.length == 1){
		message.innerHTML = "One number?  Stevie Wonder can pick one number outta five and he can't fuckin' see."
	}
	if(playersNums.length == 6 && x.length == 6){
		message.innerHTML = "1500x your bet??? What the f...."
		bank.innerHTML = (parseInt(bet) * 1500) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 6 && x.length == 5){
		message.innerHTML = "Here you go hittin numbers now.  95x your bet is alot of money for a degenerate like you."
		bank.innerHTML = (parseInt(bet) * 95) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 6 && x.length == 4){
		message.innerHTML = "You think you're gonna live off of these four out of six pays?  You're not. Take the 4x."
		bank.innerHTML = (parseInt(bet) * 4) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 6 && x.length == 3){
		message.innerHTML = "Not even gonna give you your bet back for that."
	}
	if(playersNums.length == 6 && x.length == 2){
		message.innerHTML = "That's pitiful.  This ain't your game maybe"
	}
	if(playersNums.length == 6 && x.length == 1){
		message.innerHTML = "One stinkin' number out of six.  How could you smile?"
	}
	if(playersNums.length == 7 && x.length == 7){
		message.innerHTML = "That fuckin' hurt.  8000x your bet."
		bank.innerHTML = (parseInt(bet) * 8000) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 7 && x.length == 6){
		message.innerHTML = "350x ain't 8000x so I feel ok."
		bank.innerHTML = (parseInt(bet) * 350) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 7 && x.length == 5){
		message.innerHTML = "25x is nothing to sneeze at."
		bank.innerHTML = (parseInt(bet) * 25) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 7 && x.length == 4){
		message.innerHTML = "Take your money back, you'll just play again."
		bank.innerHTML = bankroll
	}
	if(playersNums.length == 7 && x.length == 3){
		message.innerHTML = "Three doesn't do it here bo."
	}
	if(playersNums.length == 7 && x.length == 2){
		message.innerHTML = "Two won't do."
	}
	if(playersNums.length == 7 && x.length == 1){
		message.innerHTML = "One out of seven??  This is why I'm rich"
	}
	if(playersNums.length == 8 && x.length == 8){
		message.innerHTML = "25,000x your bet.  Mr. Big Shot over here."
		bank.innerHTML = (parseInt(bet) * 25000) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 8 && x.length == 7){
		message.innerHTML = "You're a lucky bastard.  Take the 1500x your bet."
		bank.innerHTML = (parseInt(bet) * 1500) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 8 && x.length == 6){
		message.innerHTML = "90x your bet.  You're feelin'good right now, punk, huh?"
		bank.innerHTML = (parseInt(bet) * 90) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 8 && x.length == 5){
		message.innerHTML = "I can pay you 9x your bet all day long for what you lose."
		bank.innerHTML = (parseInt(bet) * 9) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 8 && x.length == 4){
		message.innerHTML = "Four is a no-no here, pal."
	}
	if(playersNums.length == 8 && x.length == 3){
		message.innerHTML = "Three gets you a slap on the back."
	}
	if(playersNums.length == 8 && x.length == 2){
		message.innerHTML = "You suck at this."
	}
	if(playersNums.length == 8 && x.length == 1){
		message.innerHTML = "Did I mention you suck at this?"
	}
	if(playersNums.length == 9 && x.length == 9){
		message.innerHTML = "I'm sick to my stomach.  50,000x your bet."
		bank.innerHTML = (parseInt(bet) * 50000) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 9 && x.length == 8){
		message.innerHTML = "Daddy Warbucks over here.  4000x your bet."
		bank.innerHTML = (parseInt(bet) * 4000) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 9 && x.length == 7){
		message.innerHTML = "What's going on today?  You shouldn't be winning 280x your bet."
		bank.innerHTML = (parseInt(bet) * 280) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 9 && x.length == 6){
		message.innerHTML = "50x your bet is no joke."
		bank.innerHTML = (parseInt(bet) * 50) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 9 && x.length == 5){
		message.innerHTML = "Take the 4x your bet, you'll need Uber fare home."
		bank.innerHTML = (parseInt(bet) * 4) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 9 && x.length == 4){
		message.innerHTML = "Close but no.  You can't win."
	}
	if(playersNums.length == 9 && x.length == 3){
		message.innerHTML = "Three is also the number of brain cells you have in your head."
	}
	if(playersNums.length == 9 && x.length == 2){
		message.innerHTML = "You just dropped a deuce...in your pants!"
	}
	if(playersNums.length == 9 && x.length == 1){
		message.innerHTML = "One number? Throw the money in the ocean and let me kick you in the nuts."
	}
	if(playersNums.length == 10 && x.length == 10){
		message.innerHTML = "Jack-fuckin-pot.  Take the 100,000x your bet.  You are banned!"
		bank.innerHTML = (parseInt(bet) * 100000) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 10 && x.length == 9){
		message.innerHTML = "5000x your bet? You serious? I gotta tighten up the screws."
		bank.innerHTML = (parseInt(bet) * 5000) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 10 && x.length == 8){
		message.innerHTML = "1000x is a lot of money, buddy.  Kick your bet out of the dirt now."
		bank.innerHTML = (parseInt(bet) * 1000) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 10 && x.length == 7){
		message.innerHTML = "150x is nothing to me.  You'll never hit 7 outta 10 again."
		bank.innerHTML = (parseInt(bet) * 150) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 10 && x.length == 6){
		message.innerHTML = "22x your bet is peanuts.  You weren't even close to the jackpot."
		bank.innerHTML = (parseInt(bet) * 22) + parseInt(bet) + (bankroll - parseInt(bet))
	}
	if(playersNums.length == 10 && x.length == 5){
		message.innerHTML = "You know what?  I'm not even giving you your bet back for 5 outta 10."
	}
	if(playersNums.length == 10 && x.length == 4){
		message.innerHTML = "You wanna know what 4 outta 10 wins?  Open your empty hand and see."
	}
	if(playersNums.length == 10 && x.length == 3){
		message.innerHTML = "Walk away.  Just go."
	}
	if(playersNums.length == 10 && x.length == 2){
		message.innerHTML = "You're embarrassing yourself now.  You want a paper bag to wear on your head?"
	}
	if(playersNums.length == 10 && x.length == 1){
		message.innerHTML = "1 outta 10???  This ain't rocket science, kid.  You must be stupid."
	}
	
}

