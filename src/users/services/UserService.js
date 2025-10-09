import backend from "@/backend.js"

export class UserService {

    static async all() {
        return (await backend.get('usuarios')).data ?? [];
    }
}