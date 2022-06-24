<template>
  <Header/>
  <Fab />
    <router-view></router-view>
  <Footer/>
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {
    name:'LayoutPrimary',
    components:{
        Header: defineAsyncComponent(() =>  import('../components/Header.vue')),
        Footer: defineAsyncComponent(() => import('../components/Footer.vue')),
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    }
}
</script>

<style>

</style>
