<template>
  <header>
      <router-link :to="{path:'/', query:{id: this.getIdUser}}">
        <img src="../assets/g10.png" alt="Logo Autocom" class="logo-autocom-header"/>
      </router-link>
      <div class="container-header">
          <NavegacionHeader/>
          <CarritoHeader v-if="getUser.id !== undefined"/>
      </div>    
  </header>
</template>

<script>
import {defineAsyncComponent} from 'vue'
import {mapGetters} from 'vuex'
export default {
    name:'Header',
    components:{
        NavegacionHeader: defineAsyncComponent(() => import('../components/NavegacionHeader.vue')),
        CarritoHeader: defineAsyncComponent(() => import('../components/CarritoHeader.vue')),
    },
    computed:{
    ...mapGetters('referidosStore',['getIdUser','getUser']),
  }
}
</script>

