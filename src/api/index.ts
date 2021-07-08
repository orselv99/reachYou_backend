import Router from 'express'
import auth from './routes/auth'
import landing from './routes/landing'

export default () => {
    const app = Router();
    auth(app);
    landing(app);
    return app;
}