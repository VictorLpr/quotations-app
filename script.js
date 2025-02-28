const form = document.querySelector(".la")
const quoteList = document.querySelector("#quote-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const quote = document.querySelector("#quote").value;
    const author = document.querySelector("#name").value;
    addQuote(quote,author);
})

function addQuote(quote, author) {
    const text = document.createElement("p");
    text.classList.add("text");
    const authorName = document.createElement("p");
    authorName.classList.add("author")
    text.innerText = quote;
    authorName.innerText = author;
    const div = document.createElement("div");
    div.classList.add("quote")
    div.appendChild(text);
    div.appendChild(authorName);
    quoteList.appendChild(div)

}