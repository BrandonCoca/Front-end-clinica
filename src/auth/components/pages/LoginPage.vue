<template>
    <div class="fill-height">
        <v-row class="fill-height ma-0">
            <v-col cols="12" md="6" class="login-col" style="display: flex; align-items: center; justify-content: center;">
                <div style="width: 500px">
                    <h1 style="margin: 0; text-align: center;"><b>Iniciar sesión</b></h1>
                    <p style="text-align: center;">Bienvenidos a la Clínica ISI La Fuente</p>
                    <v-container style="display: flex; align-items: center; flex-direction: column">
                        <v-text-field class="mb-2 w-100" hide-details bg-color="hsl(221,86%,88%)" variant="plain" v-model="name" prepend-inner-icon="mdi-account" label="Usuario"></v-text-field>
                        <v-text-field class="mb-2 w-100" hide-details bg-color="hsl(221,86%,88%)" variant="plain" v-model="password" type="password" prepend-inner-icon="mdi-lock" label="Contraseña"></v-text-field>
                        <v-alert variant="tonal" class="mb-3" v-if="error" type="error" title="Credenciales incorrectas" text="Posiblemente coloco de forma incorrecta el usuario o la contraseña o el usuario esta inactivo. Por favor vuelva a intentarlo"></v-alert>
                        <v-btn class="btn-nor" v-on:click="onLogin()">Iniciar sesión</v-btn>
                    </v-container>
                </div>
            </v-col>
            <v-col cols="12" md="6" class="image-col" style="padding: 0px; position: relative; background-image: url('/fuente.jpg'); background-size: cover; background-position: center;">
                <div style="display: flex; align-items:center; justify-content: center; position:absolute; width: 100%; height: 100%; background-color: hsla(221,86%,88%, 25%);">
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script>

    import { AuthService } from '@/auth/services/AuthService';

    export default {

        data(){
            return {
                name: '',
                password: '',
                estado: null,
                error: null,
            }
        },

        methods: {
            async onLogin(){
                let response = null;
                try {
                    response = await AuthService.login(this.name, this.password);

                    if (response && response.token) {
                        if (response.user && response.user.estado === false) {
                            return this.error = 'Su cuenta está inactiva. Por favor, contacte al administrador.';
                        }
                        
                        this.$router.push({ name: 'dashboard' });
                    } else {
                        this.error = 'Credenciales incorrectas. Por favor, intente de nuevo.';
                    }
                } catch (error) {
                    if(error.response && error.response.status == 401){
                        return this.error = 'Credenciales incorrectas. Por favor, intente de nuevo.';
                    }
                    this.error = 'Error al conectar con el servidor. Intente más tarde.';
                }
            }
        }
    };
</script>
<style scoped>
.btn-nor {
    border: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: var(--color-principal);
    color: var(--color-texto);
    font-size: 15px;
}

.login-col {
    min-height: 400px;
}

.image-col {
    min-height: 400px;
}

@media (max-width: 959px) {
    .fill-height {
        height: auto !important;
        min-height: 100vh;
    }
    
    .login-col {
        min-height: 400px;
        padding: 20px;
    }
    
    .image-col {
        min-height: 350px !important; 
        height: 350px !important; 
    }
}

@media (max-width: 600px) {
    .image-col {
        min-height: 300px !important;
        height: 300px !important;
    }
}
</style>