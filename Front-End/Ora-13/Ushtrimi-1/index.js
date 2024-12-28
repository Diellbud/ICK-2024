const prevLocalStorageValueElement = document.getElementById('prevLocalStorageValue') 
const localStorageValue = localStorage.getItem('localStorage')

console.log('localStorageValue',localStorageValue)

prevLocalStorageValueElement.innerText = 'Vlera e local storage:' + localStorageValue

const hadleSetRandomNumberToStorage = () =>{
    localStorage.setItem('localStorage', Math.random())
}