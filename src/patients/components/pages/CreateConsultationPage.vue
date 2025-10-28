<template>
    <div class="users-container">
        <v-card class="mt-8 mx-auto" max-width="1000">
            <v-form @submit.prevent="onSubmit">
                <v-conteiner>
                    <v-row class="my-4">
                        <v-col cols="12" md="6">
                            <v-text-field v-model="nombre" label="Nombre del paciente" required>
                                
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="cita" label="Cita programada" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="doctor" label="Doctor que atendio" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="motivo" label="Motivo de la consulta" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="desc" label="Descripción" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="6" class="d-flex justify-center">
                            <v-btn type="submit" class="btn-nor">
                                Crear consulta
                            </v-btn>
                        </v-col>
                        <v-col cols="6" class="d-flex justify-center">
                            <v-btn type="submit" class="btn-nor">
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
export default {
    data() {
            return {
            form: {
                nombre: '',
                cita: '',
                doctor: '',
                motivo: '',
                desc: ''
                
            }
        }
    },
    methods: {
        onSubmit(){
            this.$router.push({ name: 'patients.consultation' });
        }
    }
};
</script>