// Variables
const lingoWordChooser = Math.floor(Math.random() * words.length);
var lingoWordSplit = words[lingoWordChooser].split('');
var buttonLetters, text, wordShower, userwordShower;
var correctCounter = checkPresser = 0;


// Maakt de eerste rij aan voor de letters
for(i = 0; i < lingoWordSplit.length; i++){ 
	buttonLetters = document.createElement('button');
	whiteDiv.appendChild(buttonLetters);
	// De eerste letter wordt altijd weergeven
	if(i == 0){
		buttonLetters.innerText = lingoWordSplit[0];
		buttonLetters.style.backgroundColor = 'green';
	}
}




check.onclick = function(){
	// Checkt en splitst het 5 letter woord die de gebruiker heeft geraden
	var wordInput = document.getElementById('wordInput');
	var guessedWordSplit = wordInput.value.split('');

	
	// Als het geraden woord even lang is als het lingo woord mag de gebruiker verder
	if(guessedWordSplit.length == lingoWordSplit.length){
		for(i = 0; i < lingoWordSplit.length; i++){ 
			if(guessedWordSplit[i] === lingoWordSplit[i]){ correctCounter++; }
		}
		// Maakt een nieuwe rij met de lettters
		for(i = 0; i < guessedWordSplit.length; i++){
			// Maakt een rij voor de letters met het geraden woord
			buttonLetters = document.createElement('button');
			whiteDiv.appendChild(buttonLetters);
			buttonLetters.innerHTML = guessedWordSplit[i];

			// Als de letter van het geraden woord overeenkomt met de letter van het lingo woord
			if(lingoWordSplit[i] == guessedWordSplit[i]){
				buttonLetters.style.backgroundColor = 'green';
				lingoWordSplit[i] = '';
			}

			//Als de letter van het geraden woord niet op de juiste plek zit van het lingo woord
			else if(lingoWordSplit.indexOf(guessedWordSplit[i]) > -1){
				buttonLetters.style.backgroundColor = 'yellow';
				buttonLetters.style.borderRadius = '50%';
				var deleteLetter = lingoWordSplit.indexOf(guessedWordSplit[i]);
				lingoWordSplit[deleteLetter] = '';
			}
		}
		// Vult weer de lingo array met het woord
		lingoWordSplit = words[lingoWordChooser].split('');


		checkPresser++;
		// Het bord wordt verwijderd als je 5 keer hebt geraden, of het woord goed hebt geraden
		if(checkPresser == 5 || correctCounter == 5){
			document.getElementById('gameboard').remove();
			text = document.createElement('h1');
			wordShower = document.createElement('h2');
			userwordShower = document.createElement('h2');
			document.body.appendChild(text);
			document.body.appendChild(wordShower);
			document.body.appendChild(userwordShower);


			wordShower.innerHTML = 'Het woord was ' + lingoWordSplit.join('');
			if(correctCounter == 5){ 
				document.body.style.backgroundColor = 'green'; 
				text.innerHTML = 'Je hebt gewonnnen';
				userwordShower.innerHTML = 'Jou woord was ' + guessedWordSplit.join('');
			}else{ 
				document.body.style.backgroundColor = 'red'; 
				text.innerHTML = 'Je hebt verloren';
				userwordShower.innerHTML = 'Jou laatste gok was ' + guessedWordSplit.join('');
			}	
			checkPresser = 0;
		}
		correctCounter = 0;
	}
}