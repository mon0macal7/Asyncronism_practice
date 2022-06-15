function sum(n1, n2) {
  return n1 + n2;
}
sum();
console.log(sum(45, 45));
function calc(n1, n2, callback) {
  return callback(n1, n2);
}

function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
