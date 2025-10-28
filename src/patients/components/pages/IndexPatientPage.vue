<template>
    <div class="users-container">
        <v-row class="mt-4">
            <v-col cols="12">
                <h3>
                    Pacientes
                    <v-btn class="btn-nor" style="float: right" v-on:click="$router.push({name: 'patients.create'})">Añadir</v-btn>
                </h3>
            </v-col>
            <v-col cols="12" md="6" lg="4">
                <PatientDetails/>
            </v-col>
            <v-col cols="12" md="6" lg="4">
                <PatientDetails/>
            </v-col>
            <v-col cols="12" md="6" lg="4">
                <PatientDetails/>
            </v-col>
            <v-col cols="12" md="6" lg="4">
                <PatientDetails/>
            </v-col>
        </v-row>
        <PaginatorVue :length="4" @onChange="onChangePage"/>
    </div>
</template>
<script>
import PaginatorVue from '@/shared/components/PaginatorVue.vue';
import PatientDetails from '../organisms/PatientDetails.vue';
export default {
    components:{
        PatientDetails,
        PaginatorVue,
    }
};
</script>