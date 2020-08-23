<template>
  <div id="app">
    <div id="nav">
      <router-link to="/registro">Registro</router-link> |
      <router-link to="/ingreso">Ingreso</router-link> |
      <router-link to="/">Inicio</router-link> |
      <button @click="cerrarSesion">Cerrar Sesión</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods:{
    ...mapActions(['cerrarSesion'])
  }
}
</script>