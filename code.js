// Random word
const random = Math.floor(Math.random() * words.length);
var word = words[random].split('');


// Show the user the letters he guessed correctly / are in the word the user need to guess
function check_word(guessed_word = null){
    // Make a new row
	guessed_word_box = document.createElement('div');
	guessed_word_box.className = 'guessed_word_box'

	box_div.appendChild(guessed_word_box);

    for(i = 0; i < word.length; i++){
        // Make a new box
        letter_box = document.createElement('button');
        guessed_word_box.appendChild(letter_box);

        // When the game starts only the first letter gets shown
        if(!guessed_word && i == 0){
            // Change box styling
            letter_box.innerText = word[i];
            letter_box.style.backgroundColor = "green";
        }

        // If the game has begun, and the user is guessing the words
        else if(guessed_word){
            letter_box.innerText = guessed_word[i]; // Add the letter to the box


            // If the letter is in the correct position
            if(word[i] == guessed_word[i]){
                letter_box.style.backgroundColor = "green"; // Change box styling
                word[i] = ''; // Delete the guessed position
            }

            // If the letter is not in the correct position but it is in the word the user must guess
            else if(word.indexOf(guessed_word[i]) > -1){
                // Change box styling
                letter_box.style.backgroundColor = 'yellow';
                letter_box.style.borderRadius = '50%';

                var correct_position = word.indexOf(guessed_word[i]); // When the letter is in another position
                word[correct_position] = ''; // Delete the position where the guessed letter is
            }
        }
    }

    // Reset the letters if the user guessed a word
    if(guessed_word){
        word = words[random].split('');
    }
}
check_word()


// Check if the guessed word is a valid option
function word_validation(guessed_word){
    var validation = true;

    if(guessed_word.length == word.length){
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letter options

        // Check if the guessed letter is an option
        for(i = 0; i < word.length; i++){ 
            if(!letters.includes(guessed_word[i])){
                validation = false;
            }
        }
    }
    
    else{
        validation = false;
    }

    return validation;
}


// Error message if the word is not a valid option
function error_message(){
    document.getElementById('guessed_word').value = '' // Delete the input of the user
    document.getElementById('guessed_word').placeholder = `Kies een woord met ${word.length} letters` // Show the reason
}


// If the user clicks submit
check.onclick = function(){
    const guessed_word = document.getElementById('guessed_word').value.split('') // Guessed word

	const validation = word_validation(guessed_word) // Check if the guessed word is an option

    // If its a valid option
    if(validation){
        check_word(guessed_word) // Show the correctly guessed letters
    }
    
    // If its not a valid option
    else{
        error_message() // Show the error message
    }
}