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
const maxPage = 1;
const page = 1;
const searchQuery = "https://rickandmortyapi.com/api/character";

async function fetchCharacters(url) {
  cardContainer.innerHTML = "";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return console.error("Something went wrong");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
const data = await fetchCharacters(searchQuery);
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
