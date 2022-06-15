//import fetch data from utils file
const fetchData = require("../utils/fetch");
//keep the trace URL in a variable
const API = "https://rickandmortyapi.com/api/character/";
fetchData(API)
  .then((data) => {
    //#of the first character
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`);
  })
  //name of character
  .then((data) => {
    console.log(data.name);
    return fetchData(data.origin.url);
  })
  //dimension of character
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((err) => console.error(err));
