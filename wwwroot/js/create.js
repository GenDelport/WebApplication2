$(document).ready(function () {
    $('#btnSaveCheckBox').click(function () {
        addCheckbox($('#checkBoxName').val());
        $('#checkBoxName').val("");
    });

    $(document).on('change', 'input[type="checkbox"]', updateProgress);

    $("#progressbar").progressbar({
        value: 0,
        max: 100
    });
});

function updateProgress() {
    var numAll = $('input[type="checkbox"]').length;
    var numChecked = $('input[type="checkbox"]:checked').length;

    if (numAll > 0) {
        var perc = (numChecked / numAll) * 100;
        $("#progressbar").progressbar("value", perc);
    }
}

function addCheckbox(name) {
    var container = $('#cblist');
    var inputs = container.find('input');
    var id = inputs.length + 1;

    $('<input />', { type: 'checkbox', id: 'cb' + id, value: name }).appendTo(container);
    $('<label />', { 'for': 'cb' + id, text: name }).appendTo(container);
    $('<br/>').appendTo(container);

    updateProgress();
}
