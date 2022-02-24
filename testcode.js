// Random word
const word_position = Math.floor(Math.random() * words.length);
const word = words[word_position].split('');
var guessed_letters = [];

var tries = 0;

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





function make_boxes(){
    new_row = document.createElement('div');
    new_row.className = "row";
    game_board.appendChild(new_row);

    for(i = 1; i <= word.length; i++){
        letter_box = document.createElement('div');
        new_row.appendChild(letter_box);
    }
}
make_boxes()



// If the user clicks submit
check.onclick = function(){
    const guessed_word = document.getElementById('guessed_word').value.toLowerCase().split(''); // Guessed word

	const validation = word_validation(guessed_word); // Get if the guessed word is valid
}