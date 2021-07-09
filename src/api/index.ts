import router from 'express'
import write from './routes/write'
import landing from './routes/landing'

export default () => {
    const app = router();
    write(app);
    landing(app);
    return app;
}