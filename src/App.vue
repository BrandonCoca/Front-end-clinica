<template>
  <div style="display: flex; flex-direction: column; height: 100vh;">
    <header v-if="$route.meta.showHeader" ref="header">
      <div class="contenedor" ref="contenedor">
        <div class="logo">
          <img src="/logo.jpg" class="im"/>
          <span>LA FUENTE</span>
        </div>

        <div class="menu-opciones" ref="menuOpciones" :class="{ 'mostrar': menuMostrar, 'min': menuMin }">
          <ul>
            <li>
              <router-link id="home" to="/inicio">Inicio</router-link>
            </li>
            <li>
              <router-link to="/usuarios">Usuarios</router-link>
            </li>
            <li>
              <router-link to="/profesionales">Profesionales</router-link>
            </li>
            <li>
              <router-link to="/pacientes">Pacientes</router-link>
            </li>
            <li class="btn-menu-item">
              <v-btn class="btn-system" @click="otherMenu">Usuario</v-btn>
            </li>
          </ul>
        </div>
        <div v-on:click="otherMenu" :style="{cursor: 'pointer', borderRadius: '50%', width: '50px', height: '50px', backgroundImage: `url(${userAvatar})`, backgroundSize: 'contain'}" ref="btnSignUp">
          <ul v-if="isActive" class="custom-dropdown-menu">
            <li class="liother">
              Perfil - {{ user.nombre || 'Cargando...' }}
            </li>
            <li v-on:click="onLogout" class="liother">
              Cerrar sesión
            </li>
          </ul>
        </div>
        <div class="controles-usuario" ref="controlesUsuario">
          <ion-icon id="btn-menu" name="menu" @click="toggleMenu"></ion-icon>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import { TokenService } from './auth/services/TokenService';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      menuMostrar: false,
      menuMin: false,
      isActive: false,
      user: {
        nombre: '',
        role: ''
      }
    }
  },
  computed: {
    userAvatar() {
      const role = this.user.role ? this.user.role.toLowerCase() : 'default';
      return `/${role}.png`;
    }
  },
  async mounted() {
    await this.loadUserProfile();
    
    if (this.$route.meta.showHeader) {
      this.initResponsive()
      window.addEventListener("resize", this.handleResize)
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize)
  },
  watch: {
    '$route'(to, from) {
      this.menuMostrar = false
      if (to.meta.requiresAuth && to.name !== from.name) {
        this.loadUserProfile();
      }
      
      if (to.meta.showHeader && !from.meta.showHeader) {
        this.$nextTick(() => {
          this.initResponsive()
          window.addEventListener("resize", this.handleResize)
        })
      } else if (!to.meta.showHeader) {
        window.removeEventListener("resize", this.handleResize)
      }
    }
  },
  methods: {
    async loadUserProfile() {
      try {
        const token = TokenService.get();
        if (!token) {
          this.$router.push({ name: 'login' });
          return;
        }

        const response = await axios.get('http://localhost:3000/api/v1/perfil', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        this.user = response.data;
      } catch (error) {
        console.error('Error al cargar perfil:', error);
        if (error.response?.status === 403 || error.response?.status === 401) {
          TokenService.clear();
          this.$router.push({ name: 'login' });
        }
      }
    },
    toggleMenu() {
      this.menuMostrar = !this.menuMostrar
      this.responsiveY()
    },
    otherMenu(){
      this.isActive = !this.isActive
    },
    onLogout(){
      TokenService.clear();
      this.$router.push({name: 'login'})
    },
    responsiveY() {
      if (window.innerHeight <= 362) {
        this.menuMin = this.menuMostrar
      } else {
        this.menuMin = false
      }
    },
    
    responsive() {
      const menuOpciones = this.$refs.menuOpciones
      const btnSignUp = this.$refs.btnSignUp
      const header = this.$refs.header
      const controlesUsuario = this.$refs.controlesUsuario
      const contenedor = this.$refs.contenedor

      if (!menuOpciones || !btnSignUp || !header || !controlesUsuario || !contenedor) {
        return
      }

      const btnElement = btnSignUp

      if (window.innerWidth <= 865) {
        menuOpciones.children[0].appendChild(btnElement)
        header.appendChild(menuOpciones)
      } else {
        controlesUsuario.insertBefore(btnElement, controlesUsuario.firstChild)
        contenedor.appendChild(menuOpciones)
      }

      this.responsiveY()
    },
    
    handleResize() {
      this.responsive()
    },
    
    initResponsive() {
      this.$nextTick(() => {
        this.responsive()
      })
    }
  }
}
</script>

<style>
@import './Navegacion/style.css';

.btn-menu-item {
  list-style: none;
}

@media (min-width: 866px) {
  .btn-menu-item {
    display: none;
  }
}
.custom-dropdown-menu {
  list-style: none;
  background: white;
  position: fixed;
  top: 10%;
  right: 10px;
  z-index: 999;
  min-width: 150px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 16px;
  padding: 2px;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: fadeIn 0.2s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 768px) {
  .custom-dropdown-menu {
    right: 5px;
    min-width: 140px;
    top: 8%;
  }
}
.liother {
  padding: 6px 20px; 
  border-bottom: 3px solid #08605D
}
.liother:hover {
  background: #C1ECE8;
  border-radius: 12px;
}
</style>