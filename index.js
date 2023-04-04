const URL = "./data.json";

const handleErr = err => console.warn(err);

function getDataFromJson() {
  fetch(URL)
    .then((res) => res.json())
    .then((objs) => loadObjs(objs))
    .finally(console.log("Finished"))
    .catch(handleErr);

  function loadObjs(objs) {
    const divResults = document.querySelector("#results");
    let toDOM = `
    <div>
    ${objs
      .map((obj) => {
        return `<object data=${obj.icon} class="icon"></object>
         <p>${obj.category}</p>
         <div class='score'>
           <p><span>${obj.score}</span>/100</p>
         </div>
      `;
      })
      .join("")}
    </div>`;
    console.log(toDOM);
    divResults.innerHTML = toDOM;
  }
}

getDataFromJson()

