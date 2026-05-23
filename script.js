const voteButton = document.querySelector("#boostVote");
const voteCount = document.querySelector("#voteCount");
const chantButtons = document.querySelectorAll(".chant");
const chantLine = document.querySelector("#chantLine");
const filterButtons = document.querySelectorAll(".filter");
const squadGrid = document.querySelector("#squadGrid");

const squad = [
  { no: "-", name: "James Hillson", role: "GK", label: "Goalkeeper", pos: "Goalkeeper", age: 25, value: "N/A", img: "https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1" },
  { no: "-", name: "Mykhaylo Mudryk", role: "FW", label: "Forward", pos: "Left Winger", age: 25, value: "N/A", img: "https://img.a.transfermarkt.technology/portrait/medium/537860-1732822624.jpg?lm=1" },
  { no: 28, name: "Teddy Sharman-Lowe", role: "GK", label: "Goalkeeper", pos: "Goalkeeper", age: 23, value: "EUR 550k", img: "https://img.a.transfermarkt.technology/portrait/medium/731466-1656922515.jpg?lm=1" },
  { no: 44, name: "Gabriel Slonina", role: "GK", label: "Goalkeeper", pos: "Goalkeeper", age: 22, value: "EUR 3.50m", img: "https://img.a.transfermarkt.technology/portrait/medium/656316-1645958054.jpg?lm=1" },
  { no: "-", name: "Caleb Wiley", role: "DF", label: "Defender", pos: "Left-Back", age: 21, value: "EUR 8.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/746833-1732575786.png?lm=1" },
  { no: 38, name: "Marc Guiu", role: "FW", label: "Forward", pos: "Centre-Forward", age: 20, value: "EUR 12.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/938158-1719846394.jpg?lm=1" },
  { no: 12, name: "Filip Jorgensen", role: "GK", label: "Goalkeeper", pos: "Goalkeeper", age: 24, value: "EUR 15.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/585323-1718280485.jpg?lm=1" },
  { no: 14, name: "Dario Essugo", role: "MF", label: "Midfielder", pos: "Defensive Midfield", age: 21, value: "EUR 17.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/670717-1742314930.jpg?lm=1" },
  { no: 4, name: "Tosin Adarabioyo", role: "DF", label: "Defender", pos: "Centre-Back", age: 28, value: "EUR 18.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/258878-1646903871.jpg?lm=1" },
  { no: 5, name: "Benoit Badiashile", role: "DF", label: "Defender", pos: "Centre-Back", age: 25, value: "EUR 18.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/463603-1714721596.jpg?lm=1" },
  { no: 1, name: "Robert Sanchez", role: "GK", label: "Goalkeeper", pos: "Goalkeeper", age: 28, value: "EUR 22.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/403151-1695028195.jpg?lm=1" },
  { no: 45, name: "Romeo Lavia", role: "MF", label: "Midfielder", pos: "Defensive Midfield", age: 22, value: "EUR 25.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/628451-1683898478.jpg?lm=1" },
  { no: 19, name: "Mamadou Sarr", role: "DF", label: "Defender", pos: "Centre-Back", age: 20, value: "EUR 25.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/910905-1773787147.jpg?lm=1" },
  { no: 34, name: "Josh Acheampong", role: "DF", label: "Defender", pos: "Right-Back", age: 20, value: "EUR 25.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/1004708-1715156243.jpg?lm=1" },
  { no: 29, name: "Wesley Fofana", role: "DF", label: "Defender", pos: "Centre-Back", age: 25, value: "EUR 28.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/475411-1683899212.jpg?lm=1" },
  { no: 9, name: "Liam Delap", role: "FW", label: "Forward", pos: "Centre-Forward", age: 23, value: "EUR 32.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/610849-1746646306.jpg?lm=1" },
  { no: 27, name: "Malo Gusto", role: "DF", label: "Defender", pos: "Right-Back", age: 23, value: "EUR 35.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/620322-1752061866.jpg?lm=1" },
  { no: 11, name: "Jamie Gittens", role: "FW", label: "Forward", pos: "Left Winger", age: 21, value: "EUR 35.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/670882-1736780080.jpg?lm=1" },
  { no: 21, name: "Jorrel Hato", role: "DF", label: "Defender", pos: "Left-Back", age: 20, value: "EUR 35.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/904802-1701361717.jpg?lm=1" },
  { no: 23, name: "Trevoh Chalobah", role: "DF", label: "Defender", pos: "Centre-Back", age: 26, value: "EUR 40.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/346314-1773301391.jpg?lm=1" },
  { no: 49, name: "Alejandro Garnacho", role: "FW", label: "Forward", pos: "Left Winger", age: 21, value: "EUR 40.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/811779-1703629085.jpg?lm=1" },
  { no: 17, name: "Andrey Santos", role: "MF", label: "Midfielder", pos: "Central Midfield", age: 22, value: "EUR 45.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/743600-1732576153.png?lm=1" },
  { no: 3, name: "Marc Cucurella", role: "DF", label: "Defender", pos: "Left-Back", age: 27, value: "EUR 50.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/284857-1765185117.jpg?lm=1" },
  { no: 6, name: "Levi Colwill", role: "DF", label: "Defender", pos: "Centre-Back", age: 23, value: "EUR 50.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/614258-1694614507.jpg?lm=1" },
  { no: 24, name: "Reece James", role: "DF", label: "Defender", pos: "Right-Back", age: 26, value: "EUR 60.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/472423-1683900849.jpg?lm=1" },
  { no: 7, name: "Pedro Neto", role: "FW", label: "Forward", pos: "Right Winger", age: 26, value: "EUR 60.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/487465-1763106447.jpg?lm=1" },
  { no: 20, name: "Joao Pedro", role: "FW", label: "Forward", pos: "Centre-Forward", age: 24, value: "EUR 75.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/626724-1724792744.jpg?lm=1" },
  { no: 41, name: "Estevao", role: "FW", label: "Forward", pos: "Right Winger", age: 19, value: "EUR 80.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/1056993-1766148652.jpg?lm=1" },
  { no: 8, name: "Enzo Fernandez", role: "MF", label: "Midfielder", pos: "Central Midfield", age: 25, value: "EUR 90.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/648195-1669894717.jpg?lm=1" },
  { no: 10, name: "Cole Palmer", role: "MF", label: "Midfielder", pos: "Attacking Midfield", age: 24, value: "EUR 110.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/568177-1712320986.jpg?lm=1" },
  { no: 25, name: "Moises Caicedo", role: "MF", label: "Midfielder", pos: "Defensive Midfield", age: 24, value: "EUR 110.00m", img: "https://img.a.transfermarkt.technology/portrait/medium/687626-1660729724.jpg?lm=1" }
];

let votes = 4821;

const renderSquad = (filter = "all") => {
  if (!squadGrid) return;
  const players = filter === "all" ? squad : squad.filter((player) => player.role === filter);
  squadGrid.innerHTML = players
    .map(
      (player) => `
        <article class="squad-card" data-role="${player.role}">
          <div class="player-portrait">
            <img src="${player.img}" alt="${player.name}" loading="lazy" referrerpolicy="no-referrer" />
          </div>
          <div class="player-card-body">
            <div class="squad-card-top">
              <span class="squad-number">${player.no}</span>
              <span class="market-value">${player.value}</span>
            </div>
            <h3>${player.name}</h3>
            <p>${player.pos}</p>
            <small>${player.label} | ${player.age} yrs</small>
          </div>
        </article>
      `
    )
    .join("");
};

voteButton?.addEventListener("click", () => {
  votes += 1;
  voteCount.textContent = `${votes.toLocaleString("en-US")} supporters boosted the noise`;
  voteButton.textContent = "Blue Support Sent";
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
