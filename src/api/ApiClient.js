import axios from 'axios';

export default class ApiClient {
    constructor ({prefix = 'https://api.github.com'} = {}) {
        this.prefix = prefix;
    }
    get (requestUrl, params, headers={}) {
        return this.request({
            url: `${this.prefix}${requestUrl}`,
            method: 'get',
            params,
            headers
        });
    }
    put (requestUrl, payload = {}, headers) {
        return this.request({
            url: `${this.prefix}${requestUrl}`,
            method: 'put',
            data: payload,
            headers
        });
    }
    post (requestUrl, payload = {}, headers) {
        return this.request({
            url: `${this.prefix}${requestUrl}`,
            method: 'post',
            data: payload,
            headers
        });
    }
    delete (requestUrl, headers) {
        return this.request({
            url: `${this.prefix}${requestUrl}`,
            method: 'delete',
            headers
        });
    }
    async request ({url, method, params = {}, data, headers = {}}) {
        try {
            const response = await axios({method, url, params, data, headers});
            response.headers = response && response.headers && response.headers.Authorization || headers;
            return response;
        } catch (error) {
            const response = { error: {} };
            response.error.statusCode = (error && error.response && error.response.status) || 500;
            response.error.status = 'error';
            response.error.message = (error &&
                error.response &&
                error.response.data &&
                error.response.data.message) ||
                'Bad response from server';
            return response;
        }
    }
}
