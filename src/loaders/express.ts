import cors from 'cors';
import express from 'express';
import routes from '../api';

export default (app) => {

    // 서버 health check
    app.get('/status', (request, response) => {
        response.status(200).end();
    });
    app.head('/status', (request, response) => {
        response.status(200).end();
    });

    // reverse proxy 설정
    app.enable('trust proxy');

    // CORS (https://evan-moon.github.io/2020/05/21/about-cors/)
    app.use(cors());

    // json-parser 
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json());

    // route
    app.use('/', routes());
}