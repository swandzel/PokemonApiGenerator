// NUMBER GENERATOR FROM 1 TO 400

function generatedNumber() {
  let number = Math.floor(Math.random() * 399) + 1;
  return number;
}

// ASSIGNING THE RESULT OF A FUNCTION TO THE VARIABLE

let pokemonNumber = generatedNumber();

// API ADDRESS WITH A NUMBER FROM A VARIABLE

const apiData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: pokemonNumber,
};

const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`;

// DATA DOWNLOADED FROM API

fetch(apiUrl)
  .then((data) => data.json())
  .then((pokemon) => generateHtml(pokemon));

// ENTERING RESULTS ON THE PAGE

let pokemonName = document.querySelector(".pokemon-name");
let pokemonType = document.querySelector(".pokemon-type");
let abilityType = document.querySelector(".ability-type");
let attack = document.querySelector(".attack");
let defense = document.querySelector(".defense");
let img = document.querySelector(".pokemon-img");

const generateHtml = (data) => {
  pokemonName.textContent = data.name.toUpperCase();
  pokemonType.textContent = data.types[0].type.name.toUpperCase();
  abilityType.textContent = data.abilities[0].ability.name.toUpperCase();
  img.src = data.sprites.front_default;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;

  // PRINTING ALL POKEMON DATA TO THE CONSOLE TO ENSURE CORRECT RESULTS
  console.log(`Pokemon number: ${data.id}
  Pokemon name: ${data.name.toUpperCase()}
  Pokemon type: ${data.types[0].type.name.toUpperCase()}
  Pokemon ability: ${data.abilities[0].ability.name.toUpperCase()}
  Pokemon attack: ${data.stats[1].base_stat}
  Pokemon defense: ${data.stats[2].base_stat}`);
};

// ABOUT PROJECT MODAL POP-UP
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
