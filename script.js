const voteButton = document.querySelector("#boostVote");
const voteCount = document.querySelector("#voteCount");
const chantButtons = document.querySelectorAll(".chant");
const chantLine = document.querySelector("#chantLine");
const filterButtons = document.querySelectorAll(".filter");
const squadGrid = document.querySelector("#squadGrid");
const playerStatsGrid = document.querySelector("#playerStatsGrid");

const portraitBase = "https://img.chelseafc.com/image/upload/f_auto,q_auto,w_700/";

const squad = [
  { no: "-", name: "James Hillson", role: "GK", label: "Goalkeeper", pos: "Goalkeeper", age: 25, value: "N/A", img: "" },
  { no: "-", name: "Mykhaylo Mudryk", role: "FW", label: "Forward", pos: "Left Winger", age: 25, value: "N/A", img: "" },
  { no: 28, name: "Teddy Sharman-Lowe", role: "GK", label: "Goalkeeper", pos: "Goalkeeper", age: 23, value: "EUR 550k", img: `${portraitBase}v1770647747/editorial/people/first-team/2025-26/Teddy_Sharman-Lowe_profile_avatar_2025-26-removebg.png` },
  { no: 44, name: "Gabriel Slonina", role: "GK", label: "Goalkeeper", pos: "Goalkeeper", age: 22, value: "EUR 3.50m", img: `${portraitBase}v1773753762/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Slonina_SF_Home_25_26_RGB.png` },
  { no: "-", name: "Caleb Wiley", role: "DF", label: "Defender", pos: "Left-Back", age: 21, value: "EUR 8.00m", img: "" },
  { no: 38, name: "Marc Guiu", role: "FW", label: "Forward", pos: "Centre-Forward", age: 20, value: "EUR 12.00m", img: `${portraitBase}v1773753579/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Guiu_SF_Home_25_26_RGB.png` },
  { no: 12, name: "Filip Jorgensen", role: "GK", label: "Goalkeeper", pos: "Goalkeeper", age: 24, value: "EUR 15.00m", img: `${portraitBase}v1773753678/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Jorgensen_SF_Home_25_26_RGB.png` },
  { no: 14, name: "Dario Essugo", role: "MF", label: "Midfielder", pos: "Defensive Midfield", age: 21, value: "EUR 17.00m", img: `${portraitBase}v1773753530/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Essugo_SF_Home_25_26_RGB.png` },
  { no: 4, name: "Tosin Adarabioyo", role: "DF", label: "Defender", pos: "Centre-Back", age: 28, value: "EUR 18.00m", img: `${portraitBase}v1773753316/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Adarabioyo_SF_Home_25_26_RGB.png` },
  { no: 5, name: "Benoit Badiashile", role: "DF", label: "Defender", pos: "Centre-Back", age: 25, value: "EUR 18.00m", img: `${portraitBase}v1773753396/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Badiashile_SF_Home_25_26_RGB.png` },
  { no: 1, name: "Robert Sanchez", role: "GK", label: "Goalkeeper", pos: "Goalkeeper", age: 28, value: "EUR 22.00m", img: `${portraitBase}v1773753721/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Sanchez_SF_Home_25_26_RGB.png` },
  { no: 45, name: "Romeo Lavia", role: "MF", label: "Midfielder", pos: "Defensive Midfield", age: 22, value: "EUR 25.00m", img: `${portraitBase}v1773753685/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Lavia_SF_Home_25_26_RGB.png` },
  { no: 19, name: "Mamadou Sarr", role: "DF", label: "Defender", pos: "Centre-Back", age: 20, value: "EUR 25.00m", img: `${portraitBase}v1773753769/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Sarr_SF_Home_25_26_RGB.png` },
  { no: 34, name: "Josh Acheampong", role: "DF", label: "Defender", pos: "Right-Back", age: 20, value: "EUR 25.00m", img: `${portraitBase}v1773753348/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Acheampong_SF_Home_25_26_RGB.png` },
  { no: 29, name: "Wesley Fofana", role: "DF", label: "Defender", pos: "Centre-Back", age: 25, value: "EUR 28.00m", img: `${portraitBase}v1773753536/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Fofana_SF_Home_25_26_RGB.png` },
  { no: 9, name: "Liam Delap", role: "FW", label: "Forward", pos: "Centre-Forward", age: 23, value: "EUR 32.00m", img: `${portraitBase}v1773753645/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Delap_SF_Home_25_26_RGB.png` },
  { no: 27, name: "Malo Gusto", role: "DF", label: "Defender", pos: "Right-Back", age: 23, value: "EUR 35.00m", img: `${portraitBase}v1773753760/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Gusto_SF_Home_25_26_RGB.png` },
  { no: 11, name: "Jamie Gittens", role: "FW", label: "Forward", pos: "Left Winger", age: 21, value: "EUR 35.00m", img: `${portraitBase}v1773753589/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Gittens_SF_Home_25_26_RGB.png` },
  { no: 21, name: "Jorrel Hato", role: "DF", label: "Defender", pos: "Left-Back", age: 20, value: "EUR 35.00m", img: `${portraitBase}v1773753622/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Hato_SF_Home_25_26_RGB.png` },
  { no: 23, name: "Trevoh Chalobah", role: "DF", label: "Defender", pos: "Centre-Back", age: 26, value: "EUR 40.00m", img: `${portraitBase}v1773753388/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Chalobah_SF_Home_25_26_RGB.png` },
  { no: 49, name: "Alejandro Garnacho", role: "FW", label: "Forward", pos: "Left Winger", age: 21, value: "EUR 40.00m", img: `${portraitBase}v1773753575/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Garnacho_SF_Home_25_26_RGB.png` },
  { no: 17, name: "Andrey Santos", role: "MF", label: "Midfielder", pos: "Central Midfield", age: 22, value: "EUR 45.00m", img: `${portraitBase}v1773753720/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Santos_SF_Home_25_26_RGB.png` },
  { no: 3, name: "Marc Cucurella", role: "DF", label: "Defender", pos: "Left-Back", age: 27, value: "EUR 50.00m", img: `${portraitBase}v1773753756/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Cucurella_SF_Home_25_26_RGB.png` },
  { no: 6, name: "Levi Colwill", role: "DF", label: "Defender", pos: "Centre-Back", age: 23, value: "EUR 50.00m", img: `${portraitBase}v1773753751/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Colwill_SF_Home_25_26_RGB.png` },
  { no: 24, name: "Reece James", role: "DF", label: "Defender", pos: "Right-Back", age: 26, value: "EUR 60.00m", img: `${portraitBase}v1773753766/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_James_SF_Home_25_26_RGB.png` },
  { no: 7, name: "Pedro Neto", role: "FW", label: "Forward", pos: "Right Winger", age: 26, value: "EUR 60.00m", img: `${portraitBase}v1773753684/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Neto_SF_Home_25_26_RGB.png` },
  { no: 20, name: "Joao Pedro", role: "FW", label: "Forward", pos: "Centre-Forward", age: 24, value: "EUR 75.00m", img: `${portraitBase}v1773753724/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Pedro_SF_Home_25_26_RGB.png` },
  { no: 41, name: "Estevao", role: "FW", label: "Forward", pos: "Right Winger", age: 19, value: "EUR 80.00m", img: `${portraitBase}v1773753533/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Estevao_SF_Home_25_26_RGB.png` },
  { no: 8, name: "Enzo Fernandez", role: "MF", label: "Midfielder", pos: "Central Midfield", age: 25, value: "EUR 90.00m", img: `${portraitBase}v1773753782/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Fernandez_SF_Home_25_26_RGB.png` },
  { no: 10, name: "Cole Palmer", role: "MF", label: "Midfielder", pos: "Attacking Midfield", age: 24, value: "EUR 110.00m", img: `${portraitBase}v1773753765/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Palmer_SF_Home_25_26_RGB.png` },
  { no: 25, name: "Moises Caicedo", role: "MF", label: "Midfielder", pos: "Defensive Midfield", age: 24, value: "EUR 110.00m", img: `${portraitBase}v1773753368/editorial/people/first-team/2025-26/With%20IFS/3333x5000_Avatar_Image_Sponsored_IFSai_Men_Caicedo_SF_Home_25_26_RGB.png` }
];

const playerStats = [
  {
    label: "Most Appearances",
    source: "Premier League",
    rows: [
      ["Enzo Fernandez", 35],
      ["Joao Pedro", 34],
      ["Robert Sanchez", 34],
      ["Pedro Neto", 33],
      ["Marc Cucurella", 33],
      ["Malo Gusto", 33],
      ["Trevoh Chalobah", 33],
      ["Moises Caicedo", 32]
    ]
  },
  {
    label: "Top Scorers",
    source: "Premier League",
    rows: [
      ["Joao Pedro", 15],
      ["Enzo Fernandez", 10],
      ["Cole Palmer", 9],
      ["Pedro Neto", 5],
      ["Trevoh Chalobah", 3],
      ["Moises Caicedo", 3],
      ["Reece James", 2],
      ["Malo Gusto", 2]
    ]
  },
  {
    label: "Top Assists",
    source: "Premier League",
    rows: [
      ["Joao Pedro", 5],
      ["Pedro Neto", 5],
      ["Reece James", 5],
      ["Enzo Fernandez", 4],
      ["Marc Cucurella", 4],
      ["Alejandro Garnacho", 4],
      ["Malo Gusto", 3],
      ["Estevao", 2]
    ]
  }
];

let votes = 4821;

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const marketValueNumber = (value) => {
  if (!value || value === "N/A") return -1;
  const amount = Number(value.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(amount)) return -1;
  return value.includes("bn") ? amount * 1000 : value.includes("k") ? amount / 1000 : amount;
};

const renderSquad = (filter = "all") => {
  if (!squadGrid) return;
  const players = filter === "all" ? squad : squad.filter((player) => player.role === filter);
  const sortedPlayers = [...players].sort((a, b) => marketValueNumber(b.value) - marketValueNumber(a.value));
  squadGrid.innerHTML = sortedPlayers
    .map((player) => {
      const portrait = player.img
        ? `<img src="${player.img}" alt="${player.name}" loading="lazy" referrerpolicy="no-referrer" />`
        : `<div class="portrait-fallback"><img src="assets/chelsea-logo-round.png" alt="" /><span>${initials(player.name)}</span></div>`;

      return `
        <article class="squad-card" data-role="${player.role}">
          <div class="player-portrait">
            ${portrait}
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
      `;
    })
    .join("");
};

const renderPlayerStats = () => {
  if (!playerStatsGrid) return;
  playerStatsGrid.innerHTML = playerStats
    .map(
      (group) => `
        <article class="stat-leader-card">
          <div>
            <span>${group.source}</span>
            <h3>${group.label}</h3>
          </div>
          <ol>
            ${group.rows
              .map(
                ([name, total], index) => `
                  <li>
                    <b>${String(index + 1).padStart(2, "0")}</b>
                    <span>${name}</span>
                    <strong>${total}</strong>
                  </li>
                `
              )
              .join("")}
          </ol>
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
renderPlayerStats();
