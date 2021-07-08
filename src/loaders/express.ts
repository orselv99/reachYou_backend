import cors from 'cors';
import express from 'express';
import routes from '../api';

export default (app: express.Application) => {

    // 서버 health check
    app.get('/status', (request, response) => {
        response.status(200).end();
    });
    app.head('/status', (request, response) => {
        response.status(200).end();
    });

    // reverse proxy 설정
    app.enable('trust proxy');

    // 
    app.use(cors());

    // 
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json());

    //
    app.use('/', routes());
}