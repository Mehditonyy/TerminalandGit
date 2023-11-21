import { alienPlanets } from "./alienPlanets.js";

const planetsContainer = document.querySelector("#planets-container");

for (const planet of alienPlanets) {
  const div = document.createElement("div");
  div.className = "planet-container";
  const h4 = document.createElement("h4");
  h4.textContent = planet.name;
  div.appendChild(h4);
  const emoji = document.createElement("p");
  emoji.textContent = planet.emoji;
  div.appendChild(emoji);
  planetsContainer.appendChild(div);
}
