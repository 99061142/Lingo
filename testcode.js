// Random word
const random = Math.floor(Math.random() * words.length);
var word = words[random].split('');

var chances = 0;

document.getElementById('guessed_word').placeholder = `Kies een woord met ${word.length} letters`; // Show the user what he must answer

// Check if the guessed word is a valid option
function word_validation(guessed_word){
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letter options
    letters_validation = true;

    // Check every letter of the guessed word
    for(const letter of guessed_word){
        // If the letter is not a valid character
        if(!letters.includes(letter)){
            letters_validation = false;
            break;
        }
    }
    
    return (guessed_word.length == word.length && letters_validation); // Return if every letter is a valid character
}


// If the user clicks submit
check.onclick = function(){
    const guessed_word = document.getElementById('guessed_word').value.toLowerCase().split(''); // Guessed word

	const validation = word_validation(guessed_word); // Get if the guessed word is valid
}