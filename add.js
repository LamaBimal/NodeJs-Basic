// In node js, there is aliasing as var exports = modules.exports;
function sum(a,b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}
console.log(sum(1,2));
// inline exporting tool -> module.exports
//module.exports = sum;
exports.subtract = subtract;
exports.sum = sum;