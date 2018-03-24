var route = [];

var getRoute = function (sizeX, sizeY) {
    route[sizeX] = route[sizeX] || []
    if (route[sizeX][sizeY]) {
        return route[sizeX][sizeY];
    }

    if (sizeX == 0 || sizeY == 0) return 1;
    //Time to move?
    var routes = getRoute(sizeX - 1, sizeY);
    routes += getRoute(sizeX, sizeY - 1);
    route[sizeX][sizeY] = routes;
    return routes;
};

console.log(getRoute(2, 2));
console.log(getRoute(20, 20));