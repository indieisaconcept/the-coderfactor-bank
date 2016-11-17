'use strict';

/* eslint-disable indent */
const http           = require('http'),
      Express        = require('express'),
      router         = Express(),
      authenticated  = require('./lib/middleware/authenticated'),

      // initialize middleware

      authMiddleware = authenticated({
          message : 'Access is only permitted to registered users'
      });
/* eslint-enable indent */

router.get('/statement', authMiddleware, (req, res) => {
    res.writeHead(200, { 'content-type' : 'text/html' });
    res.end('Account Balance $100');
});

http.createServer(router).listen(3000, () => {
    console.log('listening on port 3000');
});
