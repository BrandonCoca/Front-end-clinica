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
                            <v-text-field v-model="fecha_nacimiento" label="Fecha de nacimiento" type="date" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-radio-group v-model="form.genero" label="Género">
                                <v-radio label="Masculino" :value="true"></v-radio>
                                <v-radio label="Femenino" :value="false"></v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="celular" label="Celular" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="6" class="d-flex justify-center">
                            <v-btn type="submit" class="btn-nor">
                                Crear paciente
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
                ci: '',
                fecha_nacimiento: '',
                genero: null,
                celular: '',
            }
        }
    },
    methods: {
        onSubmit(){
            this.$router.push({ name: 'patients.index' });
        }
    }
};
</script>