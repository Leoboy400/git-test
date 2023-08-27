const app = document.querySelector('.app');
const aside = document.querySelector('.aside');

function getForm(obg) {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let btn = document.createElement('button');

    let { plasholder = '1', text = '2' } = obg;

    input.placeholder = plasholder;
    input.classList.add('form__input')
    btn.textContent = text;

    form.append(input, btn);

    return {
        form: form,
        btn: btn,
        input: input
    }
}


let { form, btn } = getForm({
    text: 'nU I hUiny'
});

let one = getForm({
    text: 'zal132432423'
})

one.input.addEventListener('input', () => {
    console.log('rr')
})

app.append(form)



// function genericForm() {
//     let form = document.createElement('form');
//     let input = document.createElement('input');
//     let btn = document.createElement('button');




//     form.append(input, btn);

//     return form;

// }

