<template>
    <v-card class="pt-4" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <v-card-title class="text-center" style="position: relative; padding: 0 16px;">
            <v-btn class="btn-nor"
                    style="position:absolute; left:16px; top:50%; transform:translateY(-50%);" 
                    @click="openRecetaModal"
                    :disabled="recetasGuardadas">
                Receta
            </v-btn>
            <v-btn class="btn-nor"
                    style="position:absolute; left:120px; top:50%; transform:translateY(-50%);" 
                    @click="openControlModal"
                    :disabled="controlGuardado">
                Control
            </v-btn>
            <span style="display:block; width:100%;">Nombre</span>
            <v-btn class="btn-nor"
                    style="position:absolute; right:16px; top:50%; transform:translateY(-50%);" 
                    @click="openDiagnosticoModal"
                    :disabled="diagnosticosGuardados">
                Diagnóstico
            </v-btn>
        </v-card-title>
        <v-card-subtitle class="mt-4" style="padding: 0px 16px">
            Cita
        </v-card-subtitle>
        <v-card-subtitle class="mt-2" style="padding: 0px 16px">
            Doctor
        </v-card-subtitle>
        <v-card-subtitle class=" mt-2" style="padding: 0px 16px">
            Motivo
        </v-card-subtitle>
        <v-card-subtitle class="mt-2" style="padding: 0px 16px">
            Descripción
        </v-card-subtitle>
        <!-- Visualizaciones -->
        <v-divider class="my-4"></v-divider>
        <v-card-text>
            <div v-if="recetasGuardadas && recetas.length > 0" class="mb-4">
                <v-subheader class="px-0 font-weight-bold">
                    <v-icon left color="primary">mdi-pill</v-icon>
                    Recetas Médicas
                </v-subheader>
                <v-card outlined class="mb-2" v-for="(receta, index) in recetas" :key="index">
                    <v-card-text>
                        <div class="d-flex align-center mb-2">
                            <v-chip small color="primary" outlined>Receta #{{ index + 1 }}</v-chip>
                        </div>
                        <v-row>
                            <v-col cols="12" md="5">
                                <div class="text-caption grey--text">Medicamento</div>
                                <div class="text-body-1">{{ receta.medicamento }}</div>
                            </v-col>
                            <v-col cols="12" md="4">
                                <div class="text-caption grey--text">Dosis</div>
                                <div class="text-body-1">{{ receta.dosis }}</div>
                            </v-col>
                            <v-col cols="12" md="3">
                                <div class="text-caption grey--text">Fecha</div>
                                <div class="text-body-1">{{ formatearFecha(receta.fecha) }}</div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </div>
            <div v-if="controlGuardado" class="mb-4">
                <v-subheader class="px-0 font-weight-bold">
                    <v-icon left color="success">mdi-clipboard-text</v-icon>
                    Control Médico
                </v-subheader>
                <v-card outlined>
                    <v-card-text>
                        <div class="text-body-1" style="white-space: pre-line;">{{ control.descripcion }}</div>
                    </v-card-text>
                </v-card>
            </div>
            <div v-if="diagnosticosGuardados && diagnosticos.length > 0" class="mb-4">
                <v-subheader class="px-0 font-weight-bold">
                    <v-icon left color="cyan">mdi-heart</v-icon>
                    Diagnósticos (CIE-10)
                </v-subheader>
                <v-card outlined>
                    <v-list dense>
                        <v-list-item v-for="(diagnostico, index) in diagnosticos" :key="index">
                            <v-list-item-icon>
                                <v-icon small color="error">mdi-hospital</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{ diagnostico.codigo }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </div>
            <v-alert v-if="!recetasGuardadas && !controlGuardado && !diagnosticosGuardados" 
                     type="info" color="gray" 
                     outlined 
                     text>
                No hay información médica registrada aún.
            </v-alert>
        </v-card-text>
        <!-- Modal de Recetas -->
        <v-dialog v-model="recetaDialog" max-width="800px" persistent>
            <v-card>
                <v-card-title class="text-h5">
                Recetas
                    <v-spacer></v-spacer>
                    <v-btn icon @click="recetaDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-btn class="btn-nor mb-4" @click="agregarReceta" :disabled="recetasGuardadas">
                        <v-icon left>mdi-plus</v-icon>
                        Agregar Receta
                    </v-btn>
                    <v-list v-if="recetas.length > 0">
                        <v-list-item v-for="(receta, index) in recetas" :key="index" class="mb-3">
                            <v-card width="100%" outlined>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" md="5">
                                            <v-text-field v-model="receta.medicamento" label="Medicamento" dense outlined :disabled="recetasGuardadas"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4">
                                            <v-text-field v-model="receta.dosis" label="Dosis" dense outlined :disabled="recetasGuardadas"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3">
                                            <v-menu v-model="receta.menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto" :disabled="recetasGuardadas">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="receta.fecha" label="Fecha" readonly v-bind="attrs" v-on="on" dense outlined :disabled="recetasGuardadas"></v-text-field>
                                                </template>
                                                <v-date-picker v-model="receta.fecha" @input="receta.menu = false"></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="12" class="d-flex align-center justify-center">
                                            <v-btn icon color="#C1ECE8" @click="eliminarReceta(index)" :disabled="recetasGuardadas">
                                                <v-icon>mdi-delete</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-list-item>
                    </v-list>
                    <v-alert v-else color="gray" type="info" outlined>
                        No hay recetas agregadas.
                    </v-alert>
                    <v-alert v-if="recetasGuardadas" type="success" outlined class="mt-3">
                        Recetas guardadas exitosamente
                    </v-alert>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="btn-nor" text @click="recetaDialog = false">Cerrar</v-btn>
                    <v-btn class="btn-nor" @click="guardarRecetas" :disabled="recetasGuardadas">Guardar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- Modal de Control -->
        <v-dialog v-model="controlDialog" max-width="600px" persistent>
            <v-card>
                <v-card-title class="text-h5">
                    Control
                    <v-spacer></v-spacer>
                    <v-btn icon @click="controlDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-card v-if="control" outlined class="mt-3">
                        <v-card-text>
                            <v-textarea v-model="control.descripcion" rows="5" outlined :disabled="controlGuardado"></v-textarea>
                        </v-card-text>
                    </v-card>
                    <v-alert v-if="controlGuardado" type="success" outlined class="mt-3">
                        Control guardado exitosamente
                    </v-alert>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="btn-nor" text @click="controlDialog = false">Cerrar</v-btn>
                    <v-btn class="btn-nor" @click="guardarControl" :disabled="controlGuardado">Guardar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- Modal de Diagnósticos -->
        <v-dialog v-model="diagnosticoDialog" max-width="600px" persistent>
            <v-card>
                <v-card-title class="text-h5">
                    Diagnósticos
                    <v-spacer></v-spacer>
                    <v-btn icon @click="diagnosticoDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-btn class="btn-nor mb-4" @click="agregarDiagnostico" :disabled="diagnosticosGuardados">
                        <v-icon left>mdi-plus</v-icon>
                        Agregar Diagnóstico
                    </v-btn>
                    <v-list v-if="diagnosticos.length > 0">
                        <v-list-item v-for="(diagnostico, index) in diagnosticos" :key="index" class="mb-3">
                            <v-card width="100%" outlined>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="10">
                                            <v-text-field v-model="diagnostico.codigo" label="Código CIE-10" dense outlined placeholder="Ej: A00.0" :disabled="diagnosticosGuardados"></v-text-field>
                                        </v-col>
                                        <v-col cols="2" class="d-flex align-center justify-center">
                                            <v-btn icon color="#C1ECE8" @click="eliminarDiagnostico(index)" :disabled="diagnosticosGuardados">
                                                <v-icon>mdi-delete</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-list-item>
                    </v-list>
                    <v-alert v-else color="gray" type="info" outlined>
                        No hay diagnósticos agregados.
                    </v-alert>
                    <v-alert v-if="diagnosticosGuardados" type="success" outlined class="mt-3">
                        Diagnósticos guardados exitosamente
                    </v-alert>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="btn-nor" text @click="diagnosticoDialog = false">Cerrar</v-btn>
                    <v-btn class="btn-nor" @click="guardarDiagnosticos" :disabled="diagnosticosGuardados">Guardar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>
<script>
export default {
    data() {
    return {
      recetaDialog: false,
      controlDialog: false,
      diagnosticoDialog: false,
      recetas: [],
      control: {
        descripcion: ''
      },
      diagnosticos: [],
      recetasGuardadas: false,
      controlGuardado: false,
      diagnosticosGuardados: false
    };
  },
  methods: {
    openRecetaModal() {
      this.recetaDialog = true;
    },
    openControlModal() {
      this.controlDialog = true;
    },
    openDiagnosticoModal() {
      this.diagnosticoDialog = true;
    },
    agregarReceta() {
      this.recetas.push({
        medicamento: '',
        dosis: '',
        fecha: new Date().toISOString().substr(0, 10),
        menu: false
      });
    },
    eliminarReceta(index) {
      this.recetas.splice(index, 1);
    },
    guardarRecetas() {
      // Validación básica
      if (this.recetas.length === 0) {
        alert('Debes agregar al menos una receta');
        return;
      }
      
      const camposVacios = this.recetas.some(r => !r.medicamento || !r.dosis);
      if (camposVacios) {
        alert('Por favor completa todos los campos de las recetas');
        return;
      }
      
      console.log('Recetas guardadas:', this.recetas);
      // Aquí harías la llamada a tu API para guardar en la BD
      // await axios.post('/api/recetas', {recetas: this.recetas, consultation_id: this.consultationId})
      
      this.recetasGuardadas = true;
    },
    guardarControl() {
      // Validación básica
      if (!this.control.descripcion) {
        alert('Por favor completa la descripción');
        return;
      }
      
      console.log('Control guardado:', this.control);
      // Aquí harías la llamada a tu API para guardar en la BD
      // await axios.post('/api/controls', {...this.control, consultation_id: this.consultationId})
      
      this.controlGuardado = true;
    },
    agregarDiagnostico() {
      this.diagnosticos.push({
        codigo: ''
      });
    },
    eliminarDiagnostico(index) {
      this.diagnosticos.splice(index, 1);
    },
    guardarDiagnosticos() {
      // Validación básica
      if (this.diagnosticos.length === 0) {
        alert('Debes agregar al menos un diagnóstico');
        return;
      }
      
      const codigosVacios = this.diagnosticos.some(d => !d.codigo);
      if (codigosVacios) {
        alert('Por favor completa todos los códigos CIE-10');
        return;
      }
      
      console.log('Diagnósticos guardados:', this.diagnosticos);
      // Aquí harías la llamada a tu API para guardar en la BD
      // await axios.post('/api/diagnostics', {diagnosticos: this.diagnosticos, consultation_id: this.consultationId})
      
      this.diagnosticosGuardados = true;
    },
    formatearFecha(fecha) {
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(fecha).toLocaleDateString('es-ES', opciones);
    }
  }
};
</script>