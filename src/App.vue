<template>
  <div id="app" class="container">
    <div class="text-center">
    <router-link to='/'>
      <img alt="Vue logo" src="./assets/logo.png">
    </router-link>
          <router-link to="/">inicio</router-link> |
      <router-link to="/Registro">Registro</router-link> |
      <router-link to="/Acceso">Acceso</router-link>
    </div>
    <router-view/>
  </div>
</template>