import Router from 'express';
import Logger from 'winston';

export default (app: Router) => {
    const route = Router();
    app.use('/auth', route);

    // REST Api
    route.get('/id', (request, response) => {
        Logger.info('aaaa');
        response.send('aaaa');
    });
    route.post('/login', (request, response) => {
        Logger.info('bbbb');
        response.send('bbbb');
    });
    route.put('/id', (request, response) => {
        Logger.info('cccc');
        response.send('cccc');
    });
    route.delete('/id', (request, response) => {
        Logger.info('dddd');
        response.send('dddd');
    });

}