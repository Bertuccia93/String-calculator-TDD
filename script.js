
function test() {
    let num = document.getElementById("inputText").value;
    let result = add(num);
    document.getElementById("resultSum").innerHTML = result;
    document.getElementById('boxResult').classList.remove('d-none');
}


function add(numbers) {
    if (numbers == "") return "the summ is 0";
    let separators = delimeter(numbers.split("//"));
    let arrayOfNumber = [];
    if (separators == ",") {
        arrayOfNumber = numbers.split(",");
    } else {
        arrayOfNumber = splitNumber(numbers.split("//")[2], separators);
    }

    let result = 0;
    let negatives = [];

    arrayOfNumber.forEach((element) => {
        const cleanedElement = element.replace(/[^\d-]|-(?=[^\d-]*-)/g, "");
        const num = Number(cleanedElement);
        if (num < 0) {
            negatives.push(num);
        }
        if (num < 1000) {
            result += num;
        }
    });

    if (negatives.length > 0) {
        throw new Error(`Negativi non sono consentiti: ${negatives.join(", ")}`);
    } else {
        return ` the summ is ${result} `;
    }
}

function delimeter(array) {
    console.log(array)
    if (array[0] == "") {
        const stringToHandle = array[1].slice(1, -1);
        let delimeterArray = stringToHandle.split("][");
        return delimeterArray;
    } else {
        return ",";
    }
}

function splitNumber(numbers, separatos) {
    let result = [numbers];
    separatos.forEach((separator) => {
        result = result.flatMap((substring) => substring.split(separator));
    });
    return result.filter((substring) => substring !== "");
}

module.exports = { add };