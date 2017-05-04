/**
 * Validates if a given string is empty, null or undefined.
 *
 * @param str the string
 * @returns {boolean} true if the string is empty, null or undefined, otherwise false
 */
export function isEmpty(str) {
    return (!str || 0 === str.length);
}