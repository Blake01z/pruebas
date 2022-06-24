<template>
  <aside class="aside">

      <div class="ver-productos">
        <p>Ver productos agregados</p>
        <img src="../assets/Vector1.png" alt="imagen vector" v-on:click="showList = !showList" :class="{iconoList: showList === true}"/>
        <img src="../assets/Vector.png" alt="imagen vector" v-on:click="showList = !showList" :class="{iconoList: showList === false}"/>
      </div>
    
      <div class="listado-aside" :class="{showlist: showList}">
          <p class="titulo-aside">Productos agregados:</p>

          <div class="produc-no-selectec" v-if="this.productos <= 0">
            <p>No tienes ningun producto agregado</p>
          </div>

          <div v-else v-for="producto in productos" :key="producto.id_producto" class="productos-select-aside container">

            <div class="contenedor-productos-aside">
              <div class="aside-titulos-productos">
                <h4>{{producto.descripcion}}</h4>
                <p>Producto Registrado</p>
              </div>
              <button
                v-on:click="setOutProducto(producto.id_producto)"
              >
                <img src="../assets/close.png" alt="close icon"/>
              </button>
            </div>

          </div>

          <SpinnerAside v-if="this.productosSug.length <= 0 && this.contador <= 0"/>

          <template v-else>
            <div class="produc-no-sugerido" v-if="this.productosSug <= 0">
              <p>No tienes productos sugeridos</p>
            </div>

            <div class="productos-sugeridos" v-else>
              <p class="titulo-productos-sugeridos">Agrega también estos productos</p>

              <div v-for="sugerido in productosSug" :key="sugerido.id_producto" class="sugerido-contenedor-lista">
                <div class="sugerido-container">
                  <div class="suegrido-titulos">
                    <h4>{{sugerido.descripcion}}</h4>
                      <p>Producto Sugerido</p>
                  </div>
                  <h2 v-on:click="setProducto(sugerido)">○</h2>
                </div>
              </div>
            </div>
          </template>
      </div>


  </aside>
</template>

<script>
import {defineAsyncComponent} from 'vue'
import { mapState, mapMutations } from 'vuex';
export default {
    name:"asideBar",
    components:{
        SpinnerAside: defineAsyncComponent(() =>  import('../components/SpinerAside.vue'))
    },
    data: () => ({
        showList: false,
    }),
    computed:{
      ...mapState('referidosStore',['productos','productosSug','contador'])
    },
    methods:{
       ...mapMutations('referidosStore',['setOutProducto','productosSuger','setProducto'])
   },
   created(){
     setTimeout(() => {
       this.productosSuger()
     },3000)
   }
}
</script>

<style>

</style>