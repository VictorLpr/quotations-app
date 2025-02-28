const form = document.querySelector(".la")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const quote = document.querySelector("#quote").value;
    const author = document.querySelector("#name").value;
    console.log(quote);
    console.log(author)

})