// FetchUsers.js

const URI = 'http://192.168.0.181:8000';

export default {
    async fetchUsers() {
        try {
                let response = await fetch(URI + '/api/usuarios');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}