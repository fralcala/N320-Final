
const API = "../../api/exoplanets";

const planetForm = document.getElementById("exoplanet-form");
 const planetGrid = document.getElementById("custom-planets-grid");

const planetImages = [
 "../media/planet1.jpeg",
  "../media/planet2.jpeg",
"../media/planet3.jpeg",
 "../media/planet4.jpeg",
  "../media/planet5.jpeg",
  "../media/planet6.jpeg",
];

function getRandomImage() {

    const index = Math.floor(Math.random() * planetImages.length);
 
  return planetImages[index];
}


function loadExoplanets() {
  fetch(API)
    .then(res => res.json())
 .then(data => {

      planetGrid.innerHTML = "";
data.planets.forEach(planet => {
 createCard(planet);
      });
    });
}

function createCard(planet) {
  
    const card = document.createElement("div");
card.classList.add("planet-card");

  card.innerHTML = `
<img src="${getRandomImage()}" alt="${planet.name}" />
 <h3>${planet.name}</h3>
<p><strong>Climate:</strong> ${planet.climate}</p>

<p><strong>Material:</strong> ${planet.material}</p>
<button class="delete-btn">Delete</button>
  `;

  card.querySelector(".delete-btn").addEventListener("click", () => {
    deleteExoplanet(planet.id);
  });

  planetGrid.appendChild(card);
}

planetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newPlanet = {
    name: document.getElementById("planetName").value,
    climate: document.getElementById("planetClimate").value,
    material: document.getElementById("planetMaterial").value
  };

  fetch(API, {
    method: "POST",
   
    headers: { "Content-Type": "application/json" },
 body: JSON.stringify(newPlanet)

  }).then(() => {
   
    planetForm.reset();
 loadExoplanets(); 
  });
});

function deleteExoplanet(id) {
  fetch(`${API}/${id}`, {
    method: "DELETE"
    
  }).then(() => loadExoplanets());
}

loadExoplanets();