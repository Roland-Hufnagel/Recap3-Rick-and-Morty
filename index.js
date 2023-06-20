import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = `https://rickandmortyapi.com/api/character?page=`;

async function fetchCharacters() {
  try {
    const response = await fetch(`${searchQuery + page}`);
    if (!response.ok) {
      return console.error("Something went wrong");
    }
    const data = await response.json();
    console.log(data);
    cardContainer.innerHTML = "";
    data.results.map((date) => {
      const li = createCharacterCard(
        date.image,
        date.name,
        date.staus,
        date.type,
        date.episode.length
      );
      cardContainer.append(li);
    });
    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
  } catch (error) {
    console.error(error);
  }
}
fetchCharacters();
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    console.log("Next clicked", page);
    page++;
    fetchCharacters();
  }
});
prevButton.addEventListener("click", () => {
  if (page > 1) {
    console.log("Next clicked", page);
    page--;
    fetchCharacters();
  }
});
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
});
