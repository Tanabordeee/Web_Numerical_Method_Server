const Math = require('mathjs');
exports.NewTonRaphson = async (req , res ) => {
    const {equation , guess} = req.body;

    const derivative = Math.derivative(equation , 'x');

    function calculate(x){
        let result = Math.evaluate(equation , {x : x});
        return result;
    }

function calculate_diff(x){
    return derivative.evaluate({x : x});
}

let x = parseInt(guess);
let x_new = 0;
let x_old = 0;
let i = 0;
let error = 1;
while (error > 0.000001){
    x_old = x;
    funcX = calculate(x);
    funcX_diff = calculate_diff(x);
    x = x - (funcX / funcX_diff);
    x_new = x;
    error = Math.abs(x_new - x_old);
    i++;
}
res.json({"result" : x_new});
}
