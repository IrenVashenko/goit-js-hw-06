
const form = document.querySelector('.login-form');
let arr = {}
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' | password.value === '') {
        alert("Все поля должны быть заполнены")
    }
    else {
        arr[email.value] = password.value
        console.log(arr)
    }
    document.querySelector('.login-form').reset()
})

