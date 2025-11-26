<template>
    <div class="users-container">
        <v-card class="mt-8 mx-auto" max-width="1000">
            <v-form @submit.prevent="onSubmit">
                <v-conteiner>
                    <v-row class="my-4">
                        <v-col cols="12">
                            <v-text-field v-model="nombre" label="Nombre del paciente" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="ci" label="Carnet de identidad" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="fecha_nac" label="Fecha de nacimiento" type="date" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select label="Género" v-model="genero" :items="generoOptions" item-value="value" item-title="text"></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="cel" label="Celular" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="6" class="d-flex justify-center">
                            <v-btn type="submit" class="btn-nor">
                                Crear paciente
                            </v-btn>
                        </v-col>
                        <v-col cols="6" class="d-flex justify-center">
                            <v-btn type="button" class="btn-nor" @click="onCancel">
                                Cancelar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-conteiner>
            </v-form>
        </v-card>
    </div>
</template>
<script>
import Swal from 'sweetalert2';
import backend from '@/backend.js';
export default {
    data() {
        return {
            nombre: '',
            ci: '',
            fecha_nac: '',
            cel: '',
            genero: null,
            generoOptions: [
                {text: 'Masculino', value: true},
                {text: 'Femenino', value: false},
            ],
        }
    },
    methods: {
        async onSubmit(){
            if(!this.nombre || !this.ci || !this.fecha_nac || this.genero === null || !this.celular){
                return Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: 'Todos los campos son requeridos',
                })
            }
            try{
                await backend.post('pacientes', {
                    nombre: this.nombre,
                    ci: this.ci,
                    fecha_nac: this.fecha_nac,
                    genero: this.generoOptions.value,
                    celular: this.celular,
                });
            }catch(error){
                return Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: error.response.data.message ?? null,
                })
            }
            this.$router.push({ name: 'patients.index' });
        },
        onCancel(){
            this.$router.push({ name: 'patients.index' });
        }
    }
};
</script>