<template>
    <div v-if="productos.length === 0">
        <p>No hay productos agregados.</p>
    </div>

    <div v-else v-for="producto in productos" :key="producto.id_producto" class="producto-agregado">
        <p>{{producto.descripcion}}</p>
        <button
        v-on:click="setOutProducto(producto.id_producto)"
        >
        <img src="../assets/close.png" alt="close icon"/>
        </button>
    </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name:'ProductoCarrito',
   computed:{
       ...mapState('referidosStore',['productos'])
   },
   methods:{
       ...mapMutations('referidosStore',['setOutProducto'])
   }
}

</script>
