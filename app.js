const jokesContainer = document.getElementById("jokes");
const btn = document.querySelector(".btn");
const apiUrl = "https://v2.jokeapi.dev/joke/Any";

let jokes = () => {
  jokesContainer.classList.remove("fade");
  fetch(apiUrl)
    .then((data) => data.json())
    .then((item) => {
      jokesContainer.textContent = `${item.joke}`;
      jokesContainer.classList.add("fade");
    });
};

btn.addEventListener("click", jokes);
