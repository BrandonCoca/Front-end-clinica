import backend from '@/backend';

export class PatientService {
    static async all(page) {
        return (await backend.get(`pacientes?page=${page}`)).data;
    }
}