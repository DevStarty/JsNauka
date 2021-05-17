const array = [`wartośc domysl I`, `wartośc domysl II`];
const input = document.querySelector('input');

const showOpt = (e) => {
    console.log(array);
    alert(array);



};
document.querySelector('.showOptions').addEventListener('click', showOpt);


const reset = function (e) {




}



document.querySelector(".clean").addEventListener('click', reset);