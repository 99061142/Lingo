//Pakt een random lingo woord uit de array
var lingoWord = Math.floor(Math.random() * words.length);
var lingoWordChooser = words[lingoWord];
var lingoWordChooserSplitter = lingoWordChooser.split('');
//Checkt het 5 letter woord die de gebruiker heeft gekozen
var wordInput = document.getElementById("wordInput");


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
	//Splitst het geraden woord van de gebruiker
	var ownWordChooser = wordInput.value.split('');

	if(ownWordChooser.length == 5){
		//Maakt een nieuwe rij met de lettters
		for (i = 0; i < ownWordChooser.length; i++){
			var letters = document.createElement("button");
			wordshowerbox.appendChild(letters);
			letters.innerHTML = ownWordChooser[i-1+1]
			//Statement voor als de letter van het geraden woord overeenkomt met de letter van het lingo woord 
			if(lingoWordChooserSplitter[i-1+1] == ownWordChooser[i-1+1]){
				letters.style.backgroundColor = "red"
			}
			//Statement voor als de letter van het geraden woord niet op de juiste plek zit van het lingo woord 
			else if(ownWordChooser[i-1+1] !== lingoWordChooserSplitter[-1]){
				letters.style.backgroundColor = "yellow"
				letters.style.borderRadius = "50%";
			}	
		}
		
	}
}
console.log(lingoWordChooserSplitter)



