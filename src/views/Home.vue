<template>

  <UrlNotFound v-if="getUser.id === undefined"/>


  <template v-else>
    <Carousel :slides="getBanners" :interval="3000" controls indicators/>

    <Spinner v-if="isLoading"/>

    <template v-else>
      <div class="container-info-perfil container">
        <h2 class="titulo-lista-productos">Mis productos</h2>
          <img class="img-perfil" :src="getUser.img" :alt="getUser.name"/>
        <p class="nombre-user">{{getUser.name}}</p>
      </div>
      <ListadoProductos :productos="getCatalogoProductos"/>
      <ListadoRedesSociales />
    </template>

  </template>

</template>

<script>
import {defineAsyncComponent} from 'vue'
import {mapGetters,mapActions,mapMutations,mapState} from 'vuex'
export default {
  name: 'home',
  components:{
        Carousel: defineAsyncComponent(() =>  import('../components/carousel/Carousel.vue')),
        ListadoProductos: defineAsyncComponent(() => import('../components/ListadoProductos')),
        ListadoRedesSociales: defineAsyncComponent(() => import('../components/ListadoRedesSociales.vue')),
        Spinner: defineAsyncComponent(() => import('../components/Spinner.vue')),
        UrlNotFound: defineAsyncComponent(() =>  import('../components/UrlNotFound.vue'))
  },
  props:{
    id:{
      type: String,
      required: true
    }
  },
  computed:{
    ...mapGetters('referidosStore',['getBanners','getUser','getCatalogoProductos']),
    ...mapState('referidosStore',['isLoading'])
  },
  methods:{
    ...mapActions('referidosStore',['loadBanners','loadUser','loadToken','catalogoProductosUser']),
    ...mapMutations('referidosStore',['setIdUser','setContadorAndProductos','inciarCarritoProductos','setIsView'])
  },
  created(){
    this.loadBanners(),
    localStorage.setItem('id',this.id),
    this.loadUser(this.id),
    this.setIdUser(this.id),
    this.catalogoProductosUser(this.id),
    this.inciarCarritoProductos(),
    this.setIsView(),
    this.loadToken()
  },
  watch:{
    id(){
      localStorage.setItem('id',this.id),
      this.loadUser(this.id),
      this.setIdUser(this.id),
      this.setContadorAndProductos()
    }
  }
}
</script>


