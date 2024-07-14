const math = require('mathjs');
exports.Graphical_Method = async (req , res) =>{
    const {equation} = req.body;
    function calculate(x) {
        let result = math.evaluate(equation , {x : x});
        return result;
    }
    let closestValue1 = Infinity;
    let closestValue2 = Infinity;
    let ClosestAns1 = Infinity;
    let x1 = 0;
    let x2 = 0;
    let xAns1 = 0;
for(let i = 0; i <= 10 ; i++) {
    let result = calculate(i);
    if(Math.abs(result) < Math.abs(closestValue1)){
        closestValue2 = closestValue1;
        closestValue1 = result;
        x1 = i;
    }else if (Math.abs(result) < Math.abs(closestValue2)){
        closestValue2 = result;
        x2 = i;
    }
}
for(let j = x1 ; j <= x2 ; j+=0.000001){
    result = calculate(j);
    if(Math.abs(result) < Math.abs(ClosestAns1)){
        ClosestAns1 = result;
        xAns1 = j;
    }
}
res.json({"result":xAns1});
}