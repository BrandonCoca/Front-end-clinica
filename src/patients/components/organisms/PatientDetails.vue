<template>
    <v-card class="pt-4"
        :style="`background-image: url('${patientAvatar}'); background-size: cover; background-position: center;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`">
        <v-card-title class="text-right" style="padding: 0px 16px">
            {{patient.nombre}}
        </v-card-title>
        <v-card-subtitle class="text-right mt-4" style="padding: 0px 16px">
            {{ patient.ci }}
        </v-card-subtitle>
        <v-card-subtitle class="text-right mt-2" style="padding: 0px 16px">
            {{ formattedUltimaConexion }}
        </v-card-subtitle>
        <v-card-subtitle class="text-right mt-2" style="padding: 0px 16px">
            {{ patient.genero ? 'Hombre' : 'Mujer' }}
        </v-card-subtitle>
        <v-card-subtitle class="text-right mt-2" style="padding: 0px 16px">
            {{ patient.cel }}
        </v-card-subtitle>
        <v-card-actions>
            <v-row>
                <v-col cols="6">
                    <v-btn class="btn-nor" style="width: 100%" v-on:click="onEditPatient">
                        Editar
                    </v-btn>
                </v-col>
                
                <v-col cols="6">
                    <v-btn class="btn-nor" style="width: 100%" v-on:click="onConsultation">
                        Historial
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>
<script>
    export default {
        props: {
            patient: Object
        },
        computed: {
            patientAvatar() {
                 return this.patient.genero ? '/hombre.png' : '/mujer.png';
            },
            formattedUltimaConexion() {
                if (!this.patient || !this.patient.fecha_nac) return "";

                const fecha = new Date(this.patient.fecha_nac);

                const f = fecha.toISOString().slice(0, 10);  

                return `${f}`;
            }
        },
        methods: {
            onEditPatient(){
                this.$router.push({name: 'patients.edit', params: {id: this.patient.id}});
            },
            onConsultation(){
                this.$router.push({name: 'patients.consultation', params: {id: this.patient.id}});
            }
        }
    };
</script>