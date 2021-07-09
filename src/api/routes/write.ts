import router from 'express';

export default (app: router) => {
    const route = router();
    app.use('/auth', route);

    // REST Api
    route.get('/id', (request, response) => {
        response.send('aaaa');
    });
    route.post('/login', (request, response) => {
        response.send('bbbb');
    });
    route.put('/id', (request, response) => {
        response.send('cccc');
    });
    route.delete('/id', (request, response) => {
        response.send('dddd');
    });

}