import Router from 'express'
import Write from './routes/write'
import Landing from './routes/landing'

export default () => {
    const app = Router();
    Write(app);
    Landing(app);
    return app;
}