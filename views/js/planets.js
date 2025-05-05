const API = "../../api/planets";

const tableBody = document.querySelector("#planet-table tbody");
const form = document.querySelector("#planet-form");

function loadPlanets() {

fetch(API)

   .then(res => res.json())
  .then(data => {
    
    tableBody.innerHTML = "";
     
    data.planets.forEach(p => {
        const row = document.createElement("tr");
        
        row.innerHTML = `
          <td>${p.name}</td>
          <td>${p.diameter}</td>
          <td>${p.mass}</td>
          <td>${p.color}</td>
          <td><button onclick="deletePlanet(${p.id})">Delete</button></td>
        `;
        tableBody.appendChild(row);
      
      });

    });
}

function deletePlanet(id) {
  fetch(`${API}/${id}`, { method: "DELETE" }).then(loadPlanets);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newPlanet = {

  name: document.getElementById("name").value,
diameter: document.getElementById("diameter").value,
    mass: document.getElementById("mass").value,
 color: document.getElementById("color").value

  };

  fetch(API, {

 method: "POST",
    headers: { "Content-Type": "application/json" },
  
    body: JSON.stringify(newPlanet)

  }).then(() => {
    
    form.reset();
loadPlanets();
  });

});

loadPlanets();
