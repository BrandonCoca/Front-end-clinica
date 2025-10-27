<template>
    <v-card class="pt-4" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="d-flex mb-2" style="justify-content: center">
                    <div :style="{
                        width: '150px',
                        height: '150px',
                        background: 'gray',
                        borderRadius: '50%',
                        //backgroundImage: `url(${userAvatar})`,
                        backgroundImage: `url('/admin.jpg')`,
                        backgroundSize: 'contain'
                    }"
                    ></div>
                </div>
                <v-card-title class="text-center" style="padding: 0px">
                  <!--  {{user.name ?? []}} --> nombre
                </v-card-title>
                <v-card-subtitle class="text-center" style="margin-top: -8px">
                  <!--  {{ user.rol ?? [] }} --> rol
                </v-card-subtitle>
                <v-card-actions>
                    <v-row>
                        <v-col cols="6">
                            <v-btn v-on:click="onDeleteUser" class="btn-nor" style="width: 100%">
                                Eliminar
                            </v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn class="btn-nor" style="width: 100%" :to="{name: 'users.edit'}">
                                Editar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
</template>
<script>
import Swal from 'sweetalert2';
    export default {
        props: {
            //user: Object
        },
        computed: {
            //userAvatar() {
                //const role = this.user.rol.toLowerCase();
                //return `/${role}.jpg`;
            //}
        },
        mounted() {
            //console.log(this.user)
        },
        methods: {
            async onDeleteUser(){
                const result = await Swal.fire({
                    title: '¿Estás seguro?',
                    text: '¿Quieres inhabilitar al usuario?',
                    icon: 'warrning',
                    showCancelButton: true,
                });
                if(!result.isConfirmed){
                    return;
                }
                Swal.fire('Eliminado')
            }
        }
    };
</script>