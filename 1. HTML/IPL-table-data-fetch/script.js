let tableBody = document.getElementsByTagName("tbody")[0];
fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data
      .sort((a, b) => a.NRR - b.NRR)
      .forEach((team) => {
        let tr = document.createElement("tr");
        Object.keys(team).forEach((key) => {
          let td = document.createElement("td");
          td.textContent = team[key];
          tr.appendChild(td);
        });
        tableBody.appendChild(tr);
      });
  });