<template>
    <v-card class="pt-4" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <v-card-title class="text-center" style="position: relative; padding: 0 16px;">
            <v-btn class="btn-nor"
                    style="position:absolute; left:16px; top:50%; transform:translateY(-50%);" :to="{name: ''}">
                Receta
            </v-btn>
            <v-btn class="btn-nor"
                    style="position:absolute; left:120px; top:50%; transform:translateY(-50%);" :to="{name: ''}">
                Control
            </v-btn>
            <span style="display:block; width:100%;">Nombre</span>
            <v-btn class="btn-nor"
                    style="position:absolute; right:16px; top:50%; transform:translateY(-50%);" :to="{name: ''}">
                Diagnóstico
            </v-btn>
        </v-card-title>
        <v-card-subtitle class="mt-4" style="padding: 0px 16px">
            <!-- {{ user.rol ?? [] }} --> Cita
        </v-card-subtitle>
        <v-card-subtitle class="mt-2" style="padding: 0px 16px">
            <!-- {{ user.rol ?? [] }} --> Doctor
        </v-card-subtitle>
        <v-card-subtitle class=" mt-2" style="padding: 0px 16px">
            <!-- {{ user.rol ?? [] }} --> Motivo
        </v-card-subtitle>
        <v-card-subtitle class="mt-2" style="padding: 0px 16px">
            <!-- {{ user.rol ?? [] }} --> Descripción
        </v-card-subtitle>
    </v-card>
</template>
<script>
export default {
    props: {
    },
    computed: {
    },
    mounted() {
    },
    methods: {
        
    },
};
</script>