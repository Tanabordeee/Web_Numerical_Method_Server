const math = require('mathjs');

exports.FalsePosition_Method = async (req, res) => {
    const { equation, Xl, Xr } = req.body;

    function calculate(x) {
        let result = math.evaluate(equation, { x: x });
        return result;
    }

    let XLeft = parseFloat(Xl)
    let XRight = parseFloat(Xr)
    let X1 = 0;
    let funcX1 , funcXright , funcXleft
    let check;
    while(1){
        funcX1 = calculate(X1)
        funcXright = calculate(XRight)
        funcXleft = calculate(XLeft)
        X1 = ((XLeft * funcXright) - (XRight * funcXleft)) / (funcXright - funcXleft)
        funcX1 = calculate(X1)
        if(funcX1 === 0) {
            break;
        }
        if(funcX1 * funcXright > 0){
            XRight = X1;
            check = Math.abs((XRight - XLeft))
        }else{
            XLeft = X1;
            check = Math.abs((XLeft - XRight))
        }
        if (check < 0.000001) {
            break;
        }
    }
    res.json({"result : ":X1})
}
