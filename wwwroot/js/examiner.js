function addExaminer() {
    var number = document.getElementById('inputNumber').value;

    var surname = document.getElementById('inputSurname').value;

    var initials = document.getElementById('inputInitials').value;

    var title = document.querySelector('#inputTitle').value;

    var result = number + ', ' + surname + ', ' + initials + ', ' + title;

    document.getElementById('output').textContent = result;

    /*var output = document.getElementsByClassName('output');*/

    //output.appendChild(number);
    //output.appendChild(surname);
    //output.appendChild(initials);
    //output.appendChild(title);
}