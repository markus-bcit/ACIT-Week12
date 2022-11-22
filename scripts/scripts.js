const clickButton = document.querySelector('.click-me')
// console.log(clickButton)

function printHello() {
    alert('Works')
}

clickButton.addEventListener('click', printHello)   