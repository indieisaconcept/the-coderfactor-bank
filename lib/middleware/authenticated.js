'use strict';

module.exports = (config) => {

    config         = config || {};
    config.message = config.message || 'Access denied';

    /**
     * @ngdoc function
     * @name authenticated
     *
     * @description
     * Only allow the request to proceed should the user be authenticated
     *
     * @param {object}      req   Standard HTTP/Express request object
     * @param {object}      res   Standard HTTP/Express response object
     * @param {function}    next  Callback
     *
     */

    return (req, res, next) => {

        let isAuthenticated = res.locals &&
                              res.locals.authenticated;

        if (isAuthenticated) { return next(); }

        res.writeHead(403, { 'content-type' : 'text/html' });
        res.end(`${config.message}`);
    };
};
