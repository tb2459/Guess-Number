input = prompt("Choose your maximum number")
while (true){
    value = Math.round(input)
    if(isNaN(value) == true){
        input = prompt("That is not a number! Please input a number.")
    }
    else if(value<=0){
        input = prompt("The number must be positive and greater than Zero! Please input another number.")
    }
    else{
        num = Math.floor(Math.random() * Number(value)) + 1;
        break;
    }
}


let trials = [];
console.log("Max Value:", value)
console.log(num);

function comma_delimited(list){
    max_index = list.length;
    let i = 0;
    let final_result = "";
    while(i<max_index){
        if(i != (max_index-1)){
        final_result = final_result + list[i] + ", ";
        }
        else{
            final_result = final_result + list[i];
        }
        i++;
    }
    return final_result;
}
function do_guess() {
    
    let guess = document.getElementById("guess").value;

    let message = document.getElementById("message");

    if(isNaN(guess) == true){
            message.innerHTML = "That is not a number!";
        }
    
    else if ((Number(guess)>value) || (Number(guess)<1)){
            message.innerHTML = "That number is not in range, try again.";
        }
    else if(trials.indexOf(Number(guess)) != -1){
        message.innerHTML = "This number has been guessed already. Try another guess.";
    }
    else if(Number(guess) != num){
        trials.push(Number(guess));
        message.innerHTML = "Try another guess.";
    }
    else{
            trials.push(Number(guess));
            tries = trials.length
            comma_delimited_guesses = comma_delimited(trials);
            message.innerHTML = "You got it! It took you"+" "+tries+" "+"tries and your guesses were "+comma_delimited_guesses+".";

        }
    }
