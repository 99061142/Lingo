// Random word
const word_position = Math.floor(Math.random() * words.length);
const word = words[word_position].split(''); // Word letters
var guessed_letters = Array(word.length).fill(""); // Letters that are in the word

var tries = 0; // Tries the user has done

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


// Get every letter box in the row the user is on
function get_row_boxes(){
    return document.querySelectorAll(`#row_${tries} > div`);
}


// Change the styling of the letter boxes in the row
function change_letter_box_styling(guessed_word){
    const letters_in_word = [...word]; // Letters that are in the word

    row_boxes = get_row_boxes()

    // Loop through every letter in the word
    word.forEach((correct_letter, i) => {
        const letter_box = row_boxes[i]; // Letter box element
        const guessed_letter = guessed_word[i]; // Letter the user guessed inside the element

        // If the guessed letter is correct
        if(correct_letter == guessed_letter){
            letter_box.style.backgroundColor = "green";
        }
        
        // If the guessed letter is not correct
        else{
            letter_box.style.backgroundColor = (letters_in_word.includes(guessed_letter)) ? "orange" : "red";
        }
    
        // If the letter is in the word (and not yet deleted)
        if(letter_box.style.backgroundColor != "red"){
            letters_in_word.splice(letters_in_word.indexOf(guessed_letter), 1); // Delete the letter inside the optional letters
        }

        letter_box.innerText = guessed_letter;
    });
}


function show_first_letter(){
    row_boxes = get_row_boxes() // Get every letter box element inside the row

    row_boxes[0].innerText = word[0]; // Add the first letter to the first letter box
    row_boxes[0].style.backgroundColor = "green";
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


// If the user clicks submit
check.onclick = function(){
    const guessed_word = document.getElementById('guessed_word').value.toLowerCase().split(''); // Guessed word

	const validation = word_validation(guessed_word); // Get if the guessed word is valid

    if(validation){
        change_letter_box_styling(guessed_word) // Change the row styling with the word the user has guessed



        tries++
        make_boxes() // Make the new row
        show_first_letter() // Show the first letter on the new row


        if(tries == 5){
            console.log("end")
        }
    }
}

// When the program starts
make_boxes() // Make the row
show_first_letter() // Show the first letter