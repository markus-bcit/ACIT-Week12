const clickButton = document.querySelector('.click-me')
// console.log(clickButton)

function printHello() {
    // window.open("https://www.w3schools.com")
    alert('Works')
    // clickButton.removeEventListener('click', printHello) //Removes so it stops
}

clickButton.addEventListener('click', printHello, {once:true})
// 
function changeBGPink()
{
    document.body.classList.add("backgroundPink")
}

clickButton.addEventListener('click', changeBGPink)

// Changes txt content on click 
function changetext(){
    if (clickButton.textContent === 'click me'){
        clickButton.textContent = "Clicked!"
    }
    else clickButton.textContent = "click me"
    }

clickButton.addEventListener('click', changetext)

// Adds image on button press
function updateimg(){
    const img = document.getElementById("shoppingCart")
    img.src = "images/263142.png"
    img.width = '100'
}

clickButton.addEventListener('click', updateimg)

const buttonContainer = document.querySelector('div.button-container')


function changeBGgreen(e){
    e.target.classList.add('backgroundGreen')
}

function changeBTcolor(e){
    e.target.style.color = e.target.textContent
}

buttonContainer.addEventListener('mouseover', changeBGgreen)
buttonContainer.addEventListener('click', changeBTcolor)






