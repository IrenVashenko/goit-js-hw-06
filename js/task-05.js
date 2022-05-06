const textInput = document.querySelector('#name-input');
const titleSpan = document.querySelector('#name-output');

const titleNoChange = titleSpan.textContent;

textInput.oninput = function () {
    if (textInput.value === '') {
        titleSpan.append(titleNoChange);
    } else {
        titleSpan.append(textInput.value);
    }
}