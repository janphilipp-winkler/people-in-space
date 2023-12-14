const text = document.querySelector('[data-js="text"]');
const firstSentence = document.querySelector('[data-js="firstSentence"]');
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
    document.querySelector("#location").addEventListener("change", function () {
      if (this.value == "space") {
        console.log("SPACE selected");
        firstSentence.innerHTML = `There are currently <span data-js="number">${data.number}</span> people in`;
      }
      if (this.value == "iss") {
        console.log("ISS selected");
        const isISS = data.people.filter((craft) => {
          return craft.craft.startsWith("ISS");
        });
        firstSentence.innerHTML = `There are currently <span data-js="number">${isISS.length}</span> people on the`;
      }
      if (this.value == "tiangong") {
        console.log("Tiangong selected");
        const isTiangong = data.people.filter((craft) => {
          return craft.craft.startsWith("Tiangong");
        });
        firstSentence.innerHTML = `There are currently <span data-js="number">${isTiangong.length}</span> people on the`;
      }
    });
  } catch (error) {
    console.error("Error fetching:", error.message);
    numberOfAstronauts.innerHTML = "SOME NUMBER OF";
    namesOfAstronauts.innerHTML = "NOT AVAILABLE";
  }
}

getNames();
