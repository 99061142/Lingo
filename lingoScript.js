//Pakt een lingo woord
const lingoWordChooser = Math.floor(Math.random() * words.length);
//Splitst het lingo woord in aparte letters
var lingoWordSplit = words[lingoWordChooser].split('');


//Maakt de buttonLetters aan
for(i = 0; i < lingoWordSplit.length; i++){ 
	var buttonLetters = document.createElement("button");
	whiteDiv.appendChild(buttonLetters);
	//De eerste letter wordt altijd weergeven
	if(i == 0){
		buttonLetters.innerText = lingoWordSplit[0];
		buttonLetters.style.backgroundColor = "green";
	}
}


var checkPresser = 0;
//De functie start als je op "CHECK" klikt
check.onclick = function(){
	//Checkt en splitst het 5 letter woord die de gebruiker heeft geraden
	var wordInput = document.getElementById("wordInput");
	var guessedWordSplit = wordInput.value.split('');

	
	//Als het geraden woord even lang is als het lingo woord mag de gebruiker verder
	if(guessedWordSplit.length == lingoWordSplit.length){
		//Maakt een nieuwe rij met de lettters
		for(i = 0; i < guessedWordSplit.length; i++){
			//Maakt een rij voor de letters met het geraden woord
			var buttonLetters = document.createElement("button");
			whiteDiv.appendChild(buttonLetters);
			buttonLetters.innerHTML = guessedWordSplit[i];

			//Als de letter van het geraden woord overeenkomt met de letter van het lingo woord 
			if(lingoWordSplit[i] == guessedWordSplit[i]){
				buttonLetters.style.backgroundColor = "green";
				lingoWordSplit[i] = "";
			}

			//Als de letter van het geraden woord niet op de juiste plek zit van het lingo woord 
			else if(lingoWordSplit.indexOf(guessedWordSplit[i]) > -1){
				buttonLetters.style.backgroundColor = "yellow";
				buttonLetters.style.borderRadius = "50%";
				var deleteLetter = lingoWordSplit.indexOf(guessedWordSplit[i]);
				lingoWordSplit[deleteLetter] = "";
			}
		}
		//Je kan maximaal 5 keer het woord gokken
		checkPresser++;
		if(checkPresser == 5){
			document.getElementById("check").disabled = true;
		}
	}
	//Maakt weer de array met het lingo woord aan
	lingoWordSplit = words[lingoWordChooser].split('');
}