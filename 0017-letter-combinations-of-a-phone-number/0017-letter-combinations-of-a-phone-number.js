const phoneMapping = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

var letterCombinations = function(digits) {
    if (digits === null || digits.length === 0) {
        return [];
    }

    const combinations = [];

    const backtrack = (index, currentCombination) => {
        if (index === digits.length) {
            combinations.push(currentCombination);
            return;
        }

        const currentDigit = digits.charAt(index);
        const letters = phoneMapping[currentDigit];
        
        for (const letter of letters) {
            backtrack(index + 1, currentCombination + letter);
        }
    };

    backtrack(0, '');

    return combinations;
};
