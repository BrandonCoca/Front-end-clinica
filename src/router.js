import { createRouter, createWebHistory } from 'vue-router'
import { verifyTokenMiddleware } from './auth/middlewares/verifyTokenMiddleware.js'

import LoginPage from '@/auth/components/pages/LoginPage.vue'
import UnauthorizedPage from '@/auth/components/pages/UnauthorizedPage.vue'
import DashboardPage from './Navegacion/DashboardPage.vue'
import IndexUserPage from '@/users/components/pages/IndexUserPage.vue'
import CreateUserPage from '@/users/components/pages/CreateUserPage.vue'
import EditUserPage from './users/components/pages/EditUserPage.vue'
import IndexProfessionalPage from '@/professionals/components/pages/IndexProfessionalPage.vue'
import CreateProfessionalPage from '@/professionals/components/pages/CreateProfessionalPage.vue'
import EditProfessionalPage from '@/professionals/components/pages/EditProfessionalPage.vue'
import IndexPatientPage from '@/patients/components/pages/IndexPatientPage.vue'
import CreatePatientPage from '@/patients/components/pages/CreatePatientPage.vue'
import EditPatientPage from '@/patients/components/pages/EditPatientPage.vue'
import ConsultationPatientPage from '@/patients/components/pages/ConsultationPatientPage.vue'
import CreateConsultationPage from '@/patients/components/pages/CreateConsultationPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        //Ingreso
        { path: '/login', name: 'login', component: LoginPage, meta: { showHeader: false, requiresAuth: false } },
        //Pantalla general
        { path: '/inicio', name: 'dashboard', component: DashboardPage, meta: { showHeader: true, requiresAuth: true } },
        //Usuarios
        { path: '/usuarios', name: 'users.index', component: IndexUserPage, meta: { showHeader: true, requiresAuth: true } },
        { path: '/usuarios/crear', name: 'users.create', component: CreateUserPage, meta: { showHeader: true, requiresAuth: true } },
        { path: '/usuarios/:id/editar', name: 'users.edit', component: EditUserPage, meta: { showHeader: true, requiresAuth: true } },
        //Profesionales
        { path: '/profesionales', name: 'professionals.index', component: IndexProfessionalPage, meta: { showHeader: true, requiresAuth: true } },
        { path: '/profesionales/crear', name: 'professionals.create', component: CreateProfessionalPage, meta: { showHeader: true, requiresAuth: true } },
        { path: '/profesionales/:id/editar', name: 'professionals.edit', component: EditProfessionalPage, meta: { showHeader: true, requiresAuth: true } },
        //Pacientes
        { path: '/pacientes', name: 'patients.index', component: IndexPatientPage, meta: { showHeader: true, requiresAuth: true } },
        { path: '/pacientes/crear', name: 'patients.create', component: CreatePatientPage, meta: { showHeader: true, requiresAuth: true } },
        { path: '/pacientes/:id/editar', name: 'patients.edit', component: EditPatientPage, meta: { showHeader: true, requiresAuth: true } },
        { path: '/pacienteID/consulta', name: 'patients.consultation', component: ConsultationPatientPage, meta: { showHeader: true, requiresAuth: true } },
        { path: '/pacienteID/consulta/crear', name: 'consultations.create', component: CreateConsultationPage, meta: { showHeader: true, requiresAuth: true } },
        //Citas
        // { path: '/citas', name: 'quotes.index', component: QuoteIndexPage },
        // { path: '/citas/crear', name: 'quotes.create', component: QuoteCreatePage },
        // { path: '/citas/:id/editar', name: 'quotes.edit', component: QuoteEditPage },
        //Reportes
        // { path: '/trazabilidad', name: 'trazabilities.index', component: TrazabilitiesIndexPage },
        //Errores 
        { path: '/403', name: '403', component: UnauthorizedPage }
    ]
});

router.beforeEach(verifyTokenMiddleware)

export { router };