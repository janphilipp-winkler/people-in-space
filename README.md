## 📡 People in Space 🚀

Let's build a website that displays the current number of people in space. Hints are provided if you get stuck. Try to build as much as possible without looking at the hints. We will use the [following API](http://open-notify.org/Open-Notify-API/People-In-Space/) to determine how many people are current in space.

1.  Create a new directory called `people-in-space` and add an `index.html`, `style.css` and `script.js` file.
     <details>
     <summary>🙈 Hint</summary>

    ```bash
    mkdir people-in-space
    cd people-in-space
    ```

    ```bash
    touch index.html style.css script.js
    ```

    </details>
    &nbsp;

2.  Create a skeleton html and link the style.css and script.js files. "Sanity check" the css by changing the background colour of the page and the javascript file by adding a `console.log("Sanity check")` and making sure you see the log in the browser developer tools.
       <details>
       <summary>🙈 Hint</summary>

    ```html
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>People in Space</title>
        <link rel="stylesheet" href="style.css" />
        <script src="script.js" defer></script>
      </head>
      <body>
        <h1>People in Space:</h1>
      </body>
    </html>
    ```

    ```css
    /* style.css */
    body {
      background-color: #2d383a;
      color: white;
    }
    ```

    ```js
    // script.js
    console.log("Sanity check");
    ```

    </details>
    &nbsp;

3.  Add an element to the html where we will put the number of people currently in space (i.e. a `span` tag inside an `h1`).
    <details>
    <summary>🙈 Hint</summary>

    ```html
    <h1>
      People in Space:
      <span data-js="people-in-space">???</span>
    </h1>
    ```

     </details>
     &nbsp;

4.  Grab a reference to the newly created element in the script file.
     <details>
     <summary>🙈 Hint</summary>

    ```js
    // script.js
    const peopleInSpace = document.querySelector("[data-js='people-in-space']");
    ```

     </details>
     &nbsp;

5.  Write an `async` function to get the data from the [`Open Notify API`](http://open-notify.org/Open-Notify-API/People-In-Space/). Console.log the data from the API.
    <details>
    <summary>🙈 Hint</summary>

    ```js
    // script.js
    async function getPeopleInSpace() {
      const response = await fetch("http://api.open-notify.org/astros.json");
      const data = await response.json();
      console.log("data: ", data);
    }
    getPeopleInSpace(); // don't forget to call the function
    ```

    </details>
    &nbsp;

6.  Set the text content of the `span` tag to be that of the number of people currently in space.
     <details>
     <summary>🙈 Hint</summary>

    ```js
    // script.js
    async function getPeopleInSpace() {
      const response = await fetch("http://api.open-notify.org/astros.json");
      const data = await response.json();
      peopleInSpace.innerText = data.number;
    }
    getPeopleInSpace(); // don't forget to call the function
    ```

     </details>

Congratulations! You have now made a website that shows the current number of people in space.

As a **_bonus_** feature you could add a `ul` to the page that gets updated with the names of the people currently in space (this information is also included in the response from the API). You will need to think about `looping` over an array, creating `dom elements` and updating their content. As well as `appending` dom elements to the page.

As an **_extra bonus_** you could add 3 buttons to the page. `All`, `ISS` and `Tiangong`. Then when you click on one of the buttons you update the list of people displayed on the page based on which space craft they are on. i.e. if you click on the ISS button, your list of people should only include those on the `ISS`. We learnt about an array method that would be particularly helpful in this scenario.

  <details>
  <summary>🙈 Hint</summary>

[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) would be a good array method to look at.

```js
const people = [
  {
    name: "Sergey Prokopyev",
    craft: "ISS",
  },
  {
    name: "Dmitry Petelin",
    craft: "ISS",
  },
  {
    name: "Frank Rubio",
    craft: "ISS",
  },
  {
    name: "Stephen Bowen",
    craft: "ISS",
  },
  {
    name: "Warren Hoburg",
    craft: "ISS",
  },
  {
    name: "Sultan Alneyadi",
    craft: "ISS",
  },
  {
    name: "Andrey Fedyaev",
    craft: "ISS",
  },
  {
    name: "Jing Haiping",
    craft: "Tiangong",
  },
  {
    name: "Gui Haichow",
    craft: "Tiangong",
  },
  {
    name: "Zhu Yangzhu",
    craft: "Tiangong",
  },
];
// e.g.
const peopleOnIss = people.filter((person) => person.craft === "ISS");

// the value of peopleOnIss would be

// [
//     {
//         "name": "Sergey Prokopyev",
//         "craft": "ISS"
//     },
//     {
//         "name": "Dmitry Petelin",
//         "craft": "ISS"
//     },
//     {
//         "name": "Frank Rubio",
//         "craft": "ISS"
//     },
//     {
//         "name": "Stephen Bowen",
//         "craft": "ISS"
//     },
//     {
//         "name": "Warren Hoburg",
//         "craft": "ISS"
//     },
//     {
//         "name": "Sultan Alneyadi",
//         "craft": "ISS"
//     },
//     {
//         "name": "Andrey Fedyaev",
//         "craft": "ISS"
//     }
// ]
```

  </details>
