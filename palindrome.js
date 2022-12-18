
function palindrome(string) {

    // find the length of a string
    const len = string.length;
    // check if string length is 10
    if (len < 10) {
    // loop through half of the string
        for (let i = 0; i < len / 2; i++) {

            // check if first and last string are same
            if (string[i] !== string[len - 1 - i]) {
                return 'It is not a palindrome';
            }
        }
        return 'It is a palindrome';
    }
    return 'String is greater than 10 characters';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = palindrome(string);

alert(value);