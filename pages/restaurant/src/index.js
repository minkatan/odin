import navbar from './components/navbar'
import contact from './pages/contact'
import about from './pages/about'
import menu from './pages/menu'
import setActive from './components/setActive'

const content = document.getElementById('content')

window.addEventListener('load', () => {
    content.innerHTML = ''
    content.insertAdjacentHTML('beforeend', navbar())
    content.insertAdjacentHTML('beforeend', about())
    setActive('About')
})

content.addEventListener('click', (e) => {
    if(e.target.innerText === 'About'){
        content.innerHTML = ""
        content.insertAdjacentHTML('beforeend', navbar())
        content.insertAdjacentHTML('beforeend', about())
        setActive(e.target.innerText)
        
    }

    if(e.target.innerText === 'Menu'){
        content.innerHTML = ""
        content.insertAdjacentHTML('beforeend', navbar())
        content.insertAdjacentHTML('beforeend', menu())
        setActive(e.target.innerText)
    }

    if(e.target.innerText === 'Where'){
        content.innerHTML = ""
        content.insertAdjacentHTML('beforeend', navbar())
        content.insertAdjacentHTML('beforeend', contact())
        setActive(e.target.innerText)
    }
})