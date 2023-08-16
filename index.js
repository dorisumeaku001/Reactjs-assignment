// write an algorithm that read a sentence, which ends with a point,, character by character to determine:

// The number of words in the sentence (assuming that the words are separated by a single space).
// The number of vowels in the sentence.
// You have to keep in mind that:

// Each character will be treated separately.

// The last character is the point.

// Use three variables as counters.
function countWordsAndVowels(sentence) {
    let numWords = 0;
    let numVowels = 0;
    const vowels = "AEIOUaeiou";

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char.match(/[a-zA-Z]/)) { // Check if the character is a letter
            if (vowels.includes(char)) {
                numVowels++;
            }
        }

        if (char === ' ') { // Check if the character is a space, indicating the end of a word
            numWords++;
        }
    }

    // Remove 1 from numWords to account for the fact that the sentence ends with a point
    numWords--;

    return [numWords, numVowels];
}

// Read the input sentence
const inputSentence = prompt("Enter a sentence ending with a point: ");

// Call the function to count words and vowels
const [wordCount, vowelCount] = countWordsAndVowels(inputSentence);

// Display the results
console.log("Number of words:", wordCount);
console.log("Number of vowels:", vowelCount);



// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Use an array as a method.
// Initialize sum = 0. Compare each element of set one with the second set and if element is not present then add that element to sum. Then do the vice versa to add elements from the second set.
function sumOfDistinctElements(set1, set2) {
    let sum = 0;

    for (let i = 0; i < set1.length; i++) {
        if (!set2.includes(set1[i])) {
            sum += set1[i];
        }
    }

    for (let i = 0; i < set2.length; i++) {
        if (!set1.includes(set2[i])) {
            sum += set2[i];
        }
    }

    return sum;
}

// Example sets
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

// Calculate the sum of distinct elements
const result = sumOfDistinctElements(set1, set2);

// Display the result
console.log("Sum of distinct elements:", result);
