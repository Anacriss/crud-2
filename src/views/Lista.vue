<template>
    <div>
      <h1>Inicio</h1>
     <router-link to='/agregar'>
     <button class="btn btn-success btn-block">Agregar</button>
     </router-link>
      <ul class="list-group mt-5">
        <li class="list-group-item"
        v-for="(item, index) in tareas" :key="index">
          {{item.nombre}} - {{item.id}}
          <div class="float-right">
            <router-link class="btn btn-warning btn-sm mr-2"
            :to="{name: 'Editar', params: {id: item.id}}">
              Editar
            </router-link>

            <button @click="eliminarTarea(item.id)" class="btn btn-danger btn-sm">Eliminar tarea</button>
          </div>


        </li>
      </ul>
        
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Lista',
    created(){
        this.getTareas()
    },
    methods:{
        ...mapActions(['getTareas','eliminarTarea'])
    },
    computed:{
        ...mapState(['tareas'])
    }
}
</script>

