const btnON = document.querySelector('#btnON')
const btnOFF = document.querySelector('#btnOFF')
const divAfter = document.querySelector('#after')
const divSwiatlo = document.querySelector('#swiatlo')

let on = () => {
  divAfter.innerText = 'Im ON'
  divAfter.classList.remove('off')
  divAfter.classList.add('on')
  divSwiatlo.innerHTML =
    '<img src="onWbg.png" style="width: 300px; height: 300px">'
}

let off = () => {
  divAfter.innerText = 'Im OFF'
  divAfter.classList.remove('on')
  divAfter.classList.add('off')
  divSwiatlo.innerHTML =
    '<img src="offWbg.png" style="width: 300px; height: 300px">'
}

btnON.addEventListener('click', on)
btnOFF.addEventListener('click', off)
