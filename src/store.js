import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
        state : {            
            usuarios : [],            
        },
        actions : {
            setUsuarios({commit},respuesta) {                                
                commit('cambiaUsuarios', respuesta)                
             },


        },
        mutations : {   
            cambiaUsuarios(state, respuesta){
                state.usuarios = respuesta
            },

        }
    })