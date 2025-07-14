console.log("Hello there");

const newBookBtn = document.querySelector(".new-book-btn");
const myBookDisplay = document.querySelector(".my-book-display");

newBookBtn.addEventListener('click', ()=>{
    const newBook = document.createElement("div");
    newBook.classList.add("book");

    const newBookEntry = document.createElement("form");
    newBookEntry.classList.add("entry");

    const titleEntry = document.createElement("label");
    titleEntry.innerText = "Title: *";
    const titleEntryInput = document.createElement("input");

    titleEntryInput.setAttribute("type", "text");
    titleEntryInput.setAttribute("name", "enter-title");
    titleEntryInput.setAttribute("id", "enter-title");
    titleEntryInput.setAttribute("placeholder", "Enter Title");

    titleEntry.appendChild(titleEntryInput);

    const authorEntry = document.createElement("label");
    authorEntry.innerText = "Author: *";
    const authorEntryInput = document.createElement("input");

    authorEntryInput.setAttribute("type", "text");
    authorEntryInput.setAttribute("name", "enter-author");
    authorEntryInput.setAttribute("id", "enter-author");
    authorEntryInput.setAttribute("placeholder", "Enter Author");

    authorEntry.appendChild(authorEntryInput);

    const wordCountEntry = document.createElement("label");
    wordCountEntry.innerText = "Word Count: *";
    const wordCountEntryInput = document.createElement("input");

    wordCountEntryInput.setAttribute("type", "number");
    wordCountEntryInput.setAttribute("name", "enter-wordCount");
    wordCountEntryInput.setAttribute("id", "enter-wordCount");

    wordCountEntry.appendChild(wordCountEntryInput);

    const coverEntry = document.createElement("label");
    coverEntry.innerText = "Cover Image: *";
    const coverEntryInput = document.createElement("input");

    coverEntryInput.setAttribute("type", "file");
    coverEntryInput.setAttribute("name", "enter-cover");
    coverEntryInput.setAttribute("id", "enter-cover");

    coverEntry.appendChild(coverEntryInput);

    const submitBtn = document.createElement("button")

    submitBtn.setAttribute("type", "submit");
    submitBtn.innerText = "Submit"

    

    // const newTitle = document.createElement("p");
    // const newAuthor = document.createElement("p");
    // const newWordCount = document.createElement("p");
    // const newCover = document.createElement("img");

    // newBook.appendChild(newTitle);
    // newBook.appendChild(newAuthor);
    // newBook.appendChild(newWordCount);
    // newBook.appendChild(newCover);

    newBookEntry.appendChild(titleEntry);
    newBookEntry.appendChild(authorEntry);
    newBookEntry.appendChild(wordCountEntry);
    newBookEntry.appendChild(coverEntry);
    newBookEntry.appendChild(submitBtn);
    newBook.appendChild(newBookEntry);
    myBookDisplay.appendChild(newBook);
});