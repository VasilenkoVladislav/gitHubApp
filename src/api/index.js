import ApiClient from './ApiClient';
import Authentications from './Authentications';
import Search from './Search';

export default function ({ apiPrefix } = {}) {
    const api = new ApiClient({ prefix: apiPrefix});
    return {
        authentications: new Authentications({apiClient: api}),
        search: new Search({apiClient: api})
    };
}
