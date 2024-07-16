const math = require('mathjs');
exports.Graphical_Method = async (req , res) =>{
    const {equation} = req.body;
    function calculate(x) {
        let result = math.evaluate(equation , {x : x});
        return result;
    }
    function checkfun(x) {
        if(x < 0){
            return -1;
        }else{
            return 1;
        }
    }
    let x1 = 0;
    let x2 = 0;
    let xAns1 = 0;
    let first_loop = calculate(0);
    let check_loop = checkfun(first_loop);
    for(let i = 0; i <= 10 ; i++) {
        let result = calculate(i);
        let check_result_loop = checkfun(result);
        if(check_loop != check_result_loop){
            break;
        }
        x1 = i;
        x2 = i+1;
    }
    let first = calculate(x1);
    let check = checkfun(first);
    for(let j = x1 ; j <= x2 ; j+=0.000001){
        result = calculate(j);
        let check_result = checkfun(result);
        if(check != check_result){
            break;
        }
        xAns1 = j;
    }
res.json({"result":xAns1.toFixed(6)});
}