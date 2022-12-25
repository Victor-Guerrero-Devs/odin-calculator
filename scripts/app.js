const btns = document.querySelectorAll('button');
const screenEle = document.querySelector('.calculator__display');

let valuesArr = [];
let calculationsArguments;

function calculate(btn) {
  const btnValue = btn.textContent;

  if (btnValue === 'CLEAR') {
    valuesArr = [];
    screenEle.textContent = '';
  } else if (btnValue === '=') {
    screenEle.textContent = eval(calculationsArguments);
  } else {
    valuesArr.push(btnValue);
    calculationsArguments = valuesArr.join('');
    screenEle.textContent = calculationsArguments;
  }
}

btns.forEach((btn) => btn.addEventListener('click', () => calculate(btn)));
