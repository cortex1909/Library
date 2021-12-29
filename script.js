const tableBooks = document.getElementById('tableBooks')
const tableBody = document.getElementById('tbody')
const addNewBook = document.getElementById('addNew')
const addBookModal = new Modal('addModal')
const addBook = document.getElementById('addBook')

const DEFAULT_DATA = [
    {
        title: 'The Lord of the Rings',
        author: 'Tolkien',
        year: 1020,
        pages: 122,
        read: true
    },
    {
        title: 'The Lord',
        author: 'Tolk',
        year: 1657,
        pages: 45,
        read: false
    },
    {
        title: 'Rings',
        author: 'kien',
        year: 1957,
        pages: 248,
        read: true
    }
]

let myLibrary = []

Book = () => {
    // constructor
}

addBookToLibrary = (_title, _author, _year, _pages, _read) => {
    const objectToPush = {title: _title, author: _author, year: _year,pages: _pages, read: _read}
    myLibrary.push(objectToPush)
    printBook()
}

window.deleteBook = (id) => {
    myLibrary.splice(id, 1)
    tableBody.innerHTML = ''
    printBook()
}

window.updateBook = (id, readBook) => {
    if(readBook === true) {
        myLibrary[id].read = false
    } else if(readBook === false) {
        myLibrary[id].read = true
    }
    tableBody.innerHTML = ''
    printBook()
}

printBook = () => {
    if(myLibrary.length === 0) {
        myLibrary = DEFAULT_DATA
        tableBody.innerHTML = ''
        let readBool = false
        myLibrary.forEach((book,i) => {
            if(book.read === true) {
                readBool = `&#9745;`
            } else {
                readBool = `&#9746;`
            }
            tableBody.innerHTML += `<tr data-index="${i}">
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.year}</td>
                <td>${book.pages}</td>
                <td><button id="delete" class="delete" onclick="deleteBook(${i})">DELETE</button></td>
                <td><button id="delete" class="read" onclick="updateBook(${i}, ${book.read})">${readBool}</button></td>
                </tr>`
        });
    } else if(myLibrary.length != 0) {
        tableBody.innerHTML = ''
        myLibrary.forEach((book, i) => {
            if(book.read === true) {
                readBool = `&#9745;`
            } else {
                readBool = `&#9746;`
            }
            tableBody.innerHTML += `<tr data-index="${i}">
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.year}</td>
                <td>${book.pages}</td>
                <td><button id="delete" class="delete" onclick="deleteBook(${i})">DELETE</button></td>
                <td><button id="delete" class="read" onclick="updateBook(${i}, ${book.read})">${readBool}</button></td>
                </tr>`
        });
    }
}

addNewBook.addEventListener('click', () => {
    addBookModal.show()
})

addBook.addEventListener('click', () => {
    const _title = document.getElementById('title').value
    const _author = document.getElementById('author').value
    const _year = document.getElementById('year').value
    const _pages = document.getElementById('pages').value
    const _read = document.getElementById('read').checked
    addBookToLibrary(_title, _author, _year, _pages, _read)
})
printBook()