module.exports = Add;

function Add(num1, num2, log) {
  let result = num1 + num2;
  log(result);
  return result;
}
