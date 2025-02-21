import { homeLoad } from "./about"
import "./style.css"

document.onload = populateHome()

function populateHome() {
    const docNav = document.querySelector("header")

    const restHead = document.createElement('h1')
    restHead.classList = 'h1-head'
    restHead.textContent = "Welcome to Cafe Leblanc!"

    const restPara = document.createElement('p')
    restPara.textContent = "The best Oriental food in town, in a convenient location. Open 24/7."

    docNav.appendChild(restHead)
    // docWhole.appendChild(restPara)
}

const aboutBtn = document.querySelector('.about')
const homeBtn = document.querySelector('.home')

aboutBtn.addEventListener('click', (e) => {
    // console.log("EAT CHEETOES")
    homeLoad()
} )

homeBtn.addEventListener('click', (e) => {
    const doc = document.querySelector('#content')
    doc.innerHTML = ""
    
    const docWhole = document.querySelector('.h1-head')
    docWhole.textContent = ""

    docWhole.textContent = "Welcome to Cafe Leblanc!"
})