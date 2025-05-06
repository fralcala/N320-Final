const GALAXY_API = "../../api/galaxies";

const galaxyForm = document.querySelector("#galaxy-form");
const galaxyTableBody = document.querySelector("#galaxy-table tbody");

function loadGalaxies() {
  fetch(GALAXY_API)
    .then((res) => res.json())
    .then((data) => {
      galaxyTableBody.innerHTML = "";

      data.galaxies.forEach((g) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${g.username}</td>
          <td>${g.galaxyName}</td>
          <td>${g.galaxyType}</td>
          <td>${g.note}</td>
          <td><button onclick="deleteGalaxy(${g.id})">Delete</button></td>
        `;
        galaxyTableBody.appendChild(row);
      });
    });
}

function deleteGalaxy(id) {
  fetch(`${GALAXY_API}/${id}`, { method: "DELETE" }).then(loadGalaxies);
}

galaxyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newGalaxy = {
    username: document.getElementById("username").value,
    galaxyName: document.getElementById("galaxyName").value,
    galaxyType: document.getElementById("galaxyType").value,
    note: document.getElementById("note").value,
  };

  fetch(GALAXY_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newGalaxy),
  }).then(() => {
    galaxyForm.reset();
    loadGalaxies();
  });
});

loadGalaxies();
