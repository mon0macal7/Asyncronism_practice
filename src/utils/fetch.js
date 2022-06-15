//module for petitions
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//main function
const fetchData = (url_api) => {
  //conection instancied
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    //open with method, trace and bolean
    xhttp.open("GET", url_api, true);
    //validation
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error ", url_api));
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;
