// Random word
const word_position = Math.floor(Math.random() * words.length);
const word = words[word_position].split(''); // Word letters
var tries = 0; // Tries the user has done

document.getElementById('guessed_word').placeholder = `${word.length} letter word`; // Show what the user must answer


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


// Get every letter box in the row the user is on
function get_row_boxes(){
    return document.querySelectorAll(`#row_${tries} > div`);
}


// Change the styling of the letter boxes in the row
function change_letter_box_styling(guessed_word){
    const copied_word = [...word]; // Letters that are in the word

    row_boxes = get_row_boxes() // Row boxes

    // For the amount of letters inside the word
    for(i=0; i < word.length; i++){
        const guessed_letter = guessed_word[i]; // Letter the user guessed
        const letter_box = row_boxes[i] // Letter box
        letter_box.innerText = guessed_letter; // Add the letter to the box

        // If the guessed letter is in the correct position        
        if(copied_word[i] == guessed_letter){
            letter_box.style.backgroundColor = "green";
            copied_word[i] = ''; // Delete the guessed position
        }
        
        // If the guessed letter is not in the correct position
        else{
            letter_box.style.backgroundColor = (copied_word.includes(guessed_letter)) ? "orange" : "red";

            // If the guessed letter is in the wrong position
            if(copied_word.includes(guessed_letter)){
                letter_position = copied_word.indexOf(guessed_letter) // Position of the guessed letter
                copied_word[letter_position] = ''; // Delete the guessed position
            }   
        }
    }
}


// Always show the first letter inside the row
function show_first_letter(){
    const first_box = document.getElementById(`row_${tries}`).firstChild; // First box inside the row
    const starting_letter = word[0] // Starting letter of the word the user need to guess 

    first_box.innerText = starting_letter; // Add the first letter to the first box inside the row
    first_box.style.backgroundColor = "green";
}


// Make a new row with letter boxes
function make_boxes(){
    // Make the row
    const new_row = document.createElement('div');
    new_row.id = `row_${tries}`;
    new_row.className = "row";

    game_board.appendChild(new_row); // Add the row to the game board

    // For the amount of letters inside the word
    for(i = 0; i < word.length; i++){
        // Make the box for the letter
        const letter_box = document.createElement('div'); // Make the box for the letter
        new_row.appendChild(letter_box);  // Add the letter box to specific row
    }
}


// Check if the user guessed the word correctly
function check_correctly_guessed(word, guessed_word){
    var correctly_guessed = true;
    
    // For the amount of letters inside the word 
    for(i = 0; i < word.length; i++){
        var correct_letter = word[i]; // Correct letter
        var guessed_letter = guessed_word[i]; // Letter the user guessed

        // If the letters are not the same
        if(correct_letter != guessed_letter){
            correctly_guessed = false;
            break;
        }
    }

    return correctly_guessed
}


function clear_board(){
    const container = document.getElementById("container");

    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}



function end_screen(correctly_guessed, tries){
    var message = correctly_guessed ? "you won the game" : "you lost the game";
    message += ` the word was '${word.join('')}'.`;

    if(correctly_guessed){
        message += ` The tries you needed to guess the word was ${tries+1}/${word.length}`;
    }

    const end_title = document.createElement('h1');

    document.getElementById("container").appendChild(end_title); 
    end_title.innerText = message;
}



// If the user clicks submit
check.onclick = function(){
    const guessed_word = document.getElementById('guessed_word').value.toLowerCase().split(''); // Guessed word

	const validation = word_validation(guessed_word); // Get if the guessed word is valid

    if(validation){
        change_letter_box_styling(guessed_word) // Change the row styling with the word the user has guessed

        correctly_guessed = check_correctly_guessed(word, guessed_word)

        if(!correctly_guessed){
            tries++
            make_boxes() // Make the new row
            show_first_letter() // Show the first letter on the new row
        }

        if(correctly_guessed || tries == 5){
            clear_board()
            end_screen(correctly_guessed, tries)
        }
    }
}

// When the program starts
make_boxes() // Make the row
show_first_letter() // Show the first letter