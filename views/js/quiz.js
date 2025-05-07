import { GeneratePdf } from "./app.js"; // Adjust path if needed

const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");
const downloadBtn = document.getElementById("download-pdf-btn");

const questions = [
  {
    question: "Which planet is known for its rings?",
    options: ["Mars", "Saturn", "Jupiter", "Earth"],
    answer: "Saturn",
  },
  {
    question: "What galaxy is Earth located in?",
    options: ["Andromeda", "Sombrero", "Milky Way", "Whirlpool"],
    answer: "Milky Way",
  },
  {
    question: "What is the name of the first satellite sent into space?",
    options: ["Apollo 11", "Voyager", "Sputnik 1", "Hubble"],
    answer: "Sputnik 1",
  },
  {
    question: "How long does light from the Sun take to reach Earth?",
    options: ["8 seconds", "8 minutes", "8 hours", "8 days"],
    answer: "8 minutes",
  },
];

function renderQuiz() {
  questions.forEach((q, index) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = `${index + 1}. ${q.question}`;
    fieldset.appendChild(legend);

    q.options.forEach((option) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="q${index}" value="${option}" required />
        ${option}
      `;
      fieldset.appendChild(label);
      fieldset.appendChild(document.createElement("br"));
    });

    quizForm.appendChild(fieldset);
  });

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit Quiz";
  quizForm.appendChild(submitBtn);
}

quizForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  const resultMessage = `You scored ${score} out of ${questions.length}`;
  quizResult.textContent = resultMessage;
  downloadBtn.style.display = "inline-block";

  // Create PDF
  const pdf = new GeneratePdf();
  pdf.addHeader("Space Quiz Result");
  pdf.addText(resultMessage);
  pdf.downloadPdf();
});

renderQuiz();
