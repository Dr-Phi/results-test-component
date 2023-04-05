const URL = "./data.json";

const handleErr = err => console.warn(err);

function getDataFromJson() {
  fetch(URL)
    .then((res) => res.json())
    .then((objs) => loadObjs(objs))
    .finally(console.log("Finished"))
    .catch(handleErr);
  let i = 0;
  function loadObjs(objs) {
    const divResults = document.querySelector("#results");
    let toDOM = `
    
    ${objs
      .map((obj) => {++i;
        return `
        <div class="card card${i}">
          <object data=${obj.icon} class="icon"></object>
          <p>${obj.category}</p>
          <div class='score'>
            <p><span>${obj.score}</span>/ 100</p>
          </div>
        </div>
      `;
      })
      .join("")}
    `;
    console.log(toDOM);
    divResults.innerHTML = toDOM;
  }
}

getDataFromJson()

