<template>

  <UrlNotFound v-if="getUser.id === undefined"/>

  <template v-else>

    <div class="contenedor-datos-contacto">

      <div class="contendor-formulario container">
        <div class="contendor-titulo-formulario">
          <h2 class="titulo-seleccionados">Datos de Contacto</h2>
          <p class="desc-seleccionados">Recuerda que todos los campos son obligatorios para continuar el proceso.</p>
        </div>

        <Formulario />

        <router-link :to="{path:'/', query:{id: this.getIdUser}}" class="link-volver">
          <a class="btn-contacto-volver" href="#">Volver</a>
        </router-link>

        <p class="text-contato">
          En cumplimiento a lo previsto en la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados, 
          nos permitimos informarle lo siguiente: Nissan Autocom Morelia Madero, en lo sucesivo ("Nissan Autocom Morelia Madero"), 
          con domicilio en Av. Madero Pte. 1613 Col. Gertrudis Bocanegra., Morelia, Michoacán de Ocampo, México 58150, es responsable de recabar sus datos personales, del tratamiento que se les da a los mismos y de su adecuada protección, 
          para sí o para cualquiera de las sociedades mercantiles que sean sus subsidiarias o filiales.
        </p>
      </div>


      <AsideBar/>
    </div>

  </template>

</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import {defineAsyncComponent} from 'vue'
export default {
    name:'Seleccionados',
    components:{
        Formulario: defineAsyncComponent(() =>  import('../components/Formulario.vue')),
        AsideBar: defineAsyncComponent(() =>  import('../components/AsideBar.vue')),
        UrlNotFound: defineAsyncComponent(() =>  import('../components/UrlNotFound.vue'))
    },
    computed:{
    ...mapGetters('referidosStore',['getIdUser','getUser'])
  },
  methods:{
    ...mapActions('referidosStore',['loadUser','catalogoProductosUser']),
    ...mapMutations('referidosStore',['setIdUser','inciarCarritoProductos','setIsView'])
  },
  created(){
    this.loadUser()
    this.setIdUser()
    this.inciarCarritoProductos()
    this.setIsView()
    this.catalogoProductosUser()
  }
}
</script>
