var restoreIpAddresses = function(s) {
    const result = [];

    // Helper function to backtrack and generate valid IP addresses
    const backtrack = (start, parts) => {
        // If we have made 4 parts and reached the end of the string, add the IP address to the result
        if (parts.length === 4 && start === s.length) {
            result.push(parts.join('.'));
            return;
        }

        // If we have made 4 parts but haven't reached the end of the string, stop processing
        if (parts.length === 4 || start === s.length) {
            return;
        }

        // Explore different possibilities of placing dots after 1, 2, or 3 digits
        for (let i = 1; i <= 3 && start + i <= s.length; i++) {
            const part = s.substring(start, start + i);

            // Check if the part is valid (not starting with '0' except when it's '0' itself and within the valid range)
            if ((part.length > 1 && part[0] === '0') || parseInt(part) > 255) {
                continue;
            }

            parts.push(part); // Add the current part to the IP address
            backtrack(start + i, parts); // Recursively backtrack for the next part
            parts.pop(); // Backtrack by removing the current part
        }
    };

    // Start backtracking from the beginning of the string with an empty initial parts array
    backtrack(0, []);

    return result;
};
// Developed by SENYA