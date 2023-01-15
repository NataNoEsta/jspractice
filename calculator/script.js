class Calculadora {
    constructor(prevResultText, resultText) {
        //se inicializan los constructores:
        this.prevResultText = prevResultText
        this.resultText = resultText
        this.clear()
    }
    clear() {
        this.resultText = ''
        this.prevResultText = ''
        this.operation = undefined
    }
    borrar() {

    }
    appendNum(number) {

    }
    selectOp(op) {

    }
    calcular(){

    }
    update() {

    }
}


//queryselectorAll selecciona todos los elementos del mismo tipo
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const clearEveryButton = document.querySelector('[data-clear-everything]')
const clearButton = document.querySelector('[data-clear]')
const prevResultText = document.querySelector('[data-pre-result]')
const resultText = document.querySelector('[data-result]')

//se crea una instancia de la clase Calculadora
const calculator = new Calculadora(prevResultText, resultText)