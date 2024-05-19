function processArray(numbers)  {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3; 
        }
    });
}


function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}


num = processArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

stringArray = ['hello', 'world', 'this', 'is', 'a', 'test'];

formatArrayStrings(stringArray, num);

