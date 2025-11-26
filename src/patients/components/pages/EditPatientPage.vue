<template>
    <div class="users-container">
        <v-card class="mt-8 mx-auto" max-width="1000">
            <v-container>
                <v-form @submit.prevent="onSubmit">
                    <v-row>
                        <v-col cols="12" class="mt-2">
                            <v-text-field label="Nombre del paciente" v-model="patient.nombre"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="C.I." v-model="patient.ci"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Fecha de nacimiento" type="date" v-model="patient.fecha_nac"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-select label="Género" v-model="patient.genero" :items="generoOptions" item-value="value" item-title="text"></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Celular" v-model="patient.cel"></v-text-field>
                        </v-col>
                        <v-col cols="6" style="width: 100%;">
                            <v-btn type="submit" class="btn-nor">Guardar</v-btn>
                        </v-col>
                        <v-col cols="6" style="width: 100%;">
                            <v-btn type="button" class="btn-nor" :to="{name: 'patients.index'}">Cancelar</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
        </v-card>
    </div>
</template>
<script>
import backend from '@/backend.js';
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            patient: {
                nombre: '',
                ci: '',
                fecha_nac: '',
                genero: null,
                cel: '',
            },
            generoOptions: [
                {text: 'Masculino', value: true},
                {text: 'Femenino', value: false},
            ],
        }
    },
    async mounted() {
        const patientId = this.$route.params.id;
        this.patient = ( await backend.get(`pacientes/${patientId}`) ).data;
        if (this.patient.fecha_nac) {
            this.patient.fecha_nac = new Date(this.patient.fecha_nac).toISOString().substr(0, 10);
        }
        this.patient.genero = !!this.patient.genero;
    },
    methods: {
        async onSubmit() {
            console.log(this.patient);
            if(!this.patient.nombre || !this.patient.ci || !this.patient.fecha_nac || this.patient.genero === null || !this.patient.cel){
                return Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: 'Todos los campos son requeridos',
                })
            }
            try {
                await backend.patch(`pacientes/${this.$route.params.id}`, {
                    nombre: this.patient.nombre,
                    ci: this.patient.ci,
                    fecha_nac: this.patient.fecha_nac,
                    genero: this.patient.genero,
                    cel: this.patient.cel
                })
            } catch (error) {
                return Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: error.response.data.message ?? null,
                })
            }
            this.$router.push({ name: 'patients.index' });
        }
    }
};
</script>