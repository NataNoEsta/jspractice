class Calculadora {
    constructor(prevResultText, currentResultText) {
        //se inicializan los constructores:
        this.prevResultText = prevResultText  //visor principal
        this.currentResultText = currentResultText  //visor supererior: numero ingresado anteriormenete
        this.clear()
    }
    // métodos
    clear() {
        this.currentResult = '';
        this.prevResult = '';
        this.operation = '';
    }
    borrar() {
        this.currentResult = "";
    }
    appendNum(number) {
        // if (number === '.' && this.currentResult.includes('.')) {
        //     return
        // }
        this.currentResult = this.currentResult.toString() + number.toString()
        // this.currentResult += number
    }

    selectOp(op) {
        this.operation = op
        this.prevResult = this.currentResult
        this.currentResult = ''
        console.log(op)
        if (this.currentResult === "") {
            return
        }else {
            this.calcular()
        }
        
    }
    calcular(){
        let calc = 0;
        let prev = parseFloat(this.prevResult)
        let current = parseFloat(this.currentResult)
        let operation = this.operation
        if(isNaN(prev) || isNaN(current)) {
            return
        }
        switch(operation) {
            case '+':
                calc = prev + current
                // console.log(calc)
                break
            case "-":
                calc = prev - current
                break;
            case "*":
                calc = prev * current
                break;
            case "/":
                if(current === 0){
                    alert("No se puede dividir por cero!")
                    return
                }
                calc = prev / current
                break;
            default:
                return
        }
        this.currentResult = calc
        // this.operation = operation
        this.prevResult = " "
        // console.log(calc)
    }
    update() {
        currentResultText.innerText = this.currentResult
        prevResultText.innerText = this.prevResult
    }
}


// queryselectorAll selecciona todos los elementos del mismo tipo
// el navegador retorna un objeto nodo (nodeList object)
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const clearAll = document.querySelector('[data-clear-all]')
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
operationButtons.forEach(button => {
    button.addEventListener("click", (button) => {
        calculator.selectOp(button.target.innerText)
        calculator.update()
    })
})
equalButton.addEventListener("click", () => {
    calculator.calcular()
    calculator.update()
})
clearAll.addEventListener('click', (button)=> {
    calculator.clear()
    calculator.update()
})
clearButton.addEventListener('click', (button) => {
    calculator.borrar()
    calculator.update()

})