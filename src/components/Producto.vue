<template>
    <div class="producto-card">
        <div class="container-titulos">
            <h3 class="titulo-producto">{{producto.descripcion}}</h3>
            <p class="subtitulo-producto" :class="{hidden: showDesc}">Lorem</p>
            <p class="descripcion-producto" :class="{show: showDesc}">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eius velit aperiam sunt saepe,
            </p>
        </div>
        <div class="funciones-producto">
            <div class="btns-producto" :class="{changeBtns:showDesc}">
                <button class="btn-info-producto" v-on:click="showDesc = !showDesc">{{showDesc ? 'Ver menos' : 'Ver mas'}}</button>
                <button class="botonProductos"
                v-on:click="setProducto(producto)"
                :style="{ color: isAddText(producto), backgroundColor: isAddBg(producto) }"
                >
                {{(this.productos.some(prod => prod.id_producto === producto.id_producto)) ? 'Agregado' : 'Agregar'}}
                </button>
            </div>
        </div>
        <div class="imgBx">
            <img class="share" :style="{backgroundColor:producto.color}" src="../assets/ico-compartir.svg" v-if="showDesc">
            <img class="imagen-producto" :src="producto.imagen" v-else>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name:"Producto",
    props:{
        producto:{
            type: Object,
            required: true
        }
    },
    data: () => ({
        showDesc: false
    }),
    methods:{
        ...mapMutations('referidosStore',['setProducto']),
        isAddText(producto){
            if(this.productos.some(prod => prod.id_producto === producto.id_producto)){
                return '#FFFFFF'
            }else{
                return producto.color
            }
        },
        isAddBg(producto){
            if(this.productos.some(prod => prod.id_producto === producto.id_producto)){
                return producto.color
            }else{
                return '#FFFFFF'
            }
        }
    },
    computed:{
        ...mapState('referidosStore',['productos'])
    }
}
</script>

