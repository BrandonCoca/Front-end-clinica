import backend from '@/backend/api/backend.js';

export class AuthService {

    static login(name, password) {
        return backend.post("login", {
            name,
            password
        })
    }

}