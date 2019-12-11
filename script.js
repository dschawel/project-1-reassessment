let input = document.getElementById('input')
let calculate = document.getElementById('calculate')
let result = document.getElementById('result').value


document.addEventListener('DOMContentLoaded', () => {
    console.log('site has loaded')
})

calculate.addEventListener('click', () => {
    // input = parseInt(input)
    result = (parseInt(input.value) - 32) * 5 / 9
    document.getElementById('result').textContent = `${parseInt(result)} degrees Celsius.`
})