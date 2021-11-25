////$(document).ready(function () {
////    $('#btnSaveCheckBox').click(function () {
////        addCheckbox($('#checkBoxName').val());
////        $('#checkBoxName').val("");
////    });

////    $(function () {
////        $("#progressbar").progressbar({
////            value: 0,
////            max: 100,
////            change: function () {
////                var val = $("#progressbar").progressbar("value") || 0;
////                $("#percentage").text($("#progressbar").progressbar("value") + "%");
////            }
////        });

////    });

////    $('#btnDelete').click(function () {
////        $("#checkBoxName input:checked").parent().remove();
////    });
////});

////function addCheckbox(name) {
////    var container = $('#cblist');
////    var inputs = container.find('input');
////    var button = container.find('button');
////    var id = inputs.length + 1;



////    $('<input />', {
////        type: 'checkbox',
////        id: 'cb' + id,
////        value: name,
////        name: 'test'
////    }).appendTo(container);
////    $('<label />', {
////        'for': 'cb' + id,
////        text: name
////    }).appendTo(container);
////    $('<input />', {
////        'for': 'cb' + id,
////        type: 'submit',
////        value: 'deadline'
////    }).appendTo(container);
////    $('<input />', {
////        'for': 'cb' + id,
////        type: 'submit',
////        value: 'delete'
////    }).appendTo(container);
////    $('<br/>').appendTo(container);

////}

////function increaseProgressBar() {
////    var val = $("#progressbar").progressbar("value") || 0;
////    $("#progressbar").progressbar("value", val + 25);
////}
////function decreaseProgressBar() {
////    var val = $("#progressbar").progressbar("value") || 0;
////    $("#progressbar").progressbar("value", val + 25);
////}

////$('body').on('click', 'input[type=checkbox]', function () {
////    if ($(this).is(':checked')) {
////        increaseProgressBar();
////    }
////    else {
////        decreaseProgressBar();
////    }
////});

////$('body').on('click', 'input[type=checkbox]', function () {
////    if ($(this).is(':checked')) {
////        deleteCheckbox();

////    }
////})

////function deleteCheckbox() {
////    var val = $("#cb")
////}

//function myFunction() {
//    var x = document.createElement("input");
//    var y = document.createElement("input");
//    x.setAttribute("type", "checkbox");
//    y.setAttribute("type", "submit");
//    document.body.appendChild(y);
//    document.body.appendChild(x);
//}


//function Add() {

//    var checkbox = document.createElement('input');
//    checkbox.setAttribute("class", "checkboxlist");

//    var txtName = document.getElementsByClassName("taskInput");
//    var name = txtName.value;
//    var inps = document.createElement('input');
//    checkbox.setAttribute("class", "textlist");

//    var output = document.getElementById('output');
//    checkbox.type = 'checkbox';
//     inps.type = 'text';
//    inps.name = 'textboxname';
//    checkbox.name = 'checkname';
//    output.appendChild(checkbox);
//    output.appendChild(txtName);

//     output.appendChild(inps);
//    output.appendChild(document.createElement('br'));
//}

function Adds() {
    var checkbox = document.createElement('input');
    checkbox.setAttribute("class", "checkboxlist");
    var text = document.createElement('label');
    


    var txtInput = document.getElementById('taskInput');
    var output = document.getElementById('output');
    checkbox.type = 'checkbox';

    text.innerText = txtInput.value;
    text.setAttribute("class", "labelist");
    output.appendChild(checkbox);
    output.appendChild(document.createElement('br'));
    output.appendChild(text);

    output.appendChild(document.createElement('br'));
}

function delBoxes() {
    var boxes = document.getElementsByClassName('checkboxlist');
   
  

    var texts = document.getElementsByClassName('labelist');

   
    for (var i = 0; i < boxes.length; i++) {
        box = boxes[i];
        txt = texts[i];
        if (box.checked) {
            box.parentNode.removeChild(box);
            txt.parentNode.removeChild(txt);
            removeChild('br');
            removeChild('br');

        }
    }
}

//$("#deleteAcc").on("click", function () {
//    $("input:checkbox").each(function () {
//        if ($(this).is(":checked")) {
//            $(this).parent().remove();
//        }
//    });
//});

//var rmvBtn = document.getElementById('rmvBtn');

//rmvBtn.addEventListener('click', function () {
//    var rmvCheckBoxes = document.getElementsByName('test');
//    document.create

//    for (var i = 0; i < rmvCheckBoxes.length; i++) {
//        if (rmvCheckBoxes[i].checked) {
//            removeElm(rmvCheckBoxes[i]);
//        }
//    }
//});

//function removeElm(elm) {
//    elm.parentElement.removeChild(elm);
//}