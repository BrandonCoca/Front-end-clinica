<template>
    <div class="users-container">
        <v-card class="mt-8 mx-auto" max-width="1000">
            <v-container>
                <v-form @submit.prevent="onSubmit">
                    <v-row>
                        <v-col cols="12" class="mt-2">
                            <v-text-field label="Nombre del personal de salud" v-model="professional.nombre"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Matricula" v-model="professional.matricula"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Especialidad" v-model="professional.especialidad"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Celular" v-model="professional.cel"></v-text-field>
                        </v-col>
                        <v-col cols="6" style="width: 100%;">
                            <v-btn type="submit" class="btn-nor">Guardar</v-btn>
                        </v-col>
                        <v-col cols="6" style="width: 100%;">
                            <v-btn type="button" class="btn-nor" :to="{name: 'professionals.index'}">Cancelar</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
        </v-card>
    </div>
</template>
<script>
import backend from '@/backend';
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            professional: {
                nombre: '',
                matricula: '',
                especialidad: '',
                cel: ''
            }
        }
    },
    async mounted() {
        const professionalId = this.$route.params.id;
        this.professional = (await backend.get(`profesionales/${professionalId}`)).data;
    },
    methods: {
        async onSubmit() {
            if(!this.professional.nombre || !this.professional.matricula || !this.professional.especialidad || !this.professional.cel){
                return Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: 'Todos los campos son requeridos',
                })
            }
            try{
                await backend.patch(`profesionales/${this.$route.params.id}`, {
                    nombre: this.professional.nombre,
                    matricula: this.professional.matricula,
                    especialidad: this.professional.especialidad,
                    cel: this.professional.cel
                });

            }catch(error){
                return Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: error.response.data.message ?? null,
                })
            }
            this.$router.push({ name: 'professionals.index' });
        }
    }
};
</script>