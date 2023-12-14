const text = document.querySelector('[data-js="text"]');
const firstSentence = document.querySelector('[data-js="firstSentence"]');
const secondSentence = document.querySelector('[data-js="secondSentence"]');
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
        firstSentence.innerHTML = "in";
        secondSentence.innerHTML = "Their names are: ";
        numberOfAstronauts.innerHTML = data.number;
        namesOfAstronauts.innerHTML = "";
        data.people.forEach((name, index) => {
          namesOfAstronauts.append((index ? ", " : "") + name.name);
        });
      }
      if (this.value == "iss") {
        console.log("ISS selected");
        const isISS = data.people.filter((craft) => {
          return craft.craft.startsWith("ISS");
        });
        console.log(isISS);
        firstSentence.innerHTML = "on the";
        secondSentence.innerHTML = "Their names are: ";
        numberOfAstronauts.innerHTML = isISS.length;
        namesOfAstronauts.innerHTML = "";
        isISS.forEach((name, index) => {
          namesOfAstronauts.append((index ? ", " : "") + name.name);
        });
      }
      if (this.value == "tiangong") {
        console.log("Tiangong selected");
        const isTiangong = data.people.filter((craft) => {
          return craft.craft.startsWith("Tiangong");
        });
        firstSentence.innerHTML = `on the`;
        numberOfAstronauts.innerHTML = isTiangong.length;
        namesOfAstronauts.innerHTML = "";
        isTiangong.forEach((name, index) => {
          namesOfAstronauts.append((index ? ", " : "") + name.name);
        });
        console.log(isTiangong.length);
        if (isTiangong.length === 0) {
          secondSentence.innerHTML = "";
        }
      }
    });
  } catch (error) {
    console.error("Error fetching:", error.message);
    numberOfAstronauts.innerHTML = "SOME NUMBER OF";
    namesOfAstronauts.innerHTML = "NOT AVAILABLE";
  }
}

getNames();
