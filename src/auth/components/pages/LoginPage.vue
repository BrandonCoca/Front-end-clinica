<template>

    <label>Usuario</label>
    <v-text-field v-model="name"></v-text-field>

    <label>Contraseña</label>
    <v-text-field v-model="password" type="password"></v-text-field>

    <v-btn class="btn-n" v-on:click="onLogin()">Iniciar sesión</v-btn>

</template>
<script>

    //import { AuthService } from '@/auth/services/AuthService';

    export default {

        data(){
            return {
                name: '',
                password: '',
            }
        },

        methods: {
            onLogin(){
                if(this.name==="Brandon" && this.password==="12345"){
                        this.$router.push({ name: 'dashboard' })
                    }
            }
        }
    };
</script>
<style>
    .btn-n {
        border: none;
        cursor: pointer;
        border-radius: 10px;
        background-color: var(--color-principal);
        color: var(--color-texto);
        font-size: 15px;
    }
</style>