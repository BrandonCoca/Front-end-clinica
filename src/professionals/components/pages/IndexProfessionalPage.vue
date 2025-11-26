<template>
    <div class="users-container">
        <v-row class="mt-4">
            <v-col cols="12">
                <h3>
                    Personal Profesional
                    <v-btn class="btn-nor" style="float: right" v-on:click="$router.push({name: 'professionals.create'})">Añadir</v-btn>   
                </h3>
            </v-col>
            <v-col v-for="professional in professionals" :key="professional.id" cols="12" md="6" lg="4">
                <ProfessionalDetails :professional="professional"/>
            </v-col>
        </v-row>
        <PaginatorVue v-if="pages != null" :length="pages" @onChange="onChangePage"/>
    </div>
</template>
<script>
import PaginatorVue from '@/shared/components/PaginatorVue.vue';
import ProfessionalDetails from '../organisms/ProfessionalDetails.vue';
import { ProfessionalService } from '../../services/ProfessionalService.js';

export default {
    data() {
        return {
            professionals: [],
            pages: null
        };
    },
    async mounted() {
        const page = this.$route.query.page ?? 1;
        const response = await ProfessionalService.all(page);
        this.professionals = response.data;
        this.pages = response.meta.last;
    },
    methods: {
        async onChangePage(page){
            this.$router.push({'name': 'professionals.index', query: {page}})
            const response = await ProfessionalService.all(page);
            this.professionals = response.data;
            this.pages = response.meta.last;
        }
    },
    components: {
        ProfessionalDetails,
        PaginatorVue
    }
};
</script>