// RANDOM POKEMON GENERATOR

const apiData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
};

function getPokemon() {
  let randomNumber = Math.floor(Math.random() * 399) + 1;
  let apiUrl = `${apiData.url}${apiData.type}/${randomNumber}`;

  fetch(apiUrl)
    .then((data) => data.json())
    .then((pokemon) => generateHtml(pokemon));

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
  };
}

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
