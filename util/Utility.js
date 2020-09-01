function ValidateInput(check, data) {

    var count = 0;

    for (const key in check) {

        if (key in data) {

            count += 1;

        }

    }
    // console.log(count, Object.keys(data).length)
    if (count === Object.keys(data).length) {

        return true;
    } else {
        return false
    };
}

function ValidateInput2(check, data) {

    var count = 0;

    for (const key in check) {

        if (key in data) {

            count += 1;

        }

    }

    if (count === Object.keys(data).length)

        return true;

    else return false;
}

module.exports.ValidateInput = ValidateInput;

module.exports.ValidateInput2 = ValidateInput2;