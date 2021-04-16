export class Rest {
    static getHeaders(type: string) {
        const token = localStorage.getItem("bearerToken");
        const APPLICATION_JSON_WITH_BEARER_TOKEN = 'APPLICATION_JSON_WITH_BEARER_TOKEN';
        const APPLICATION_JSON_WITHOUT_BEARER_TOKEN = 'APPLICATION_JSON_WITHOUT_BEARER_TOKEN';
        let headers = {};
        switch (type) {
            case APPLICATION_JSON_WITH_BEARER_TOKEN:
                headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
                return headers;
            case APPLICATION_JSON_WITHOUT_BEARER_TOKEN:
                headers = {
                    'Content-Type': 'application/json',
                }
                return headers;
            default:
                return headers;
        }
    }
}
export enum RestHeader {
    APPLICATION_JSON_WITH_BEARER_TOKEN = 'APPLICATION_JSON_WITH_BEARER_TOKEN',
    APPLICATION_JSON_WITHOUT_BEARER_TOKEN = 'APPLICATION_JSON_WITHOUT_BEARER_TOKEN'
}