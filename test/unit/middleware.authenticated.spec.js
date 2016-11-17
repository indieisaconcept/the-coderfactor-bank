import { test } from 'ava';
import middleware from '../../lib/middleware/authenticated';

test('is a function', t => {

    t.is(typeof middleware, 'function');
});

test('return a middleware function when called', t => {

    let result = middleware();

    t.is(typeof result, 'function');
    t.is(result.length, 3);
});

test.cb('ends request with "Access denied" when not authenticated', t => {

    t.plan(1);

    let mware   = middleware(),
        mockReq = {},
        mockRes = {
            writeHead : () => {},
            end       : (body) => {
                t.is(body, 'Access denied');
                t.end();
            }
        };

    mware(mockReq, mockRes);
});

test.cb('ends requst with custom error message when not authenticated', t => {

    t.plan(1);

    let mware   = middleware({
            message : 'You shall not pass'
        }),
        mockReq = {},
        mockRes = {
            writeHead : () => {},
            end       : (body) => {
                t.is(body, 'You shall not pass');
                t.end();
            }
        };

    mware(mockReq, mockRes);
});

test.cb('calls next if authenticated', t => {

    t.plan(1);

    let mware   = middleware(),
        mockReq = {},
        mockRes = {
            locals    : { authenticated : true },
            writeHead : () => {},
            end       : (body) => {
                throw Error('I should not be called');
            }
        };

    mware(mockReq, mockRes, () => {
        t.pass('next called');
        t.end();
    });
});
