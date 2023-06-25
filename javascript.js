// mode
var buttonDark = document.querySelector('.darki')
var buttonLight = document.querySelector('.lighti')
var body = document.querySelector('.bd')
function  md() {
    buttonDark.classList.toggle('hidden')
    buttonLight.classList.toggle('hidden')
    body.classList.toggle('dark')
}
if (localStorage.getItem('mode') == 'dark') {
    md();
}
buttonDark.addEventListener('click', () => {
    md()
    localStorage.setItem('mode', 'dark')
})
buttonLight.addEventListener('click', () => {
    md()
    localStorage.setItem('mode', 'light')
})

// nav
var buttonHum = document.querySelector('.hum')
var buttonHummer = document.querySelector('.hummer')
var nav = document.querySelector('nav')
function mc() {
    buttonHum.classList.toggle('hidden')
    buttonHummer.classList.toggle('hidden')
    nav.classList.toggle('secret')
}
buttonHum.addEventListener('click', () => {
    mc()
})
buttonHummer.addEventListener('click', () => {
    mc()
})

// loading
var loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    loader.classList.add('hidden')
})