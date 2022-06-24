<template>
  <div class="header-alert" @click="setIsView('header')">
        <div class="header-alert-notification">
            <img src="../assets/add_alert.png" class="bell" alt="icono alerta">
            <p>{{contador}}</p>
        </div>
   </div>
    <div id="detalleCarrito" class="detalles-carro" :class="{show: getIsView}">
        <div class="info-carrito">
            <p class="carrito-titulo">Productos Seleccionados</p>
            <p class="carrito-cantidad">{{contador}}</p>
        </div>
        <div class="listado-carrito">
            <ProductoCarrito/>
        </div>
        <router-link to="/seleccionados">
            <button class="btn-carrito">Continuar</button>
        </router-link>
        <button class="btn-cerrar-carrito" @click="setIsView('header')">Cerrar Carrito</button>
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
import {mapMutations,mapGetters,mapState} from 'vuex'
export default {
    name:'CarritoHeader',
    components:{
        ProductoCarrito: defineAsyncComponent(() =>  import('../components/ProductoCarrito.vue'))
    },
    methods:{
        ...mapMutations('referidosStore',['setIsView','productosSuger'])
    },
    computed:{
        ...mapGetters('referidosStore',['getIsView']),
        ...mapState('referidosStore',['contador'])
    },
    updated(){
        this.productosSuger()
    }
}

</script>
