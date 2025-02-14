console.log("Hello World!");

const library = [];
const libraryDisplay = document.querySelector(".library-container");
const bookEntry = document.querySelector(".book-entry");

function Book(title, author, pageCount, coverImage){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.blurb = "lorem25";
    this.readStatus = false;
    this.coverImage = `./images/${coverImage}`;
}

function addBook (title, author, pageCount, coverImage){
    const newBook = new Book(title, author, pageCount, coverImage);
    library.push(newBook);
}

addBook("The Hobbit", "Tolkien", 10000, "hobbit.jpeg");
addBook("The Martian", "Weir", 369, "martian.jpeg");

console.log(library);

const newBookBtn = document.querySelector(".new-btn");

newBookBtn.addEventListener('click', ()=>{
    console.log("hello");
    bookEntry.classList.toggle("hidden");
});

function displayLibrary(){
    library.forEach((book)=>{

        bookItem = document.createElement("DIV");
        bookItem.classList.add("book-item");

            frontCover = document.createElement("DIV");

                bookTitle = document.createElement("H2");
                    bookTitle.innerText = book.title;

                bookImage = document.createElement("IMG");
                    bookImage.setAttribute("SRC", book.coverImage);

            frontCover.appendChild(bookTitle);
            frontCover.appendChild(bookImage);

            backCover = document.createElement("DIV");

                bookAuthor = document.createElement("H3");
                    bookAuthor.innerText = book.author;

                bookPageCount = document.createElement("H4");
                    bookPageCount.innerText = book.pageCount;

                bookBlurb = document.createElement("P");
                    bookBlurb.innerText = book.blurb

            backCover.appendChild(bookAuthor);
            backCover.appendChild(bookAuthor);
            backCover.appendChild(bookAuthor);

        bookItem.appendChild(frontCover);
        bookItem.appendChild(backCover);

        libraryDisplay.appendChild(bookItem);
    })
}

displayLibrary();