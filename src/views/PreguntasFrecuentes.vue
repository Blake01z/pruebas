<template>

  <UrlNotFound v-if="getUser.id === undefined"/>

  <template v-else>
    <div class="container-preguntas">
      <h2 class="titulo-preguntas">Conoce Como Solicitar los servicios</h2>
      <Faq v-for="(faq,i) in faqs" :key="i" :faq="faq" :i="i"/>
      <router-link :to="{path:'/', query:{id: this.getIdUser}}">
        <button class="btn-faq-inicio">Regresar al inicio</button>
      </router-link>
    </div>
  </template>

</template>

<script>
import {defineAsyncComponent} from 'vue'
import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    name:'preguntas',
    components:{
      Faq: defineAsyncComponent(() =>  import('../components/Faq.vue')),
      UrlNotFound: defineAsyncComponent(() =>  import('../components/UrlNotFound.vue'))
    },
    data(){
      return{
        faqs: [
          {
            question: "¿Cómo solicitar estos productos?",
            answer:"Reprehenderit consectetur aliqua adipisicing eu excepteur eu consectetur laboris pariatur consectetur non fugiat. Culpa magna sit aute esse commodo laborum elit esse velit sunt quis ad culpa in. Fugiat cillum officia velit sit consequat ea ut elit. Culpa ad laborum ea in proident qui.",
            open: false
          },
          {
            question: "¿Cualquier persona puede solicitar estos productos?",
            answer:"Reprehenderit consectetur aliqua adipisicing eu excepteur eu consectetur laboris pariatur consectetur non fugiat. Culpa magna sit aute esse commodo laborum elit esse velit sunt quis ad culpa in. Fugiat cillum officia velit sit consequat ea ut elit. Culpa ad laborum ea in proident qui.",
            open: false
          },
          {
            question: "Ejemplo de pregunta frecuente",
            answer:"Reprehenderit consectetur aliqua adipisicing eu excepteur eu consectetur laboris pariatur consectetur non fugiat. Culpa magna sit aute esse commodo laborum elit esse velit sunt quis ad culpa in. Fugiat cillum officia velit sit consequat ea ut elit. Culpa ad laborum ea in proident qui.",
            open: false
          },
          {
            question: "Ejemplo de pregunta frecuente",
            answer:"Reprehenderit consectetur aliqua adipisicing eu excepteur eu consectetur laboris pariatur consectetur non fugiat. Culpa magna sit aute esse commodo laborum elit esse velit sunt quis ad culpa in. Fugiat cillum officia velit sit consequat ea ut elit. Culpa ad laborum ea in proident qui.",
            open: false
          },
        ],
        id: this.getIdUser
      }
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
