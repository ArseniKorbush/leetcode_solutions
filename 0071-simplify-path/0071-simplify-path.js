// Developed by SENYA

/**
 * Converts the given absolute path to its simplified canonical path in a Unix-style file system.
 * @param {string} path - Absolute path to be simplified.
 * @return {string} - Returns the simplified canonical path.
 */
var simplifyPath = function(path) {
    const stack = [];
    const components = path.split('/');

    for (let component of components) {
        if (component === '..') {
            stack.pop(); // Move one level up (remove the last directory)
        } else if (component !== '.' && component !== '') {
            stack.push(component); // Add valid directory to the stack
        }
    }

    // Construct the simplified canonical path
    const canonicalPath = '/' + stack.join('/');

    return canonicalPath;
};

// Test cases
console.log(simplifyPath("/home/")); // Output: "/home"
console.log(simplifyPath("/../")); // Output: "/"
console.log(simplifyPath("/home//foo/")); // Output: "/home/foo"
