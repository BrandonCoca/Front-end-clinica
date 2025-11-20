import backend from '@/backend.js';
import { TokenService } from '@/auth/services/TokenService.js';

export class AuthService {

    static async login(name, password) {
        try {
            const response = await backend.post('/login', { name, password });
            const token = response.data.data.token;
            TokenService.set(token);
            return response.data.data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                return null;
            }
            return null;
        }
    }

}