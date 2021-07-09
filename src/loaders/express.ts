import cors from 'cors';
import express from 'express';
import routes from '../api';
import requestIp from 'request-ip';
import net from 'net';

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

    // requestIp (접속자 ip 확인: https://github.com/pbojinov/request-ip)
    app.use(requestIp.mw({
        // custom 속성
        attributeName: 'visitorIpAddress',
    }));
    app.use((request, response) => {
        let ip = request.visitorIpAddress;
        let ipType = net.isIP(ip);
        console.log(`Visitor's ip address (IPv${ipType}) is ${ip}`);
    });

    // json-parser 
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json());

    // route
    app.use('/', routes());
}