<template >

  <section class="src-componentes-usuarios">
     <div class="jumbotron">
      <h2>Usuarios</h2>
      <hr />
      <hr />
      <br />


      <button class="btn btn-danger my-3 mr-3" @click="getUsuariosAxios()">
        Pedir Axios then catch
      </button>

      <button class="btn btn-danger my-3 mr-3" @click="getUsuariosFetchAsync()">
        Pedir Axios async await
      </button>

      <button class="btn btn-info my-3 mr-3" @click="$store.dispatch('setUsuarios','')">
        Limpiar
      </button>
      <br />

      <div v-if="$store.state.usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>            
          </tr>          
          <tr v-for="usuario in $store.state.usuarios" :key="usuario.id">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.edad }}</td>            
            <td>{{ usuario.email }}</td>            
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-info text-center">
        No se encuentran datos
      </h4>
    </div>
  </section>

</template>

<script >

  export default  {
    name: 'src-componentes-usuarios',
    props: [],
    mounted () {

    },
    data () {
      return {
          url : 'https://6372d0af348e947299fd572c.mockapi.io/users_tp7',
      }
    },
    methods: {
        async getUsuariosFetchAsync() {                
            try {              
              let response = await fetch(this.url)        
              let respuesta = await response.json();                                       
              this.$store.dispatch('setUsuarios', respuesta);
            }
            catch(error) {
              console.log(error);
            }                        
          },    
        async getUsuariosAxios() {                  
          await this.axios(this.url)
          .then( respuesta => { this.$store.dispatch('setUsuarios', respuesta.data); })        
          .catch((error) => console.log(error))       
        
    },
    },   
    computed: {

    },
}


</script>

<style scoped lang="css">

  .jumbotron {
    background-color: rgb(246, 218, 218);
    color: rgb(15, 17, 59);
  }

  hr {
    background-color: #bbb;
  }

</style>
