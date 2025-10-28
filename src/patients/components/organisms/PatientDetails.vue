<template>
    <v-card class="pt-4"
        style="background-image: url('/hombre.jpg'); background-size: cover; background-position: center;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <v-card-title class="text-right" style="padding: 0px 16px">
            <!-- {{user.name ?? []}} --> Nombre
        </v-card-title>
        <v-card-subtitle class="text-right mt-4" style="padding: 0px 16px">
            <!-- {{ user.rol ?? [] }} --> C.I.
        </v-card-subtitle>
        <v-card-subtitle class="text-right mt-2" style="padding: 0px 16px">
            <!-- {{ user.rol ?? [] }} --> Fecha de nacimiento
        </v-card-subtitle>
        <v-card-subtitle class="text-right mt-2" style="padding: 0px 16px">
            <!-- {{ user.rol ?? [] }} --> Genero
        </v-card-subtitle>
        <v-card-subtitle class="text-right mt-2" style="padding: 0px 16px">
            <!-- {{ user.rol ?? [] }} --> Celular
        </v-card-subtitle>
        <v-card-actions>
            <v-row>
                <v-col cols="4">
                    <v-btn v-on:click="onDeleteProfessional" class="btn-nor" style="width: 100%;">
                        Eliminar
                    </v-btn>
                </v-col>
                <v-col cols="4">
                    <v-btn class="btn-nor" style="width: 100%" :to="{name: 'patients.edit'}">
                        Editar
                    </v-btn>
                </v-col>
                
                <v-col cols="4">
                    <v-btn class="btn-nor" style="width: 100%" :to="{name: 'patients.consultation'}">
                        Historial
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
        },
        mounted() {
            //console.log(this.user)
        },
        methods: {
            async onDeleteProfessional() {
                const result = await Swal.fire({
                    title: '¿Estás seguro?',
                    text: '¿Quieres inhabilitar al paciente?',
                    icon: 'warrning',
                    showCancelButton: true,
                });
                if (!result.isConfirmed) {
                    return;
                }
                Swal.fire('Eliminado')
            }
        }
    };
</script>