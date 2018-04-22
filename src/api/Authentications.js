import Base from './Base';
import base64 from 'base-64';
import config from '../configApi/config';

export default class Authentications extends Base {
    signIn = ({userName, password}) => {
        const headers = { Authorization: `Basic ${base64.encode(userName + ':' + password)}` };
        return this.apiClient.get(config.authentication.signIn, {}, headers);
    };
}
