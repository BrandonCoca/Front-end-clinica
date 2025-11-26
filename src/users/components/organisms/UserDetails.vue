<template>
    <v-card v-if="display && user" class="pt-4" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="d-flex mb-2" style="justify-content: center">
                    <div :style="{
                        width: '150px',
                        height: '150px',
                        background: 'gray',
                        borderRadius: '50%',
                        backgroundImage: `url(${userAvatar})`,
                        backgroundSize: 'contain'
                    }"
                    ></div>
                </div>
                <v-card-title class="text-center" style="padding: 0px">
                   {{user.name ?? []}}
                </v-card-title>
                <v-card-subtitle class="text-center" style="margin-top: -4px">
                   {{ user.rol ?? [] }} 
                </v-card-subtitle>
                <v-card-subtitle class="text-center" :style="{ 'margin-top': '-4px', color: user.estado ? 'green' : 'red' }">
                   {{ user.estado ? 'Activo' : 'Inactivo' }} 
                </v-card-subtitle>
                <v-card-subtitle class="text-center" style="margin-top: -4px">
                   {{ formattedUltimaConexion ?? 'Nunca conectado' }} 
                </v-card-subtitle>
                <v-card-actions>
                    <v-row>
                        <v-col cols="6">
                            <v-btn v-on:click="onDeleteUser" class="btn-nor" style="width: 100%">
                                Eliminar
                            </v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn class="btn-nor" style="width: 100%" v-on:click="onEditUser">
                                Editar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
</template>
<script>
import Swal from 'sweetalert2';
import backend from '@/backend';
    export default {
        props: {
            user: Object
        },
        computed: {
            userAvatar() {
                const role = this.user.rol.toLowerCase();
                return `/${role}.png`;
            },
            formattedUltimaConexion() {
                if (!this.user || !this.user.ultima_conexion) return "";

                const fecha = new Date(this.user.ultima_conexion);

                const f = fecha.toISOString().slice(0, 10);  
                const h = fecha.toTimeString().slice(0, 5); 

                return `${f} | ${h}`;
            }
        },
        data() {
            return {
                display: true
            };
        },
        methods: {
            async onDeleteUser(){
                const result = await Swal.fire({
                    title: '¿Estás seguro?',
                    text: `¿Quieres inhabilitar al usuario ${this.user.name}?`,
                    icon: 'warning',
                    showCancelButton: true,
                });
                if(!result.isConfirmed) {
                    return;
                }
                
                await backend.patch(`usuarios/${this.user.id}`, {
                    name: this.user.name,
                    rol: this.user.rol,
                    estado: false
                });
                
                Swal.fire(`Inhabilitado ${this.user.name}`).then(() => {
                    window.location.reload();
                });
            },
            onEditUser(){
                this.$router.push({name: 'users.edit', params: {id: this.user.id}});
            }
        }
    };
</script>