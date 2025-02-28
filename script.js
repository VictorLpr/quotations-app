const form = document.querySelector("#new-quote");
const quoteList = document.querySelector("#quote-list");
let quoteCount = 0;
let citations = localStorage.getItem("quotes") ? JSON.parse(localStorage.getItem("quotes")) : [];
    
citations.forEach((citation) => {
    addQuote(citation.text,citation.author);
    updateCount();
} );

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const quote = document.querySelector("#quote").value;
    const author = document.querySelector("#name").value;
    addQuote(quote,author);
    updateCount();
    e.target.reset();
    const citation = {
        author: author,
        text: quote
    }
    citations.push((citation))
    localStorage.setItem("quotes", JSON.stringify(citations))
})

function addQuote(quote, author) {
    quoteCount++;
    const text = document.createElement("p");
    text.classList.add("text");
    const authorName = document.createElement("p");
    authorName.classList.add("author")
    text.innerText = `"${quote}"`;
    authorName.innerText = author;
    const div = document.createElement("div");
    div.classList.add("quote")
    div.appendChild(text);
    div.appendChild(authorName);
    quoteList.appendChild(div);
}

function updateCount () {
    if (quote === 1) {
        document.getElementById("count").innerText = `${quoteCount} citation`
    }
    document.getElementById("count").innerText = `${quoteCount} citations`
}