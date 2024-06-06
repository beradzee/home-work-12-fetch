let url = "https://api.quotable.io/random";

function makeQuote() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let quote = document.getElementById("quote");
      quote.textContent = `"${data.content}"`;

      let author = document.getElementById("author");
      author.textContent = `- ${data.author}`;
    });
}

makeQuote();
