<template>
    <v-card class="pt-4" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="d-flex mb-2" style="justify-content: center">
                    <div style="width: 150px; height:150px; background: gray; border-radius: 50%; background-image: url('./user.jpg'); background-size: contain">
                    </div>
                </div>
                <v-card-title class="text-center" style="padding: 0px">
                    {{user.name ?? []}}
                </v-card-title>
                <v-card-subtitle class="text-center" style="margin-top: -8px">
                    Email
                </v-card-subtitle>
                <v-card-actions>
                    <v-row>
                        <v-col cols="6">
                            <v-btn style="width: 100%">
                                Eliminar
                            </v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn style="width: 100%">
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
            user: Object
        },
        mounted() {
            console.log(this.user)
        }
    };
</script>