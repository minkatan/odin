export default function setActive(section){
    let currentPage = "About"
    const about = document.getElementById('about')
    const menu = document.getElementById('menu')
    const contact = document.getElementById('contact')

    currentPage = section.trim()

    switch(currentPage){
        case 'About':
            about.classList.add('border-b-4','border-red-800')
            menu.classList.remove('border-b-4','border-red-800')
            contact.classList.remove('border-b-4','border-red-800')
            break
        case 'Menu':
            about.classList.remove('border-b-4','border-red-800')
            menu.classList.add('border-b-4','border-red-800')
            contact.classList.remove('border-b-4','border-red-800')
            break
        case 'Where':
            about.classList.remove('border-b-4','border-red-800')
            menu.classList.remove('border-b-4','border-red-800')
            contact.classList.add('border-b-4','border-red-800')
            break
        }
}