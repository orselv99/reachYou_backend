import config from '../../config';
import mongo from './mongo';

export default async (): Promise<any> => {
    return mongo();
}