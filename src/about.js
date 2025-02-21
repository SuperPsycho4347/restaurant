function homeLoad() {
    const docWhole = document.querySelector('#content')
    docWhole.innerHTML= ""

    const aboutHead = document.createElement('h2')
    aboutHead.textContent = "Lovingly crafted by: Sojiro & Futaba"

    docWhole.appendChild(aboutHead)
}

export {homeLoad}