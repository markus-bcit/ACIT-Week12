const clickButton = document.querySelector('.click-me')
// console.log(clickButton)

function printHello() {
    window.open("https://www.w3schools.com")
    alert('Works')
    // clickButton.removeEventListener('click', printHello) //Removes so it stops
}

clickButton.addEventListener('click', printHello, {once:true})

function changeBGPink()
{
    document.body.classList.add("backgroundPink")
}
clickButton.addEventListener('click', changeBGPink)