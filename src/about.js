function homeLoad() {
    const docWhole = document.querySelector('#content')
    docWhole.innerHTML= ""

    const aboutHead = document.createElement('h2')
    aboutHead.textContent = "Run By: Ben & Jerry Ent."

    docWhole.appendChild(aboutHead)
}

export {homeLoad}