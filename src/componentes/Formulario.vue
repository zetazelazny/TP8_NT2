<template >

  <section class="src-componentes-formulario">
        <div class="jumbotron">
      <h2>Formulario</h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="guardar()">

        <!-- NOMBRE -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.nombre" 
            name="nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          >
          <!-- mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo debe poseer hasta {{ nombreMaxLength }} caracteres.
            </div>            


          </field-messages>
        </validate>
    
        <br>

        <!-- EDAD -->
        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            class="form-control" 
            autocomplete="off"
            v-model.number="formData.edad" 
            name="edad"
            required
            :min="edadMin"
            :max="edadMax"
          >
          <!-- mensajes de validación -->
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima debe ser {{ edadMin }} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima debe ser {{ edadMax }} años.
            </div>
          </field-messages>
        </validate>

        <br>

        <!-- MAIL -->
        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.email" 
            name="email"
            required
          >
          <!-- mensajes de validación -->
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>
        
      <button class="btn btn-danger my-3" :disabled="formState.$invalid">Enviar</button>

      </vue-form>    

    </div>  

    
  </section>

</template>

<script >
export default {
  name: "src-componentes-formulario",
  props: [],
  mounted() {},
  data() {
    return {
      url : 'https://6372d0af348e947299fd572c.mockapi.io/users_tp7',      
      formState: {},
      formData: this.getInitialData(),
      nombreMinLength: 3,
      nombreMaxLength: 15,
      edadMin: 18,
      edadMax: 120,
      nombre: null,
      edad: null,
      email: null,
    };
  },
  methods: {
    getInitialData() {
      return {
        nombre: null,
        edad: null,
        email: null,
      };
    },
    guardar() {
      this.postUsuario(),
      this.formData = this.getInitialData();
      this.formState._reset();
    },
      async postUsuario() {
        let usuarioNew =  { ...this.formData }
        //console.log(usuarioNew);
        try {
          await this.axios.post(this.url, usuarioNew, { 'content-type' : 'application/json' })
          
        }
        catch(error) {
          console.error('Error en postUsuario', error.message)
        }    
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-componentes-formulario {
}
  .jumbotron {
    background-color: rgb(164, 211, 220);
    color: rgb(20, 4, 53);
  }

  hr {
    background-color: #bbb;
  }
</style>
