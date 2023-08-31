// Prompts requiring info, in order

var fname = prompt("What is your first name?");
var lname = prompt("What is your last name?");
var age = prompt("What is your age (in years)?");
var height = prompt("What is your height in centimeters?");
var pet = prompt("What is your pet's name?");
alert("Thank you for your information.")

if ((fname[0] == lname[0]) && (age > 20) && (age < 30) && (height >= 170) && (pet[pet.length-1] == "y")){
    console.log("Welcome comrade spy!")
} else{console.log("Nothing to see here.")}