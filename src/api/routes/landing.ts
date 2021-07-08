import Router from 'express';
import RequestIp from 'request-ip';

export default (app: Router) => {
    const route = Router();
    app.use(RequestIp.mw());

    app.use('/landing', route);

    // 방문자의 ip 확인
    // 방문자의 도시, 나라 정보를 확인
    // 날씨 서비스
    route.get('/getWeather', (request, response) => {
        //Logger.info(`${request.clientIp} is connected.`);
        response.end(request.clientIp);
    });
}