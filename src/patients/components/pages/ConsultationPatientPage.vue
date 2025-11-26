<template>
    <div class="users-container">
        <v-row class="mt-4">
            <v-col cols="12">
                <h3>
                    Historial de consultas
                    <v-btn class="btn-nor" style="float: right" v-on:click="$router.push({name: 'consultations.create'})">Añadir</v-btn>
                </h3>
            </v-col>
            <v-col cols="12">
                <ConsultationDetails/>
            </v-col>
            <v-col cols="12">
                <ConsultationDetails/>
            </v-col>
            <v-col cols="12">
                <ConsultationDetails/>
            </v-col>
            <v-col cols="12">
                <ConsultationDetails/>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import ConsultationDetails from '../organisms/ConsultationDetails.vue';

export default {
    components:{
        ConsultationDetails
    }
};
</script>