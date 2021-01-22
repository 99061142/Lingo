//Pakt een random lingo woord uit de array
var lingoWord = Math.floor(Math.random() * words.length);
var lingoWordChooser = words[lingoWord];
var lingoWordChooserSplitter = lingoWordChooser.split('');


//Maakt de buttons aan
for (i = 0; i < lingoWordChooser.length; i++){
	var letters = document.createElement("button");
	wordshowerbox.appendChild(letters);
	//De eerste letter wordt altijd weergeven
	if(i == 0){
		letters.innerHTML = lingoWordChooser[0]
		letters.style.backgroundColor = "green"
	}
}


//De functie start als je op "CHECK" klikt
check.onclick = function(){
	//Checkt en splitst het 5 letter woord die de gebruiker heeft geraden
	var wordInput = document.getElementById("wordInput");
	var ownWordChooserSplitter = wordInput.value.split('');


	//Als het geraden woord even lang is als het lingo woord mag de gebruiker verder
	if(ownWordChooserSplitter.length == lingoWordChooser.length){
		//Maakt een nieuwe rij met de lettters
		for (i = 0; i < ownWordChooserSplitter.length; i++){
			var letters = document.createElement("button");
			wordshowerbox.appendChild(letters);
			letters.innerHTML = ownWordChooserSplitter[i-1+1]

			//Als de letter van het geraden woord overeenkomt met de letter van het lingo woord 
			if(lingoWordChooserSplitter[i] == ownWordChooserSplitter[i]){
				letters.style.backgroundColor = "green"
			}
			//Als de letter van het geraden woord niet op de juiste plek zit van het lingo woord 
			else if(lingoWordChooserSplitter.indexOf(ownWordChooserSplitter[i]) > -1){
				letters.style.backgroundColor = "yellow"
				letters.style.borderRadius = "50%";
			}	
		}
	}
}
console.log(lingoWordChooserSplitter)



