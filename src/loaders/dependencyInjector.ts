// https://github.com/typestack/typedi
// singleton pattern 이랑 비슷한듯 하다
import Container from 'typedi';
import Logger from './logger';

export default (dbConnection) => {
    Container.set('dbConnection', dbConnection);
    Container.set('logger', Logger);
}