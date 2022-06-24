<template>
  <div class="listado-productos">
      <Producto v-for="producto in productos" :key="producto.id_producto" :producto="producto"/>
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    name:"ListadoProductos",
    components:{
        Producto: defineAsyncComponent(() =>  import('./Producto.vue'))
    },
    props:{
        productos:{
            type: Array,
            required: true,
        }
    }
}
</script>
