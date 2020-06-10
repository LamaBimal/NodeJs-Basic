// In node js, there is aliasing as var exports = modules.exports;
function sum(a,b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}
// short-handed function
exports.sum = (a,b) => (a+b);
exports.subtract = (a,b)=> (a-b);
// inline exporting tool -> module.exports
//module.exports = sum;
//exports.subtract = subtract;
//exports.sum = sum;

