import { expressjwt } from 'express-jwt';
import util from 'util';
import getConfig from 'next/config';



const { serverRuntimeConfig } = getConfig();

export { jwtMiddleware };

function jwtMiddleware(req, res) {
    const url=req.url;
    const pathSegments = url.split('/');

    // Get the last parameter (last element in the pathSegments array)
    const id= pathSegments[pathSegments.length - 1];

    const publicPaths=[
        // public routes that don't require authentication
        '/api/users/register',
        '/api/users/authenticate',
        '/api/contacts',
        '/api/articles',
        '/api/articles/featured',
        `/api/articles/${id}`,
        `/api/category/${id}`
    ]
 
   
        
 
    const middleware = expressjwt({ secret: serverRuntimeConfig.secret, algorithms: ['HS256'] }).unless({
        path:publicPaths
        
    });

    return util.promisify(middleware)(req, res);
}