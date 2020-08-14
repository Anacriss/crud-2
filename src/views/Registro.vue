<template>
<div>
    <h1>Registro de usuarios</h1>

    <form @submit.prevent="crearUsuario({email: email, password: pass1})">
        <input
            type="email"
            placeholder="ingrese su correo"
            v-model="email"
        >
        <input
            type="password"
            placeholder="ingrese su contraseña"
            v-model="pass1"
        >
        <input
            type="password"
            placeholder="repita su correo"
            v-model="pass2"
        >
        <button type="submit">registrar usuario</button>

    </form>
</div>
    
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'Registro' ,
    data() {
        return{
        email:'',
        pass1:'',
        pass2:'',
        }
   }, 
   created(){

   },
   methods:{
       ...mapActions(['crearUsuario'])
   }

}
</script>