var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];

    for (let i = 0; i <= heights.length; i++) {
        // If the current height is less than the previous one in the stack
        while (stack.length > 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
            const height = heights[stack.pop()]; // Pop the index from the stack
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            // Calculate area using popped height and width
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i); // Push the current index to the stack
    }

    return maxArea; // Return the maximum area of the rectangle
};
// Developed by SENYA and Ivan idk why i spent on that solution half a day