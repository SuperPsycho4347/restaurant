import { homeLoad } from "./about"
import "./style.css"

document.onload = populateHome()

function populateHome() {
    const docWhole = document.querySelector("#content")

    const restHead = document.createElement('h1')
    restHead.textContent = "Lotus Restaurant"

    const restPara = document.createElement('p')
    restPara.textContent = "The best Oriental food in town, in a convenient location. Open 24/7."

    docWhole.appendChild(restHead)
    docWhole.appendChild(restPara)
}

const aboutBtn = document.querySelector('.about')
const homeBtn = document.querySelector('.home')

aboutBtn.addEventListener('click', (e) => {
    // console.log("EAT CHEETOES")
    homeLoad()
} )

homeBtn.addEventListener('click', (e) => {
    const docWhole = document.querySelector('#content')
    docWhole.innerHTML= ""

    populateHome()
})