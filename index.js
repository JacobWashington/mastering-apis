const fetch = require("node-fetch");

// fetch('https://espn.com')
// .then(response => {
//     return response.text();
// })
// .then(html => {
//     console.log(html);
// })

fetch("https://api.spacexdata.com/v3/capsules")
  .then((response) => {
    return response.json();
  })
  .then((dataArr) => {
    console.log(dataArr);
  });
