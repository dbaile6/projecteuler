// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


// How many such routes are there through a 20×20 grid?


//Initializes route path

// 1. Create arrays out of inputs
// 2.Create a fail state
// 3. Creates an iterative formula to find out routes.

let route = [];

let getRoute = (sizeX, sizeY) => {
    //Turns sizeX into an array
    route[sizeX] = route[sizeX] || []
    if (route[sizeX][sizeY]) {
        return route[sizeX][sizeY];
    }
    //If there is no grid return 1
    if (sizeX == 0 || sizeY == 0) return 1;
    //Figures out if you can move
    let routes = getRoute(sizeX - 1, sizeY);
    routes += getRoute(sizeX, sizeY - 1);
    route[sizeX][sizeY] = routes;
    return routes;
};

console.log(getRoute(2, 2));
console.log(getRoute(20, 20));

