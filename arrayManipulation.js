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

stringArray = ["Hawa", "Akosua", "Kwasi", "Abena", "Smith", "Akua", "Kwabena"];

formatArrayStrings(stringArray, num); 

// returend array is ['hawa', 'AKOSUA', 'kwasi', 'ABENA', 'smith', 'AKUA', 'kwabena']

