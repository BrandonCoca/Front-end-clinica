<template>
  <div>
    <header v-if="$route.meta.showHeader" ref="header">
      <div class="contenedor" ref="contenedor">
        <div class="logo">
          <img src="/logo.jpg" class="im"/>
          <span>LA FUENTE</span>
        </div>

        <div class="menu-opciones" ref="menuOpciones" :class="{ 'mostrar': menuMostrar, 'min': menuMin }">
          <ul>
            <li>
              <router-link id="home" to="/">Inicio</router-link>
            </li>
            <li>
              <router-link to="/usuarios">Usuarios</router-link>
            </li>
            <li>
              <router-link to="/categorias">Doctores</router-link>
            </li>
            <li>
              <router-link to="/tendencias">Pacientes</router-link>
            </li>
          </ul>
        </div>

        <div class="controles-usuario" ref="controlesUsuario">
          <button class="btn-system" ref="btnSignUp">SIGN UP</button>
          <ion-icon id="btn-menu" name="menu" @click="toggleMenu"></ion-icon>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuMostrar: false,
      menuMin: false
    }
  },
  mounted() {
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
      // Reinicia el menú cuando cambias de página
      this.menuMostrar = false
      
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
    toggleMenu() {
      this.menuMostrar = !this.menuMostrar
      this.responsiveY()
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

      if (window.innerWidth <= 865) {
        menuOpciones.children[0].appendChild(btnSignUp)
        header.appendChild(menuOpciones)
      } else {
        controlesUsuario.appendChild(btnSignUp)
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
</style>