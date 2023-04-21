function myFunction() {
    if (document.getElementById("field1").value == "" || document.getElementById("field2").value == "" || document.getElementById("field3").value == "") {
        alert("Some of the text boxes are empty, consider filling them");
    }

    letters = document.getElementById("field3").value
    sum = letters.length - 500
    if (letters.length > 500) {
        alert("You are over the limit by " + sum + " letters");
    }

}