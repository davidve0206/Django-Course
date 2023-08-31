// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// REQUEST A NAME TO ADD/REMOVE

function requestName() {
    var name = prompt("What is the name of the student you want to add/remove?");
    return name
}

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew(name) {
    roster.push(name);
}


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function remove(name) {   
    if (roster.includes(name)) {
        roster.splice(roster.indexOf(name), 1);
    }
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display() {
    console.log(roster);
}

// Start by asking if they want to use the web app

var run = prompt("Would you like to run the app (y/n)?");

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

while (run == "y") {
    
    var action = prompt("Please select an action: add, remove, display, or quit.")

    if (action == "add") {
        student = requestName();
        addNew(student);
    } else if (action == "remove") {
        student = requestName()
        remove(student);
    } else if (action == "display") {
        display()
    } else if (action == "quit") {
        alert("Thanks for using the app! Reload the page if you want to start again.");
        break;
    } else {
        alert("Please select a valid action!")
    }
}