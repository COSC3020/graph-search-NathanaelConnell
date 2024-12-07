/**
 * Depth-First Search implementation.
 * @param {Object} graph - The adjacency list representing the graph.
 * @param {string} startNode - The starting node for DFS.
 * @param {string} targetNode - The target node to find.
 * @returns {string[]} - A list of nodes representing the path from startNode to targetNode.
 */
function depthFirstSearch(graph, startNode, targetNode) {
    const visited = new Set();
    let path = [];
    /**
     * Helper recursive function for DFS.
     * @param {string} currentNode - The current node being visited.
     * @param {string[]} currentPath - The current path being explored.
     * @returns {boolean} - Whether the target was found in this path.
     */
    function dfsHelper(currentNode, currentPath) {
        if (visited.has(currentNode)) return false;
        visited.add(currentNode);
        currentPath.push(currentNode);
        if (currentNode === targetNode) {
            path = [...currentPath];
            return true;
        }
        for (const neighbor of graph[currentNode] || []) {
            if (dfsHelper(neighbor, currentPath)) return true;
        }
        currentPath.pop();
        return false;
    }
    if (startNode === targetNode) {
        return [startNode];
    }
    dfsHelper(startNode, []);
    return path;
}
module.exports = depthFirstSearch;
