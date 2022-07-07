//

const trace = (label) => (value) => {
  console.log(`\r\n<|\t${label}\t  |>`);
  console.log(value);
//   return `${label} >>> ${typeof value === "object" ? JSON.stringify(value) : value}`;
};

const stub = (name) => `<h1>${name}</h1>`;

const dateToMMDDYYYY = (date) =>
  `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

const isCssColor = (strColor) => {
  var s = new Option().style;
  s.color = strColor;
  return s.color === strColor;
};

export default trace;
export { stub, dateToMMDDYYYY, isCssColor };
