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
    const btn = 

    main.innerHTML = ''
    myLibrary.forEach((book) => {
        main.innerHTML += `
        <div class="bg-rose-100 border-red-900 border rounded-2xl col-span-1 px-4 py-8 relative">
        <span class="material-icons absolute top-4 right-2 cursor-pointer delete">close</span>
        <p class="text-xl font-semibold">${book.title} by <span>${book.author}</span></p>
        <p class="py-4">${book.pages} of pages</p>
        ${book.read ? '<button id="read-status" class="flex items-center gap-x-2 text-emerald-700 border border-emerald-900 bg-green-300 py-2 px-4 rounded-full">Read<span class="material-icons">check_circle</span></button>' : 
        '<button id="read-status" class="flex items-center gap-x-2 text-red-700 border border-red-900 bg-rose-300 py-2 px-4 rounded-full">Read<span class="material-icons">highlight_off</span></button>'
    } 
    </div>`

    const deleteBtns = document.querySelectorAll('.delete')

    deleteBtns.forEach((btn) => btn.addEventListener('click',deleteBook))
    })

    const readStatus = document.getElementById('read-status')
    readStatus.addEventListener('click', toggleRead)
}

function toggleModal(){
    modal.classList.toggle('hidden')
}

function toggleRead(){
    let text = this.children[0].innerText

    if(text === 'highlight_off'){
        this.children[0].innerText = 'check_circle'
        this.classList.add('text-emerald-700', 'border-emerald-900', 'bg-green-300')
        this.classList.remove('text-red-700', 'border-red-900', 'bg-rose-300')
    }else if (text === 'check_circle'){
        this.children[0].innerText = 'highlight_off'
        this.classList.remove('text-emerald-700', 'border-emerald-900', 'bg-green-300')
        this.classList.add('text-red-700', 'border-red-900', 'bg-rose-300')
    }
}

function deleteBook(book){
    const deleteBook = book.target.parentElement
    deleteBook.classList.add('hidden')
}

render()