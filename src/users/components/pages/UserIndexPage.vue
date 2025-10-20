<template>
    <v-row>
        <v-col v-for="user in users" :key="user.id" cols="12" md="6" lg="4">
            <UserDetails :user="user"/>
        </v-col>
    </v-row>
</template>
<script>
import UserDetails from "@/users/components/organisms/UserDetails.vue";
import { UserService } from "@/users/services/UserService.js";

export default {

    data() {
        return {
            users: []
        }
    },

    async mounted() {
        this.users = await UserService.all();
    },

    components: {
        UserDetails
    }
};

</script>