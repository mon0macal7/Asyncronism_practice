const doSmthAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do something Async"), 3000)
      : reject(new Error("Test Error"));
  });
};
const doSomething = async () => {
  const sometime = await doSmthAsync();
  console.log(sometime);
};
console.log("before");
doSomething();
console.log("after");

const anotherFunction = async () => {
  try {
    const sometime = await doSmthAsync();
    console.log(sometime);
  } catch (error) {
    console.error(error);
  }
};
console.log("before 1");
anotherFunction();
console.log("after 1");
