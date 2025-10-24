"use strict";

const values = [21,22,23,25,27,28,29,31,32,34,35];

/**
 * Returns the index of the searched value
 * @param {number} search the value to search for
 * @param {Array<number>} values sorted array of values
 */
function binarySearch( searchFor, values, logger = (msg) => {console.log(msg)} ) {
    let lower_index = 0;
    let upper_index = values.length-1;
    let middle_index = -1;
    let found = false;
    let iterations = 0;
    while (values[middle_index] !== searchFor && iterations < Math.log2(values.length)+1) {
        logger(`Searching for ${searchFor} between index ${lower_index} and ${upper_index}.`);
        middle_index = lower_index + Math.floor((upper_index - lower_index) / 2);
        iterations++;
        if (values[middle_index] === searchFor) {
            found = true;
            break;
        } else if (values[middle_index] < searchFor) {
            lower_index = middle_index + 1;
        } else {
            upper_index = middle_index - 1;
        }
        logger(`${iterations} : At position ${middle_index} I found ${values[middle_index]}.`);
    }
    if (!found) {
        middle_index = -1;
    }
    return {"found": found, "index": middle_index, "iterations": iterations};
}

function calcMiddle(upper, lower) {
    return lower + Math.floor((upper-lower)/2);
}

console.log( binarySearch( 21, values, (msg) => {} ) );
console.log( binarySearch( 22, values, (msg) => {} ) );
console.log( binarySearch( 27, values, (msg) => {} ) );
console.log( binarySearch( 29, values, (msg) => {} ) );
console.log( binarySearch( 34, values, (msg) => {} ) );
console.log( binarySearch( 35, values, (msg) => {} ) );
console.log( binarySearch( 50, values, (msg) => {} ) );
console.log( binarySearch( 22, values.reverse(), (msg) => {console.log(msg)} ) );