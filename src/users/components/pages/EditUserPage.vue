<template>
    <div class="users-container">
        <v-card class="mt-8 mx-auto" max-width="1000">
            <v-container>
                <v-form @submit.prevent="onSubmit">
                    <v-row>
                        <v-col cols="12" class="mt-2">
                            <v-text-field label="Nombre del usuario" v-model="user.name"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-select v-model="selectRole" label="Rol" :items="roleOptions" item-title="text" item-value="value">
                            </v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-select v-model="selectStatus" label="Estado" :items="statusOptions" item-title="text" item-value="value">
                            </v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-btn type="submit" class="btn-nor">Guardar</v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn type="button" class="btn-nor" :to="{name: 'users.index'}">Cancelar</v-btn>
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
            user: {
                name: '',
                rol:'',
                estado: true
            },
            selectRole: '',
            roleOptions: [
                { text: 'Administrador', value: 'admin' },
                { text: 'Recepcionista', value: 'recepcionista' },
                { text: 'Doctor', value: 'doctor' },
                { text: 'Enfermera', value: 'enfermera' }
            ],
            selectStatus: true,
            statusOptions: [
                { text: 'Activo', value: true },
                { text: 'Inactivo', value: false }
            ]
        }
    },
    async mounted() {
        const userId = this.$route.params.id;
        this.user = (await backend.get(`usuarios/${userId}`)).data;
        this.selectRole = this.user.rol;
        this.selectStatus = !!this.user.estado;
    },
    methods: {
        async onSubmit() {
            if(!this.user.name || !this.selectRole || !this.selectStatus){
                return Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: 'Todos los campos son requeridos',
                })
            }
            try{
                await backend.patch(`usuarios/${this.$route.params.id}`, {
                    name: this.user.name,
                    rol: this.selectRole,
                    estado: this.selectStatus
                });
            }catch(error){
                return Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: error.response.data.message ?? null,
                })
            }
            this.$router.push({ name: 'users.index' });
        }
    }
}
</script>