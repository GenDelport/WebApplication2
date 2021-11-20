$(document).ready(function () {
    $('#btnSaveCheckBox').click(function () {
        addCheckbox($('#checkBoxName').val());
        $('#checkBoxName').val("");
    });

    $(function () {
        $("#progressbar").progressbar({
            value: 0,
            max: 100,
            change: function () {
                var val = $("#progressbar").progressbar("value") || 0;
                $("#percentage").text($("#progressbar").progressbar("value") + "%");
            }
        });

    });
});

function addCheckbox(name) {
    var container = $('#cblist');
    var inputs = container.find('input');
    var id = inputs.length + 1;

    

    $('<input />', {
        type: 'checkbox',
        id: 'cb' + id,
        value: name
    }).appendTo(container);
    $('<label />', {
        'for': 'cb' + id,
        text: name
    }).appendTo(container);
    $('<br/>').appendTo(container);

}

function increaseProgressBar() {
    var val = $("#progressbar").progressbar("value") || 0;
    $("#progressbar").progressbar("value", val + 25);
}
function decreaseProgressBar() {
    var val = $("#progressbar").progressbar("value") || 0;
    $("#progressbar").progressbar("value", val + 25);
}

$('body').on('click', 'input[type=checkbox]', function () {
    if ($(this).is(':checked')) {
        increaseProgressBar();
    }
    else {
        decreaseProgressBar();
    }
});