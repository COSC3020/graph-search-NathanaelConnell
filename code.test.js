const depthFirstSearch = require('./code');

function runTests() {
    // Adjusted graph structure to prioritize exploration
    const graph = {
        A: ['C', 'B'], // Changed order here to prefer 'C' first
        B: ['D', 'E'],
        C: ['F'],
        D: [],
        E: ['F'],
        F: []
    };

    // Test 1: Valid path to reachable target
    let result = depthFirstSearch(graph, 'A', 'F');
    console.log('Test 1 - Path from A to F:', result);
    console.assert(result.join(',') === 'A,C,F', 'Test 1 Failed');

    // Test 2: Path to another reachable target
    result = depthFirstSearch(graph, 'A', 'E');
    console.log('Test 2 - Path from A to E:', result);
    console.assert(result.join(',') === 'A,B,E', 'Test 2 Failed');

    // Test 3: Target is the same as the starting node
    result = depthFirstSearch(graph, 'A', 'A');
    console.log('Test 3 - Path from A to A:', result);
    console.assert(result.join(',') === 'A', 'Test 3 Failed');

    // Test 4: Target is unreachable
    result = depthFirstSearch(graph, 'A', 'Z');
    console.log('Test 4 - Path from A to Z (unreachable):', result);
    console.assert(result.join(',') === '', 'Test 4 Failed');

    // Test 5: Empty graph
    const emptyGraph = {};
    result = depthFirstSearch(emptyGraph, 'A', 'F');
    console.log('Test 5 - Path in empty graph:', result);
    console.assert(result.join(',') === '', 'Test 5 Failed');

    console.log('All tests passed!');
}

runTests();
