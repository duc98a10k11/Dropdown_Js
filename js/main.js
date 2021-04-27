// mảng li
const list_LI = [
    { text: "dropdown 1", value: 1 },
    { text: "dropdown 2", value: 2 },
    { text: "dropdown 3", value: 3 }
]

const ulTagName = document.getElementsByTagName("UL");

/* 
 * liTagName: getElement LI.
 */
const liTagName = document.getElementsByTagName('LI');

const currentFocus = -1;
// 
$(document).ready(function() {
    ClickUpDown()
});

function AppendElement(arr) {

    var element = ulTagName[0];

    for (let i = 0; i < arr.length; i++) {
        if (liTagName.length < arr.length) {
            var span = document.createElement("LI");
            span.innerHTML = arr[i].text.toString();
            span.setAttribute('value', arr[i].value.toString());
            element.appendChild(span);
        }
    }
}

function ClickUpDown() {
    $("button").click(function() {
        if ($(".data-list").hasClass('invisiable')) {
            var value = $("#item-field").val();
            $('.data-list').children().remove();
            AppendElement(list_LI);
            for (let i = 0; i < list_LI.length; i++) {
                if (list_LI[i].text == value) {
                    $('.data-list')[0].getElementsByTagName('LI')[i].classList.add('checked');
                }
            }
            $('.data-list').removeClass('invisiable');
            // currentFocus = -1;

        } else {

            $('.data-list').addClass('invisiable');
            AppendElement(list_LI);
        }

    });
}