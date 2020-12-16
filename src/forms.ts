export const formData = (form: HTMLFormElement) => {
    const input = form.querySelectorAll('input');
    let value : {[prop: string]: string} = {};

    input.forEach(input => {
        value[input.id] = input.value;
    })

    return value;
}