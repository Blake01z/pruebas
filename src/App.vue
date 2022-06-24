<template>
  <router-view/>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods:{
    ...mapMutations('referidosStore',['setViewFalse'])
  },
  created(){
    window.addEventListener('scroll', this.setViewFalse);
  }
}
</script>

