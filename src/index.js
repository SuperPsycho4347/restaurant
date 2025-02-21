// console.log("Apollo
let init = 0

function increaseInit() {
    init = init + 1
}

document.onload = increaseInit()

if (init > 0) {
    const docWhole = document.querySelector("#content")

    const restHead = document.createElement('h1')
    restHead.textContent = "Lotus Restaurant"

    const restPara = document.createElement('p')
    restPara.textContent = "The best Oriental food in town, in a convenient location. Open 24/7."

    docWhole.appendChild(restHead)
    docWhole.appendChild(restPara)
}