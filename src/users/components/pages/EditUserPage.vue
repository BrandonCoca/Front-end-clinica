<template>
    <div class="users-container">
        <v-card class="mt-8 mx-auto" max-width="1000">
            <v-container>
                <v-from>
                    <v-row>
                        <v-col cols="12" class="mt-2">
                            <v-text-field label="Nombre del usuario"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-select v-model="selectRole" label="Rol" required :items="roleOptions" item-title="text" item-value="value">
                            </v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-btn type="submit" class="btn-nor" :to="{name: 'users.index'}">Guardar</v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn type="submit" class="btn-nor" :to="{name: 'users.index'}">Cancelar</v-btn>
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
            selectRole: '',
            roleOptions: [
                { text: 'Administrador', value: 'admin' },
                { text: 'Recepcionista', value: 'recepcionista' },
                { text: 'Doctor', value: 'doctor' },
                { text: 'Enfermera', value: 'enfermera' }
            ]
        }
    },
}
</script>