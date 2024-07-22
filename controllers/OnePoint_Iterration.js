const math = require('mathjs');

exports.OnePoint_Iterration = async (req , res ) =>{
    const { equation , guess } = req.body;
    function calculate(x){
        let result = math.evaluate(equation , {x : x});
        return result;
    }
    
    let x = parseInt(guess);
    let old_x = 0;
    let new_x = 0;
    while(true){
        old_x = x;
        x = calculate(x);
        new_x = x;
        check = Math.abs(new_x - old_x);
        if (check < 0.000001){
            res.json({"result":new_x});
            break;
        }
        if(new_x == Infinity || new_x == -Infinity){
            res.json({"result":"infinity"});
            break;
        }
    }
}