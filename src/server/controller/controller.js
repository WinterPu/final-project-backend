import {
    search,
    get,
    save,
    getUser,
    saveUser,
    getUserById,
    saveSteamApp,
    getSteamApps,
    saveGame,
    getGames,
    saveCarousel,
    getCarousels,
    saveGameDetail,
    getGameDetail,
    getGameById
} from '../service/service.js';

export function list(request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    let searchQuery = {};
    if (request.query.lastName) {
        searchQuery = {
            lastName: request.query.lastName
        };
    }
    search(searchQuery, callback);
}

export function detail(request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    get(request.params.contactId, callback);
}

export function fetchUser(request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    getUserById(request.params, callback);
}

export function add(request, response) {
    let newContact = Object.assign({}, request.body),
        callback = function (contact) {
            response.status(200);
            response.json(contact);
        };
    save(newContact, callback);
}

export function addUser(request, response) {
    let newUser = Object.assign({}, request.body),
        callback = function (user) {
            response.status(200);
            response.json(user);
        };
    saveUser(newUser, callback);
}

export function autheticate(request, response) {
    if (request.body.username && request.body.password) {
        let callback = function (user) {
            if (user && user._id) {
                response.status(200);
                response.json(user);
            } else {
                response.status(400);
                response.json({
                    "message": 'Username or password is incorrect'
                });
            }
        }
        getUser(request.body, callback);
    } else {
        response.status(400);
        response.json({
            "message": 'Invalid input'
        });
    }

}

export function addSteamApp(request, response) {
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    saveSteamApp(request.body, callback);
}

export function fetchSteamApp(request, response) {
    let callback = function (steamApp) {
        response.status(200);
        response.json(steamApp);
    };
    getSteamApps(request, callback);
}

export function addGame(request, response) {
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    saveGame(request.body, callback);
}

export function fetchGame(request, response) {
    let callback = function (steamApp) {
        response.status(200);
        response.json(steamApp);
    };
    getGames(request, callback);
}

export function addCarousel(request, response) {
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    saveCarousel(request.body, callback);
}

export function fetchCarousel(request, response) {
    let callback = function (steamApp) {
        response.status(200);
        response.json(steamApp);
    };
    getCarousels(request, callback);
}

export function addGameDetail(request, response) {
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    saveGameDetail(request.body, callback);
}

export function fetchGameDetail(request, response) {
    let callback = function (gd) {
        let gamedetail = gd;
        let cb = function (game) {
            if (!gamedetail || gamedetail ==null) {
                response.status(400);
                response.json({
                    "error" : "no such game"
                });
            } else {
                response.status(200);
                let result = new Object();
                result.img = game.img;
                result.img1 = game.img1;
                result.img2 = game.img2;
                result.img3 = game.img3;
                result.title = game.title;
                result.detail = game.detail;
                result.platform = game.platform;
                result.price = game.price;
                result.background = gamedetail.background;
                result.recommend = gamedetail.recommend;
                response.json(result);
            }
        };
        getGameById(request.params._id, cb);
    };



    getGameDetail(request.params._id, callback);
}