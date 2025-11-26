import backend from "@/backend.js"

export class ProfessionalService {
    static async all(page) {
        return (await backend.get(`profesionales?page=${page}`)).data ?? [];
    }
}
