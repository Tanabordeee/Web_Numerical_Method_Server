const math = require('mathjs');

exports.Bisection_Method = async (req, res) => {
    const { equation, Xl, Xr } = req.body;

    function calculate(x) {
        let result = math.evaluate(equation, { x: x });
        return result;
    }

    let XLeft = parseFloat(Xl);
    let XRight = parseFloat(Xr);
    let Xm, funcXm, funcXright;
    let check;

    while (true) {
        Xm = (XLeft + XRight) / 2;
        funcXm = calculate(Xm);

        if (funcXm === 0) {
            break;
        }

        funcXright = calculate(XRight);

        if (funcXm * funcXright > 0) {
            XRight = Xm;
            check = Math.abs((XRight - XLeft));
        } else {
            XLeft = Xm;
            check = Math.abs((XLeft - XRight));
        }

        if (check < 0.000001) {
            break;
        }
    }

    res.json({ "result": Xm.toFixed(6) });
}
