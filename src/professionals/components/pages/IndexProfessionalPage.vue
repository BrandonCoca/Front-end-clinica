<template>
    <div class="users-container">
        <v-row class="mt-4">
            <v-col cols="12">
                <h3>
                    Personal Profesional
                    <v-btn class="btn-nor" style="float: right" v-on:click="$router.push({name: 'professionals.create'})">Añadir</v-btn>   
                </h3>
            </v-col>
            <v-col cols="12" md="6" lg="4">
                <ProfessionalDetails/>
            </v-col>
            <v-col cols="12" md="6" lg="4">
                <ProfessionalDetails/>
            </v-col>
            <v-col cols="12" md="6" lg="4">
                <ProfessionalDetails/>
            </v-col>
            <v-col cols="12" md="6" lg="4">
                <v-card class="pt-4" style="background-image: url('/card_doc.jpg'); background-size: cover; background-position: center;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                    <v-card-title class="text-right" style="padding: 0px 16px">
                        <!-- {{user.name ?? []}} --> Nombre
                    </v-card-title>
                    <v-card-subtitle class="text-right mt-4" style="padding: 0px 16px">
                        <!-- {{ user.rol ?? [] }} --> Matricula
                    </v-card-subtitle>
                    <v-card-subtitle class="text-right mt-2" style="padding: 0px 16px">
                        <!-- {{ user.rol ?? [] }} --> Especialidad
                    </v-card-subtitle>
                    <v-card-subtitle class="text-right mt-2" style="padding: 0px 16px">
                        <!-- {{ user.rol ?? [] }} --> Celular
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="6">
                                <v-btn v-on:click="onDeleteProfessional" class="btn-nor" style="width: 100%;">
                                    Eliminar
                                </v-btn>
                            </v-col>
                            <v-col cols="6">
                                <v-btn class="btn-nor" style="width: 100%" :to="{name: 'professionals.edit'}">
                                    Editar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <PaginatorVue :length="4" @onChange="onChangePage"/>
    </div>
</template>
<script>
import PaginatorVue from '@/shared/components/PaginatorVue.vue';
import ProfessionalDetails from '../organisms/ProfessionalDetails.vue';

export default {
    components: {
        ProfessionalDetails,
        PaginatorVue
    }
};
</script>