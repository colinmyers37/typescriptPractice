function add(n1, n2) {
    return n1 + n2;
}
function printResult(number) {
    console.log('Result: ' + number);
}
function addHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
addHandle(10, 20, function (result) {
    console.log(result);
});
