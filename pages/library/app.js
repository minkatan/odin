const savedButton = document.getElementById('saved')
const addBookButton = document.getElementById('addBook')
const modal = document.getElementById('modal')
let main = document.getElementById('main')
let newBook;

let myLibrary = [
    {
        title: 'Lord of The Ring',
        author: 'JRR Tolkien',
        pages: 443,
        read: false
    },
    {
        title: 'Harry Potter',
        author: 'JK Rowling',
        pages: 215,
        read: true
    },

];

class Book {
    constructor(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}}

function addBookToLibrary(){
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const readStatus = document.getElementById('read').checked

    newBook = new Book(title,author,pages,readStatus)
    myLibrary.push(newBook)
    render()
    toggleModal()
}

savedButton.addEventListener('click', addBookToLibrary)
addBookButton.addEventListener('click',toggleModal)

function render(){
    // main.innerHTML = ''
    myLibrary.forEach((book) => {
        main.innerHTML += `
        <div class="bg-rose-100 border-red-900 border rounded-2xl col-span-1 px-4 py-8 relative">
        <span class="material-icons absolute top-4 right-2 cursor-pointer delete">close</span>
        <p class="text-xl font-semibold">${book.title} by <span>${book.author}</span></p>
        <p class="py-4">${book.pages} of pages</p>
        <p class="flex items-center gap-x-2">Read: ${book.read ? '<span class="material-icons text-emerald-700">check_circle</span></p>' : '<span class="material-icons text-red-700">highlight_off</span></p>' } 
    </div>`

    const deleteBtns = document.querySelectorAll('.delete')

    deleteBtns.forEach((btn) => btn.addEventListener('click',deleteBook))
    })
}

function toggleModal(){
    modal.classList.toggle('hidden')
}

function toggleRead(){
    const readIcons = document.querySelector('.material-icons')

    if(readIcons.innerText === 'check_circle'){
        readIcons.innerText = 'highlight_off'
        readIcons.classList.remove('text-emerald-700')
        readIcons.classList.add('text-red-700')
    }else if(readIcons.innerText === 'highlight_off'){
        readIcons.innerText = 'check_circle'
        readIcons.classList.remove('text-red-700')
        readIcons.classList.add('text-emerlad-700')
    }
}

function deleteBook(book){
    const deleteBook = book.target.parentElement
    deleteBook.classList.add('hidden')
}

render()