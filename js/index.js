const botaoMenu = document.getElementById("menu-btn")
const botaoFechar = document.getElementById("btn-fechar")

function abrirMenu() {
    const nav = document.getElementById("nav")
    nav.classList.add("active")
    const verify = nav.classList.contains("active")
    verify ? nav.setAttribute("aria-expanded", "true") : nav.setAttribute("aria-expanded", "false")
}

function fecharMenu() {
    const nav = document.getElementById("nav")
    nav.classList.remove("active")
    const verify = nav.classList.contains("active")
    verify ? nav.setAttribute("aria-expanded", "true") : nav.setAttribute("aria-expanded", "false")
}


botaoMenu.addEventListener("click", abrirMenu)
botaoFechar.addEventListener("click", fecharMenu)