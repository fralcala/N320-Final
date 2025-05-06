const API = "/api/stars.js";

const tableBody = document.querySelector("#star-table tbody");
const form = document.querySelector("#star-form");

function loadAsterisms() {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      tableBody.innerHTML = "";

      data.asterisms.forEach((p) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${p.name}</td>
            <td>${p.description}</td>
            
          `;
        tableBody.appendChild(row);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newAsterism = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
  };

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(newAsterism),
  }).then(() => {
    form.reset();
    loadAsterisms();
  });
});

loadAsterisms();
