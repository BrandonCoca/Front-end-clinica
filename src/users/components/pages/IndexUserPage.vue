<template>
    <div class="users-container">
        <v-row class="mt-4">
            <v-col cols="12">
                <h3>
                    Usuarios
                    <v-btn class="btn-nor" style="float: right" v-on:click="$router.push({name: 'users.create'})">Añadir</v-btn>   
                </h3>
            </v-col>
            <v-col v-for="user in users" :key="user.id" cols="12" md="6" lg="4">
                <UserDetails :user="user"/>
            </v-col>
        </v-row>
        <PaginatorVue :length="4" @onChange="onChangePage"/>
    </div>
</template>
<script>
import UserDetails from "@/users/components/organisms/UserDetails.vue";
import { UserService } from "@/users/services/UserService.js";
import PaginatorVue from "@/shared/components/PaginatorVue.vue";

export default {

    data() {
        return {
            users: []
        }
    },

    async mounted() {
        this.users = await UserService.all();
    },

    methods: {
        onChangePage(page){
            this.$router.push({'name': 'users.index', query: {page}})
        }
    },

    components: {
        UserDetails,
        PaginatorVue
    }
};

</script>