function checkMe() {
    const checkBoxes = document.querySelectorAll(".form-check-input");
    const progress = document.querySelector(".progress-bar");
    const checklistProgressInterval = 100 / checkBoxes.length;
    var elem = document.getElementById("progress-bar");
    let width = 0;

    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            width += checklistProgressInterval;
            elem.innerHTML = width + "%";
        }
    }

    progress.style.width = `${width}%`;
    

    if (width == 100) {
        progress.style.backgroundColor= "#00ff21";
    }
    else if(width < 100){
        progress.style.backgroundColor = "#0094ff";
    }
    
}

var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
var $checkboxes = $("#form-check-form :checkbox");

$checkboxes.on("change", function () {
    $checkboxes.each(function () {
        checkboxValues[this.id] = this.checked;
    });
    localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});

$.each(checkboxValues, function (key, value) {
    $("#" + key).prop('checked', value);
});
