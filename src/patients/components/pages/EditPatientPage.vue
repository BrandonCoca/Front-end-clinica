<template>
    <div class="users-container">
        <v-card class="mt-8 mx-auto" max-width="1000">
            <v-container>
                <v-from>
                    <v-row>
                        <v-col cols="12" class="mt-2">
                            <v-text-field label="Nombre del paciente"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="C.I."></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Fecha de nacimiento" type="date"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-radio-group v-model="form.genero" label="Género">
                                <v-radio label="Masculino" :value="true"></v-radio>
                                <v-radio label="Femenino" :value="false"></v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Celular"></v-text-field>
                        </v-col>
                        <v-col cols="6" style="width: 100%;">
                            <v-btn type="submit" class="btn-nor" :to="{name: 'patients.index'}">Guardar</v-btn>
                        </v-col>
                        <v-col cols="6" style="width: 100%;">
                            <v-btn type="submit" class="btn-nor" :to="{name: 'patients.index'}">Cancelar</v-btn>
                        </v-col>
                    </v-row>
                </v-from>
            </v-container>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
    return {
      form: {
        nombre: '',
        ci: '',
        fecha_nacimiento: '',
        genero: null,
        celular: '',
      }
    }
  }
};
</script>