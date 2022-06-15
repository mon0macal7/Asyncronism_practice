const smthWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Whooops");
    }
  });
};

smthWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const smthWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      //Handling error
      const error = new Error("Wrong");
      reject(error);
    }
  });
};

smthWillHappen2()
  .then((response) => console.log(response))
  .then(() => console.log("hola"))
  .catch((err) => console.error(err));

//Promise.All: allows execute promises at once
Promise.all([smthWillHappen(), smthWillHappen2()]).then((response) => {
  console.log("Array of results", response);
});
