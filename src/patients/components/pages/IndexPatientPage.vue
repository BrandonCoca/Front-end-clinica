<template>
    <div class="users-container">
        <v-row class="mt-4">
            <v-col cols="12">
                <h3>
                    Pacientes
                    <v-btn class="btn-nor" style="float: right" v-on:click="$router.push({name: 'patients.create'})">Añadir</v-btn>
                </h3>
            </v-col>
            <v-col cols="12" md="6" lg="4" v-for="patient in patients" :key="patient.id">
                <PatientDetails :patient="patient"/>
            </v-col>
        </v-row>
        <PaginatorVue v-if="pages != null" :length="pages" @onChange="onChangePage"/>
    </div>
</template>
<script>
import PaginatorVue from '@/shared/components/PaginatorVue.vue';
import PatientDetails from '../organisms/PatientDetails.vue';
import { PatientService } from '../../services/PatientService.js';
export default {
    data() {
        return {
            patients: [],
            pages: null,
        };
    },
    async mounted() {
        const page = this.$route.query.page ?? 1;
        const response = await PatientService.all(page);
        this.patients = response.data;
        this.pages = response.meta.last;
    },
    methods: {
        async onChangePage(page){
            this.$router.push({'name': 'patients.index', query: {page}})
            const response = await PatientService.all(page);
            this.patients = response.data;
            this.pages = response.meta.last;
        }
    },
    components:{
        PatientDetails,
        PaginatorVue,
    }
};
</script>