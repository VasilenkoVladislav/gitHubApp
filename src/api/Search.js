import Base from './Base';
import config from '../configApi/config';

export default class Search extends Base {
    searchRepositories = ({searchValue, sort, order, page}, headers) => {
        const params = {
            q: searchValue,
            sort,
            order,
            per_page: 15,
            page
        };
        return this.apiClient.get(config.search.repositories, params, headers);
    };
}
