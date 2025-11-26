<template>
    <v-card class="pt-4" style="background-image: url('/profesional.png'); background-size: cover; background-position: center;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <v-card-title class="text-right" style="padding: 0px 16px">
            {{professional.nombre ?? []}} 
        </v-card-title>
        <v-card-subtitle class="text-right mt-4" style="padding: 0px 16px">
            {{ professional.matricula ?? [] }} 
        </v-card-subtitle>
        <v-card-subtitle class="text-right mt-2" style="padding: 0px 16px">
            {{ professional.especialidad ?? [] }} 
        </v-card-subtitle>
        <v-card-subtitle class="text-right mt-2" style="padding: 0px 16px">
            {{ professional.cel ?? [] }} 
        </v-card-subtitle>
        <v-card-actions>
            <v-row>
                <v-col cols="12">
                    <v-btn class="btn-nor" style="width: 100%" v-on:click="onEditProfessional">
                        Editar
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>
<script>
    export default {
        props: {
            professional: Object
        },
        methods: {
            async onEditProfessional(){
                this.$router.push({name: 'professionals.edit', params: {id: this.professional.id}});
            }
        }
    };
</script>