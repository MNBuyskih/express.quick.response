"use strict";

module.exports = function (request, response, next) {
    response.e200 = function (data) {
        this.e(200, data);
    };
    response.e400 = function (data) {
        this.e(400, data);
    };
    response.e403 = function (data) {
        this.e(403, data);
    };
    response.e404 = function (data) {
        this.e(404, data);
    };
    response.e = function (status, data) {
        response.status(status).end(data ? JSON.stringify(data) : undefined);
    };

    next();
};