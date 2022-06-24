<template>
  <div class="container-404">

    <div>
      <img src="../assets/track.png" alt="Imagen track"/>
    </div>

    <div>
      <h2 class="titulo-404">404</h2>
      <p>No hemos podido encontrar</p>
      <p>la página que buscas.</p>
      <router-link :to="{path:'/', query:{id: this.getIdUser}}">
        <button class="btn-404">IR A LA PÁGINA DE INICIO</button>
      </router-link>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  computed:{
    ...mapGetters('referidosStore',['getIdUser'])
  },
  methods:{
    ...mapMutations('referidosStore',['setIsView']),
  },
  created(){
    this.setIsView()
  }
}
</script>