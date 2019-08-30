import bitBookApi from '../shared/api';

class AuthService {
    async loginUser(data) {
        const endpoint = '/auth/login';

        const response = await bitBookApi.post(endpoint, data);
        return response;
    }

    async registerUser(data) {
        const endpoint = '/auth/register';

        const response = await bitBookApi.post(endpoint, data);
        return response;
    }
}

export const authService = new AuthService();