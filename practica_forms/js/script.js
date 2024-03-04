let app = document.getElementById('app');
app.addEventListener('load', openModal()) 

let myform = document.getElementById('myform')
myform.addEventListener('submit', getMyForm)
const modalVisible = document.querySelector('.modal')
const modalHidden = document.querySelector('.hidden')
const btnClose = document.getElementById('btn-close')

const arrform = [];
const separated = [];

const separateThem = (arr) => {
    for (let el of arr) {
        separated.push(el.split(''))

    }
    console.log(separated)
}
function getMyForm(e) {
    e.preventDefault()
    for (let i = 0; i < (myform.length - 1); i++) {
        arrform.push(e.target[i].value)
        console.log(arrform)

    }
    separateThem(arrform)
}    

const closeModal = () => {
    modalHidden.classList.add("hidden")
}
function openModal() {
        setTimeout(() => {
            modalVisible.classList.remove("hidden");
           console.log("ok") 
        }, 3000);
    
}
btnClose.addEventListener('click', closeModal);
