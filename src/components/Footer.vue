<template>
  <footer>

    <div class="container-footer"> 

      <router-link :to="{path:'/', query:{id: this.getIdUser}}">
          <img src="../assets/g10.png" alt="Logo Autocom"/>
      </router-link>

      <div class="informacion-footer">
        <p>Información</p>
        <a href="https://www.autocom.mx/formato-derechos-arco.html" target="_blank">Aviso de privacidad</a>
        <router-link to="/preguntas">Preguntas Frecuentes</router-link>
      </div>

      <div class="contacto-footer">
        <p>Contacto</p>
        <a href="#">01 800 AUTOCOM</a>
      </div>
      
      <div class="redes-footer">

        <p>Síguenos en redes</p>
        <span>Conoce todos nuestros servicios</span>
        <div class="iconos-footer">
          <a href="https://es-la.facebook.com/Autocom.official/" target="_blank">
            <img class="icono-footer" src="../assets/Layer3.png" alt="Icono Facebook">
          </a>
          <a href="https://twitter.com/autocom_mx?lang=es" target="_blank">
            <img class="icono-footer" src="../assets/ELEMENTS.png" alt="Icono Instagram">
          </a>
          <a href="https://www.instagram.com/autocom_mx/?hl=es" target="_blank">
            <img class="icono-footer" src="../assets/Layer2.png" alt="Icono Youtube">
          </a>
        </div>

      </div>

    </div>

    <div class="container-footer-mobil">
      <router-link :to="{path:'/', query:{id: this.getIdUser}}">
          <img class="imagen-logo-footer" src="../assets/g10.png" alt="Logo Autocom"/>
      </router-link>

      <div class="contacto-footer-mobil">
        <h5>Contacto</h5>
        <router-link to="/preguntas">Preguntas Frecuentes</router-link>
        <a href="https://www.autocom.mx/formato-derechos-arco.html" target="_blank">Aviso de privacidad</a>
        <a href="#">01 800 AUTOCOM</a>
      </div>

      <div class="redes-footer-mobil">

        <div class="contenedor-mobil-redes">
          <p>Síguenos en redes</p>
          <div class="iconos-footer-mobil">
            <a href="https://es-la.facebook.com/Autocom.official/" target="_blank">
              <img class="icono-footer" src="../assets/Layer3.png" alt="Icono Facebook">
            </a>
            <a href="https://twitter.com/autocom_mx?lang=es" target="_blank">
              <img class="icono-footer" src="../assets/ELEMENTS.png" alt="Icono Instagram">
            </a>
            <a href="https://www.instagram.com/autocom_mx/?hl=es" target="_blank">
              <img class="icono-footer" src="../assets/Layer2.png" alt="Icono Youtube">
            </a>
          </div>
        </div>

        <span>Conoce todos nuestros servicios</span>
      </div>

    </div>

    <p class="copyright">&copy;2022, Autocom. Todos los derechos reservados.</p>
  </footer>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'Footer',
    computed:{
    ...mapGetters('referidosStore',['getIdUser'])
  }
}
</script>
