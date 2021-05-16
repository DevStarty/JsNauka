const inputOpt = document.querySelector('input');
const arrayOptions = [];
const h2 = document.querySelector('h2');
const addReset = document.querySelector('.clean');
const btnAdvice = document.querySelector('.showAdvice');
const btnOptions = document.querySelector('.showOptions');
const h1 = document.querySelector('h2');


const addOptions = (e) => {

    e.preventDefault();
    // console.log(inputOpt.value)
    arrayOptions.push(inputOpt.value);
    // h2.textContent += inputOpt.value + ', ';
    // console.log(inputOpt.value);
    // btnOptions
    if (inputOpt.value.length) {
        inputOpt.value = '';
    }

    console.log(arrayOptions);

};

const clean = (e) => {


    e.preventDefault();
    arrayOptions.splice(0, arrayOptions.length)
    h2.textContent = 'Pokaż co mam zrobić z tym o czym myślę...';
    console.log(arrayOptions);
};


const showOpt = (e) => {
    // addOptions
    e.preventDefault();
    h2.textContent = arrayOptions;
    // if (inputOpt.value.length) {
    //     inputOpt.value = '';
    // }
    alert(arrayOptions)
};

const showadv = (e) => {
    e.preventDefault();

    const indexG = Math.floor(Math.random() * arrayOptions.length);

    for (let index = 0; index < arrayOptions.length; index++) {
        const optGenerator = arrayOptions[indexG];
        h1.textContent = optGenerator;
        console.log(optGenerator);
    };

};


document.querySelector(".add").addEventListener('click', addOptions);

addReset.addEventListener('click', clean);

btnOptions.addEventListener('click', showOpt);

btnAdvice.addEventListener('click', showadv);