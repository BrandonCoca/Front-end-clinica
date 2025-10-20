import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import { loadFonts } from './plugins/webfontloader.js'

loadFonts()

import UserIndexPage from '@/users/components/pages/UserIndexPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //Ingreso
        //{ path: '/login', name: 'login', component: LoginPage },
        //Pantalla general
        // { path: '/', name: 'dashboard', component: DashboardPage },
        // //Usuarios
        { path: '/usuarios', name: 'users.index', component: UserIndexPage },
        // { path: '/usuarios/crear', name: 'users.create', component: UserCreatePage },
        // { path: '/usuarios/:id/editar', name: 'users.edit', component: UserEditPage },
        // //Profesionales
        // { path: '/profesionales', name: 'professionals.index', component: ProfessionalIndexPage },
        // { path: '/profesionales/crear', name: 'professionals.create', component: ProfessionalCreatePage },
        // { path: '/profesionales/:id/editar', name: 'professionals.edit', component: ProfessionalEditPage },
        // //Pacientes
        // { path: '/pacientes', name: 'patients.index', component: PatientIndexPage },
        // { path: '/pacientes/crear', name: 'patients.create', component: PatientCreatePage },
        // { path: '/pacientes/:id/editar', name: 'patients.edit', component: PatientEditPage },
        // { path: '/pacientes/:id/consulta', name: 'patients.consultation', component: PatientConsultationPage },
        // //Citas
        // { path: '/citas', name: 'quotes.index', component: QuoteIndexPage },
        // { path: '/citas/crear', name: 'quotes.create', component: QuoteCreatePage },
        // { path: '/citas/:id/editar', name: 'quotes.edit', component: QuoteEditPage },
        // //Consultas
        // { path: '/consultas/:pacienteID', name: 'consultations.index', component: ConsultationIndexPage },
        // { path: '/consultas/:pacienteID/crear', name: 'consultations.create', component: ConsultationCreatePage },
        // //Recetas
        // { path: '/consultas/:consultaID:/receta', name: 'recets.show', component: RecetShowPage },
        // { path: '/consultas/:consultaID:/receta/crear', name: 'recets.create', component: RecetCreatePage },
        // { path: '/consultas/:consultaID:/receta/editar', name: 'recets.edit', component: RecetEditPage },
        // { path: '/consultas/:consultaID:/receta/imprimir', name: 'recets.print', component: RecetPrintPage },
        // //Reportes
        // { path: '/trazabilidad', name: 'trazabilities.index', component: TrazabilitiesIndexPage },
    ]
});

createApp(App).use(router).use(vuetify).mount('#app')