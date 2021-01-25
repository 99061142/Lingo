//Pakt een lingo woord
//const lingoWordChooser = Math.floor(Math.random() * words.length);
//Splitst het lingo woord in aparte buttons
//var lingoWordSplit = words[lingoWordChooser].split('');
var words = "water";
var lingoWordSplit = words.split('');


//Maakt de buttons aan
for (i = 0; i < lingoWordSplit.length; i++){ 
	var buttons = document.createElement("button");
	wordshowerbox.appendChild(buttons);
	//De eerste letter wordt altijd weergeven
	if(i == 0){
		buttons.innerText = lingoWordSplit[0]
		buttons.style.backgroundColor = "green"
	}
}


//De functie start als je op "CHECK" klikt
var checkPresser = 0;
check.onclick = function(){
	//Checkt en splitst het 5 letter woord die de gebruiker heeft geraden
	var wordInput = document.getElementById("wordInput");
	var guessedWordSplit = wordInput.value.split('');

	
	//Als het geraden woord even lang is als het lingo woord mag de gebruiker verder
	if(guessedWordSplit.length == lingoWordSplit.length){
		//Maakt een nieuwe rij met de lettters
		for (i = 0; i < guessedWordSplit.length; i++){
			//Maakt een rij voor de buttons met het geraden woord
			var buttons = document.createElement("button");
			wordshowerbox.appendChild(buttons);
			buttons.innerText = guessedWordSplit[i]

			//Als de letter van het geraden woord overeenkomt met de letter van het lingo woord 
			if(lingoWordSplit[i] == guessedWordSplit[i]){
				buttons.style.backgroundColor = "green"
				lingoWordSplit[i] = ""
			}

			//Als de letter van het geraden woord niet op de juiste plek zit van het lingo woord 
			else if(lingoWordSplit.indexOf(guessedWordSplit[i]) > -1){
				buttons.style.backgroundColor = "yellow"
				buttons.style.borderRadius = "50%";
				var deleteLetter = lingoWordSplit.indexOf(guessedWordSplit[i])
				lingoWordSplit[deleteLetter] = "";
			}
		}
		//Je kan maximaal 5 keer gokken
		checkPresser++
		if(checkPresser == 5){
			document.getElementById("check").disabled = true
		}
	}
	//Maakt weer de array met het lingo woord aan
	lingoWordSplit = words.split('');
}
console.log(lingoWordSplit)