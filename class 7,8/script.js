const input = document.querySelector("#input");
const btn = document.querySelector("#search");
const temp = document.querySelector(".temperature");
const place = document.querySelector(".location");
const time = document.querySelector(".time");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const icon = document.querySelector(".icon img");
const condition = document.querySelector(".condition");
const status = document.querySelector(".status");

function updateDateTime(localtime) {
  const parts = localtime.split(" ");
  date.textContent = parts[0] || "--";
  time.textContent = parts[1] || "--";

  const weekday = new Date(localtime.replace(" ", "T")).toLocaleDateString(
    undefined,
    { weekday: "long" }
  );
  day.textContent = weekday || "--";
}

async function getInfo(city) {
  status.textContent = "Loading...";
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=3ce538f4d49b45d7a4c65047262301&q=${encodeURIComponent(city)}&aqi=no`
  );

  if (!response.ok) {
    throw new Error("city not found");
  }

  const jsonData = await response.json();

  place.textContent = jsonData.location.name;
  temp.textContent = `${jsonData.current.temp_c}°C`;
  condition.textContent = jsonData.current.condition.text;
  icon.src = `https:${jsonData.current.condition.icon}`;
  updateDateTime(jsonData.location.localtime);

  status.textContent = "";
}

async function handleSearch() {
  const city = input.value.trim();
  if (!city) return;

  try {
    await getInfo(city);
  } catch (error) {
    status.textContent = "City not found. Please try another name.";
  }

  input.value = "";
}

btn.addEventListener("click", handleSearch);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch();
});
