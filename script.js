
document.body.style.boxSizing = "border-box";
document.body.style.textAlign = "center";

const container = document.getElementById("container");
container.style.cssText = "width:700px; height:700px; border:2px solid white; background-color: black; margin:100px auto; display:flex; flex-wrap:wrap; align-content:flex-start;";

const btn = document.getElementById("newGridBtn");
btn.style.cssText = "width:100px; height:40px; border:1px solid red; color:red; font-size:20px; margin:12px; cursor:pointer; background-color:black;";
btn.textContent = "Click";

// Random color generator
function randomRGB() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}

// Build grid
function buildGrid(n) {
  container.innerHTML = "";
  const containerSize = container.clientWidth;
  const size = Math.floor(containerSize / n);

  for (let i = 0; i < n*n; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = size + "px";
    cell.style.height = size + "px";
    cell.style.border = "1px solid white";
    cell.style.opacity = "1";
    cell.dataset.hits = "0";
    container.appendChild(cell);
  }
}

// Button → new grid
btn.addEventListener('click', () => {
  const row = parseInt(prompt("Enter number of squares per side (1–100):"), 10);
  if (!row || row < 1 || row > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  buildGrid(row);
});

// Hover effect
container.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("cell")) return;

  let cell = e.target;
  let hits = parseInt(cell.dataset.hits, 10) || 0;
  hits = Math.min(hits + 1, 10);
  cell.dataset.hits = hits.toString();

  cell.style.backgroundColor = randomRGB();
  const newOpacity = Math.max(1 - hits * 0.1, 0);
  cell.style.opacity = newOpacity.toFixed(1);
});

// Initial grid
buildGrid(16);

      