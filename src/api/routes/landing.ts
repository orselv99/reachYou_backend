import router from 'express';
//import request from 'request';
export default (app: router) => {
    const route = router();

    app.use('/landing', route);

    // 방문자의 ip 확인
    // 방문자의 도시, 나라 정보를 확인
    // 날씨 서비스
    route.get('/getWeather', (request, response) => {
        //Logger.info(`${request.clientIp} is connected.`);
        response.end(`${request.visitorIpAddress}`);
    });
}