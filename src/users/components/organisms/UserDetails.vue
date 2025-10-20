<template>
    <v-card class="pt-4" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="d-flex mb-2" style="justify-content: center">
                    <div :style="{
                        width: '150px',
                        height: '150px',
                        background: 'gray',
                        borderRadius: '50%',
                        backgroundImage: `url(${userAvatar})`,
                        backgroundSize: 'contain'
                    }"
                    ></div>
                </div>
                <v-card-title class="text-center" style="padding: 0px">
                    {{user.name ?? []}}
                </v-card-title>
                <v-card-subtitle class="text-center" style="margin-top: -8px">
                    {{ user.rol ?? [] }}
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
        computed: {
            userAvatar() {
                const role = this.user.rol.toLowerCase();
                return `/${role}.jpg`;
            }
        },
        mounted() {
            console.log(this.user)
        }
    };
</script>