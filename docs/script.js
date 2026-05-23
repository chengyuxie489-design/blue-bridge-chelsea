const voteButton = document.querySelector("#boostVote");
const voteCount = document.querySelector("#voteCount");
const chantButtons = document.querySelectorAll(".chant");
const chantLine = document.querySelector("#chantLine");
const filterButtons = document.querySelectorAll(".filter");
const squadGrid = document.querySelector("#squadGrid");

const squad = [
  { no: 1, name: "Robert Sanchez", role: "GK", label: "门将" },
  { no: 3, name: "Marc Cucurella", role: "DF", label: "后卫" },
  { no: 4, name: "Tosin Adarabioyo", role: "DF", label: "后卫" },
  { no: 5, name: "Benoit Badiashile", role: "DF", label: "后卫" },
  { no: 6, name: "Levi Colwill", role: "DF", label: "后卫" },
  { no: 7, name: "Pedro Neto", role: "FW", label: "前锋" },
  { no: 8, name: "Enzo Fernandez", role: "MF", label: "中场" },
  { no: 9, name: "Liam Delap", role: "FW", label: "前锋" },
  { no: 10, name: "Cole Palmer", role: "FW", label: "前锋" },
  { no: 11, name: "Jamie Gittens", role: "FW", label: "前锋" },
  { no: 12, name: "Filip Jorgensen", role: "GK", label: "门将" },
  { no: 14, name: "Dario Essugo", role: "MF", label: "中场" },
  { no: 17, name: "Andrey Santos", role: "MF", label: "中场" },
  { no: 19, name: "Mamadou Sarr", role: "DF", label: "后卫" },
  { no: 20, name: "Joao Pedro", role: "FW", label: "前锋" },
  { no: 21, name: "Jorrel Hato", role: "DF", label: "后卫" },
  { no: 23, name: "Trevoh Chalobah", role: "DF", label: "后卫" },
  { no: 24, name: "Reece James", role: "DF", label: "后卫" },
  { no: 25, name: "Moises Caicedo", role: "MF", label: "中场" },
  { no: 27, name: "Malo Gusto", role: "DF", label: "后卫" },
  { no: 28, name: "Teddy Sharman-Lowe", role: "GK", label: "门将" },
  { no: 29, name: "Wesley Fofana", role: "DF", label: "后卫" },
  { no: 30, name: "Aaron Anselmino", role: "DF", label: "后卫" },
  { no: 34, name: "Josh Acheampong", role: "DF", label: "后卫" },
  { no: 38, name: "Marc Guiu", role: "FW", label: "前锋" },
  { no: 41, name: "Estevao", role: "FW", label: "前锋" },
  { no: 44, name: "Gabriel Slonina", role: "GK", label: "门将" },
  { no: 45, name: "Romeo Lavia", role: "MF", label: "中场" },
  { no: 49, name: "Alejandro Garnacho", role: "FW", label: "前锋" }
];

let votes = 4821;

const renderSquad = (filter = "all") => {
  if (!squadGrid) return;
  const players = filter === "all" ? squad : squad.filter((player) => player.role === filter);
  squadGrid.innerHTML = players
    .map(
      (player) => `
        <article class="squad-card" data-role="${player.role}">
          <span class="squad-number">${player.no}</span>
          <div>
            <h3>${player.name}</h3>
            <p>${player.label}</p>
          </div>
        </article>
      `
    )
    .join("");
};

voteButton?.addEventListener("click", () => {
  votes += 1;
  voteCount.textContent = `${votes.toLocaleString("zh-CN")} 位球迷已支持`;
  voteButton.textContent = "已为蓝军加票";
});

chantButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chantButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    chantLine.textContent = button.dataset.chant || "";
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderSquad(button.dataset.filter);
  });
});

renderSquad();
