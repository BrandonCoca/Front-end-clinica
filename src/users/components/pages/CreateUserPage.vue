<template>
    <div class="users-container">
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
                    <v-col cols="6">
                        <v-btn type="submit" class="btn-n">
                            Crear usuario
                        </v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn type="submit" class="btn-n">
                            Cancelar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-conteiner>
        </v-form>
    </div>
</template>
<script>

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
        onSubmit(){
            console.log({
                name: this.name,
                password: this.password,
                repeated: this.repeatedPassword,
                selectRole: this.selectRole
            })
            this.$router.push({ name: 'users.index' });
        }
    }
}

</script>
<style >
.users-container {
    padding-top: 60px;
}
.btn-n {
    border: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: var(--color-principal);
    color: var(--color-texto);
    font-size: 15px;
}
</style>