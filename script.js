const text = document.querySelector('[data-js="text"]');
const numberOfAstronauts = document.querySelector('[data-js="number"]');
const namesOfAstronauts = document.querySelector('[data-js="names"]');

async function getNames() {
  try {
    const response = await fetch(`http://api.open-notify.org/astros.json`);

    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`);
    }

    const data = await response.json();
    numberOfAstronauts.innerHTML = data.number;
    data.people.forEach((name, index) => {
      namesOfAstronauts.append((index ? ", " : "") + name.name);
    });
  } catch (error) {
    console.error("Error fetching:", error.message);
    numberOfAstronauts.innerHTML = "SOME NUMBER OF";
    namesOfAstronauts.innerHTML = "NOT AVAILABLE";
  }
}

getNames();
