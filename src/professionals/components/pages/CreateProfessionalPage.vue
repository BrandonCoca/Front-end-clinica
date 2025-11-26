<template>
    <div class="users-container">
        <v-card class="mt-8 mx-auto" max-width="1000">
            <v-form @submit.prevent="onSubmit">
                <v-conteiner>
                    <v-row class="my-4">
                        <v-col cols="12" md="6">
                            <v-text-field v-model="nombre" label="Nombre del profesional" required>
                                
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="matricula" label="Matricula" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="especialidad" label="Especialidad" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="cel" label="Celular" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="6" class="d-flex justify-center">
                            <v-btn type="submit" class="btn-nor">
                                Crear usuario
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
import backend from '@/backend.js';
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            nombre: '',
            matricula: '',
            especialidad: '',
            cel: '',
        }
    },
    methods: {
        async onSubmit(){
            if(!this.nombre || !this.matricula || !this.especialidad || !this.cel){
                return Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: 'Todos los campos son requeridos',
                })
            }
            try{
                await backend.post('profesionales', {
                    nombre: this.nombre,
                    matricula: this.matricula,
                    especialidad: this.especialidad,
                    cel: this.cel
                });
            }catch(error){
                return Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: error.response.data.message ?? null,
                })
            }
            this.$router.push({ name: 'professionals.index' });
        },
        onCancel(){
            this.$router.push({ name: 'professionals.index' });
        }
    }
}
</script>