const input = document.querySelector("#input") as HTMLInputElement
const igualdade = document.querySelector("#igualdade") as HTMLButtonElement
const apagar = document.querySelector("#apagar") as HTMLButtonElement

const numeros = [... document.querySelectorAll(".numeros")] as Array<HTMLButtonElement>
const operadores = [... document.querySelectorAll(".operadores")] as Array<HTMLButtonElement>

igualdade.addEventListener("click", () => {
    
})

apagar.addEventListener("click", () => {
    
})

numeros.map(numero => numero.addEventListener("click", e => {
    const btn = e.target as HTMLButtonElement
    input.value += btn.textContent as string
}))

operadores.map(operador => operador.addEventListener("click", () => {
    
}))