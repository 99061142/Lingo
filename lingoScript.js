//Pakt een lingo woord
const lingoWordChooser = Math.floor(Math.random() * words.length);
//Splitst het lingo woord in aparte buttons
var lingoWordSplit = words[lingoWordChooser].split('');


//Maakt de buttons aan
for (i = 0; i < lingoWordSplit.length; i++){ 
	var buttons = document.createElement("button");
	wordshowerbox.appendChild(buttons);
	//De eerste letter wordt altijd weergeven
	if(i == 0){
		buttons.innerHTML = lingoWordSplit[0]
		buttons.style.backgroundColor = "green"
	}
}


//De functie start als je op "CHECK" klikt
check.onclick = function(){
	//Checkt en splitst het 5 letter woord die de gebruiker heeft geraden
	var wordInput = document.getElementById("wordInput");
	var guessedWord = wordInput.value.split('');

	
	//Als het geraden woord even lang is als het lingo woord mag de gebruiker verder
	if(guessedWord.length == lingoWordSplit.length){
		//Maakt een nieuwe rij met de lettters
		for (i = 0; i < guessedWord.length; i++){
			//Maakt een rij voor de buttons met het geraden woord
			var buttons = document.createElement("button");
			wordshowerbox.appendChild(buttons);
			buttons.innerHTML = guessedWord[i]

			//Als de letter van het geraden woord overeenkomt met de letter van het lingo woord 
			if(lingoWordSplit[i] == guessedWord[i]){
				buttons.style.backgroundColor = "green"
			}
			//Als de letter van het geraden woord niet op de juiste plek zit van het lingo woord 
			else if(lingoWordSplit.indexOf(guessedWord[i]) > -1){
				buttons.style.backgroundColor = "yellow"
				buttons.style.borderRadius = "50%";
			}
		}
	}
}
console.log(lingoWordSplit)
