// this example is a JSON string:
const a = '[{"name":"John", "age":30, "car":null}]';
const b = JSON.parse(a);
console.log(b[0].name);