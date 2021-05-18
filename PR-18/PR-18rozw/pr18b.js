const array = [`--wartośc domysl I--`, `--wartośc domysl II--`];
const input = document.querySelector('input');


const addToArray = (e) => {


    array.push(input.value)
    console.log(array);
    e.preventDefault();
    input.value = ''

};
const reset = function (e) {

    e.preventDefault();
    array.length = 0;
}
const showOpt = () => {
    // event.preventdefault();
    console.log(array);
    alert(array);
};
const showRandomAdvice = function () {
    // e.preventDefault();
    const index = Math.floor(Math.random() * array.length)
    alert(array[index])
    console.log(array[index])
}












document.querySelector('.add').addEventListener('click', addToArray);
document.querySelector(".clean").addEventListener('click', reset);
document.querySelector('.showOptions').addEventListener('click', showOpt);
document.querySelector('.showAdvice').addEventListener('click', showRandomAdvice);