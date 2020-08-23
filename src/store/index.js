import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
import router from '../router'
import {auth} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: {nombre: '', id: ''},
    usuario:null,
    error: null
},
mutations: {
    setTareas(state, tareas){
        state.tareas = tareas
    },
    setTarea(state, tarea){
      state.tarea = tarea
  },
  setEliminarTarea(state,payload){
    const tareasFiltradas = stare.tareas.filter(item => item.id !==payload)
    console.log(tareasFiltradas)
  },
  setUsuario(state, usuario){
    state.usuario = usuario
  },
  setError(state, error){
    state.error = error
  }

},
actions: {
    getTareas({commit}){
        const tareas = []
        db.collection('tareas').get()
        .then(res => {
            res.forEach(doc => {
                console.log(doc.id)
                console.log(doc.data())
                let tarea = doc.data()
                tarea.id = doc.id
                tareas.push(tarea)
            })
            commit('setTareas', tareas)
        })
    },
    getTarea({commit}, id){
      db.collection('tareas').doc(id).get()
      .then(doc => {
          // console.log(doc.data())
          // console.log(doc.id)
          let tarea = doc.data()
          tarea.id = doc.id
          commit('setTarea', tarea)
      })
  },
  editarTarea({commit}, tarea){
      db.collection('tareas').doc(tarea.id).update({
          nombre: tarea.nombre
      })
      .then(() => {
          console.log('tarea editada')
          router.push({name: 'Inicio'})
      })
  },
  agregarTarea({commit}, nombreTarea){
    db.collection('tareas').add({
        nombre: nombreTarea
    })
    .then(doc => {
        console.log(doc.id)
        router.push({name: 'Inicio'})
    })
  },
  eliminarTarea({commit},idTarea){
    db.collection('tareas').doc(idTarea).delete()
    .then(() => {
      console.log('tarea eliminada')
    })
  },

  crearUsuario({commit}, usuario){
    auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
      .then(res => {
        console.log(res)
        const usuario = {
          email: res.user.email,
          uid: res.user.uid
        }
        commit('setUsuario', usuario)
        router.push('/')
      })
      .catch(error => {
        console.log(error)
        commit('setError', error)
      })
  },
  ingresoUsuario({commit}, usuario){
    auth.signInWithEmailAndPassword(usuario.email, usuario.password)
    .then(res => {
        console.log(res)
        const usuario = {
            email: res.user.email,
            uid: res.user.uid
        }
        commit('setUsuario', usuario)
        router.push('/')
    })
    .catch(error => {
        console.log(error)
        commit('setError', error)
    })
},
detectarUsuario({commit}, usuario){
  commit('setUsuario', usuario)
},
cerrarSesion({commit}){
  auth.signOut()
  router.push('/ingreso')
}

 

  },
  modules: {
  }
})
