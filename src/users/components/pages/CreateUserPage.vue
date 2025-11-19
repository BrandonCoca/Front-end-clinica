<template>
    <div class="users-container">
        <v-card class="mt-8 mx-auto" max-width="1000">
            <v-form @submit.prevent="onSubmit">
                <v-conteiner>
                    <v-row class="my-4">
                        <v-col cols="12" md="6">
                            <v-text-field v-model="name" label="Nombre del usuario" required>
                                
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="password" label="Contraseña" type="password" required>
                                
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="repeatedPassword" label="Verificar contraseña" type="password" required>
                                
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select v-model="selectRole" label="Rol" required :items="roleOptions" item-title="text" item-value="value">
                            </v-select>
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
export default {
    data() {
        return {
            name: '',
            password: '',
            repeatedPassword: '',
            selectRole: '',
            roleOptions: [
                { text: 'Administrador', value: 'admin' },
                { text: 'Recepcionista', value: 'recepcionista' },
                { text: 'Doctor', value: 'doctor' },
                { text: 'Enfermera', value: 'enfermera' }
            ]
        }
    },
    methods: {
        async onSubmit(){
            if(this.password != this.repeatedPassword){
                return alert('La contraseña debe der la misma')
            }
            if (!this.name || !this.password || !this.selectRole) {
                return alert('Todos los campos son requeridos');
            }
            await backend.post('usuarios', {
                name: this.name,
                password: this.password,
                rol: this.selectRole
            });

            this.$router.push({ name: 'users.index' });
                
        },
        onCancel(){
            this.$router.push({ name: 'users.index' });
        }
    }
}

</script>