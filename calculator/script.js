class Calculadora {
    constructor(prevResultText, currentResultText) {
        //se inicializan los constructores:
        this.prevResultText = prevResultText
        this.currentResultText = currentResultText
        this.clear()
    }
    // métodos
    clear() {
        this.result = ''
        this.prevResult = ''
        this.operation = undefined
    }
    borrar() {

    }
    appendNum(number) {
        this.result = number
    }
    selectOp(op) {

    }
    calcular(){

    }
    update() {
        this.currentResultText.innerText = this.result
    }
}


// queryselectorAll selecciona todos los elementos del mismo tipo
// el navegador retorna un objeto nodo (nodeList object)
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const clearEveryButton = document.querySelector('[data-clear-everything]')
const clearButton = document.querySelector('[data-clear]')
const prevResultText = document.querySelector('[data-pre-result]')
const currentResultText = document.querySelector('[data-result]')

//se crea una instancia de la clase Calculadora
const calculator = new Calculadora(prevResultText, currentResultText)

// for each recorre la lista de nodos (cada boton) y le asigna un eventHandler
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNum(button.innerText)
        calculator.update()
    })
})