const container = document.querySelector("div.container");
const loadBtn = document.getElementById("load-btn");

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = []

fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
    .then(response => response.json())
    .then(data => {
        authorDataArr = data;
        displayAuthors(data.slice(startingIndex, endingIndex))
    })
    .catch(error => {
        console.error(`Error occured: ${error}`)
    })

function displayAuthors(dataArr) {
    dataArr.forEach(({ author, image, url, bio }, index) => {
        container.innerHTML += `
            <div class="author-card">
                <div class="card"></div>
                <h2 class="author-name">${author}</h2>
                <div class="author-image"><img src="${image}" alt="${author} avatar"></div>
                <p class="author-bio">${bio.length > 50 ? bio.slice(0, 50) + "..." : bio}</p>
                <a class="author-link" href="${url}" target="_blank">${author}'s author page</a>
            </div>
        `
    })
}

loadBtn.addEventListener("click", fetchMoreAuthors)

function fetchMoreAuthors() {
    startingIndex += 8;
    endingIndex += 8;

    displayAuthors(authorDataArr.slice(startingIndex, endingIndex))

    if (authorDataArr.length <= endingIndex) {
        loadBtn.disabled = true;
        loadBtn.style.cursor = "not-allowed"
        loadBtn.style.opacity = ".5"
        loadBtn.textContent = "No more data to load"
    }
}