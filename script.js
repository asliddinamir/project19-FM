const btn = document.querySelector('.btn')
const dismissBtn = document.querySelector('#dismissBtn')
const signupForm = document.querySelector('.signup_form')
const successForm = document.querySelector('.success_form')
const inputValue = document.querySelector('.input')
const errorMsg = document.querySelector('.error')
const forwardedEmail = document.querySelector('.forward')
const emailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputValue.value === 0 || !inputValue.value.match(emailPattern)) {
        errorMsg.innerText = 'Valid Email Required'
        inputValue.style.backgroundColor = 'hsla(4, 49%, 77%, 0.357)'
    } else {
        signupForm.classList.add('hidden')
        successForm.classList.remove('hidden')
        forwardedEmail.innerText = inputValue.value + '. '
    }

})

dismissBtn.addEventListener('click', () => {
    signupForm.classList.remove('hidden')
    successForm.classList.add('hidden')
    inputValue.value = ''
    inputValue.style.backgroundColor = 'transparent'
    errorMsg.innerText = ''
})