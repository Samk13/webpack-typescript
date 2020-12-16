import  { formData } from './forms'

// ! mean that this should definitely be found or type script should throw an error
const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = formData(form);
    console.log(data);
})