const textInput = document.querySelector('input');
const textInputLength = document.querySelector('input[data-length="6"]').dataset.length;


textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(textInputLength)) {
        textInput.classList.replace('invalid', 'valid')
    } else {
        textInput.classList.add('valid', 'invalid')
    }
})
