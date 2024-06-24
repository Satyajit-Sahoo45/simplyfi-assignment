const tickets = [
    ["Paris", "Skopje"],
    ["Zurich", "Amsterdam"],
    ["Prague", "Zurich"],
    ["Barcelona", "Berlin"],
    ["Kiev", "Prague"],
    ["Skopje", "Paris"],
    ["Amsterdam", "Barcelona"],
    ["Berlin", "Kiev"],
    ["Berlin", "Amsterdam"]
];

const startCity = "Kiev";
const endCities = ["Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona"];

let graph = {};
for (let [from, to] of tickets) {
    if (!graph[from]) {
        graph[from] = [];
    }
    graph[from].push(to);
}

for (let city in graph) {
    graph[city].sort();
}

function findRoute(graph, start, endCities) {
    let route = [];
    let visited = new Set();

    function dfs(currentCity) {
        if (visited.has(currentCity)) return false;
        visited.add(currentCity);
        route.push(currentCity);

        if (route.length === endCities.length) {
            return true;
        }

        if (graph[currentCity]) {
            for (let nextCity of graph[currentCity]) {
                if (dfs(nextCity)) {
                    return true;
                }
            }
        }

        visited.delete(currentCity);
        route.pop();
        return false;
    }

    dfs(start);
    return route;
}

let route = findRoute(graph, startCity, endCities);
console.log(route);
