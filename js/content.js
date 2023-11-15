/*
File: content.js
Created: 11/14/2023
GUI Assignment: Interactive Dynamic Table
    My website consists of:
    - a dynamic multiplication table that changes based off input 
    - takes in numbers from -50 to 50
    - organized in a clean and consistent way

Sources: 
    https://stackoverflow.com/questions/64134943/how-to-get-value-from-an-input-field-in-javascript?rq=3
    https://stackoverflow.com/questions/28695617/how-to-get-a-number-value-from-an-input-field
    https://www.youtube.com/watch?v=5Oq6Eqy7Y_A
    https://www.w3schools.com/html/html_tables.asp
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_table_center
    https://www.w3schools.com/tags/tag_fieldset.asp
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sticky_element
    https://www.w3schools.com/howto/howto_css_sticky_element.asp

Copyright (c) 2023 by ThienTran. All rights reserved. 
May be freely copied/excerpted for educational purposes 
with credit to the author.

Updated by TL on 11/15/2023
*/

document.addEventListener("DOMContentLoaded", function(){
    let form = document.getElementById("myForm");
    form.addEventListener('submit', () => {
        let minCol = document.getElementById("minCol").value;
        let maxCol = document.getElementById("maxCol").value;
        let minRow = document.getElementById("minRow").value;
        let maxRow = document.getElementById("maxRow").value;
        //prints out nums to console, done for testing
        console.log(minCol); 
        console.log(maxCol); 
        console.log(minRow); 
        console.log(maxRow); 
        event.preventDefault(); // prevents the output from "flashing" before disappearing from console
        checkVals(); // checks values FIRST
    })
})

// checks values are properly inputted 
function checkVals() { 
    var minCol = parseInt(document.getElementById("minCol").value);
    var maxCol = parseInt(document.getElementById("maxCol").value);
    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);
    var Err = document.getElementById("error");
    
    // check that they filled out all fields 
    if (minCol == null || minCol == '' || 
        maxCol == null || maxCol == '' ||
        minRow == null || minRow == '' ||
        maxRow == null || maxRow == '') {
        Err.innerHTML = "You are missing an input field!";
    }
    else if (minCol == null || minCol == '' && 
             maxCol == null || maxCol == '' &&
             minRow == null || minRow == '' &&
             maxRow == null || maxRow == '') {
        Err.innerHTML = "You need to fill out all fields!";
    }
    // check input fits in constraints 
    // numbers are within -50 and 50
    else if (minCol < -50 || minCol > 50 || 
             maxCol < -50 || maxCol > 50 ||
             minRow < -50 || minRow > 50 ||
             maxRow < -50 || maxRow > 50) { 
        Err.innerHTML = "Your inputs are out of range (-50 to 50)!"
    }
    // min numbers are < than max numbers 
    else if (minCol > maxCol || minRow > maxRow) { 
        Err.innerHTML = "You need to reorder your input(s)!";
    }
    else {
        Err.innerHTML = ""; 
        multTable();
    }
}

function multTable() { // function to create mult table 
    // access the inputs 
    var minCol = parseInt(document.getElementById("minCol").value);
    var maxCol = parseInt(document.getElementById("maxCol").value);
    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);
    var table = document.getElementById("myTable"); // container grabbed from html file 
    var output = "";

    output += "<table>";

    //Creates display row
    output += "<tr>";
    output += "<td>&times;</td>";
    for (var j = minCol; j <= maxCol; j++) {
        output += "<th>" + j + "</th>";
    }
    output += "</tr>";

    //Creates full table
    for (var i = minRow; i <= maxRow; i++) { 
        output += "<tr>";
        for (var j = minCol; j <= maxCol; j++) {
            let res = i * j;
            if (j == minCol) {
                output += "<th>" + i + "</th>";
            }
            output += "<td>" + res + "</td>";
        }
        output += "</tr>";
    }
    output += "</table>";
    table.innerHTML=output;
}
