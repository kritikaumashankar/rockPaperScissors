var startButton = document.getElementById("start")
var exitButton = document.getElementById("exit")
var newGameButton = document.getElementById("newGame")
var rockImg = document.getElementById("rock")
var paperImg = document.getElementById("paper")
var scissorsImg = document.getElementById("scissors")
var userSelect = document.getElementById("userSelect")
var computerSelect = document.getElementById("computerSelect")
var imgDiv = document.getElementById("images")
var userWin = document.getElementById("win")
var userLoses = document.getElementById("loses")
var userDraw = document.getElementById("draw")
var total = document.getElementById("total")
var msg = document.getElementById("msg")
var user = document.getElementById("user")
var comp = document.getElementById("comp")

var arr = ['Rock','Paper','Scissors']
var rock =0
var paper =0
var scissors =0
var win = 0
var loses =0
var draw = 0
var totalGame = 0
	

	startButton.addEventListener('click',function(){
		imgDiv.style.display = 'inline-block';
		startButton.style.display = 'none';
	})

	

	rockImg.addEventListener('click',function(){
		rock = 1
		userSelect.value = 'Rock'
		userSelect.innerHTML = 'Rock'
		console.log("rock"+userSelect.value)
		userPoints(userSelect.value)
	})
	paperImg.addEventListener('click',function(){
		paper = 1
		userSelect.value = 'Paper'
		userSelect.innerHTML = 'Paper'
		console.log("paper"+userSelect.value)
		userPoints(userSelect.value)
	})
	scissorsImg.addEventListener('click',function(){
		scissors = 1
		userSelect.value = 'Scissors'
		userSelect.innerHTML = 'Scissors'
		console.log("Scissors"+userSelect.value)
		userPoints(userSelect.value)
	})

	function userPoints(userValue){
		console.log("inside computer select")
		compValue = arr[Math.floor(Math.random() * arr.length)]
		computerSelect.innerHTML = compValue
		var resultText =''
		
			
		if(userValue === compValue){
			draw++
			msg.innerHTML = "ITS A DRAW!!!"
			user.style.background = "blue"
			comp.style.background = "blue"
			

		}else if((userValue === 'Rock' && compValue ==='Paper') || (userValue === 'Paper' && compValue === 'Scissors') 
			|| (userValue === 'Scissors' && compValue === 'Rock')){
			loses++
			msg.innerHTML =  "COMPUTER WINS!!"
			user.style.background = "red"
			comp.style.background = "green"
		}else {
			win++
			msg.innerHTML = "USER WINS!!"
			user.style.background = "green"
			comp.style.background = "red"
		}
			
			
			userWin.innerHTML = win
			userLoses.innerHTML = loses
			userDraw.innerHTML = draw
			total.innerHTML = ++totalGame

	}

	function exit(){
		location.reload();
	}

	function newGame(){
			userWin.innerHTML = 0
			userLoses.innerHTML = 0
			userDraw.innerHTML = 0
			total.innerHTML = 0
			user.style.background = "none"
			comp.style.background = "none"
			userSelect.innerHTML = ''
			computerSelect.innerHTML = ''
			msg.innerHTML = ''
	}

	