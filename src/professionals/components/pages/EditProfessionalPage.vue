<template>
    <div class="users-container">
        <v-card class="mt-8 mx-auto" max-width="1000">
            <v-container>
                <v-from>
                    <v-row>
                        <v-col cols="12" class="mt-2">
                            <v-text-field label="Nombre del personal de salud"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Matricula"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Especialidad"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Celular"></v-text-field>
                        </v-col>
                        <v-col cols="6" style="width: 100%;">
                            <v-btn type="submit" class="btn-nor" :to="{name: 'professionals.index'}">Guardar</v-btn>
                        </v-col>
                        <v-col cols="6" style="width: 100%;">
                            <v-btn type="submit" class="btn-nor" :to="{name: 'professionals.index'}">Cancelar</v-btn>
                        </v-col>
                    </v-row>
                </v-from>
            </v-container>
        </v-card>
    </div>
</template>
<script>
export default {
    
};
</script>