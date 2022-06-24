<template>

<p class="alerta-productos" :class="{showAlert: (this.userObj.productos  === false)}">No se ha seleccionado ningun producto!</p>

  <form class="formulario" v-on:submit.prevent="registrarUsuario">
    <div class="campo">
      <label for="nombre">Nombre (s):</label>
      <input name="nombre" id="nombre" type="text" placeholder="Ingresa nombre" v-model="contacto.nombre"/>
      <img src="../assets/error.png" alt="icono error" class="error-icon-alerta" :class="{showiconerror: (this.userObj.nombre === false)}"/>
      <img src="../assets/cheque.png" alt="icono error" class="error-icon-alerta" :class="{showiconerror: (this.userObj.nombre === true)}"/>
      <p class="alerta" :class="{showAlert: (this.userObj.nombre === false)}">El nombre no puede ir vacio.</p>

    </div>

    <div class="campo">
      <label for="paterno">Apellido Paterno:</label>
      <input name="paterno" id="paterno" type="text" placeholder="Ingresa apellido paterno" v-model="contacto.paterno"/>
      <img src="../assets/error.png" alt="icono error" class="error-icon-alerta" :class="{showiconerror: (this.userObj.paterno === false)}"/>
      <img src="../assets/cheque.png" alt="icono error" class="error-icon-alerta" :class="{showiconerror: (this.userObj.paterno === true)}"/>
      <p class="alerta" :class="{showAlert: (this.userObj.paterno === false)}">El apellido paterno no puede ir vacio</p>

    </div>

    <div class="campo">
      <label for="materno">Apellido Materno:</label>
      <input name="materno" id="materno" type="text" placeholder="Ingresa apellido materno" v-model="contacto.materno"/>
      <img src="../assets/error.png" alt="icono error" class="error-icon-alerta" :class="{showiconerror: (this.userObj.materno === false)}"/>
      <img src="../assets/cheque.png" alt="icono error" class="error-icon-alerta" :class="{showiconerror: (this.userObj.materno === true)}"/>
      <p class="alerta" :class="{showAlert: (this.userObj.materno === false)}">El apellido materno no puede ir vacio</p>

    </div>

    <div class="campo">
      <label for="celular">Celular:</label>
      <input name="celular" id="celular" type="tel" placeholder="Ingresa número celular" v-model="contacto.celular"/>
      <img src="../assets/error.png" alt="icono error" class="error-icon-alerta" :class="{showiconerror: (this.userObj.celular === false)}"/>
      <img src="../assets/cheque.png" alt="icono error" class="error-icon-alerta" :class="{showiconerror: (this.userObj.celular === true)}"/>
      <p class="alerta" :class="{showAlert: (this.userObj.celular === false)}">Debes ingresar un numero valido</p>

    </div>

    <div class="campo">
      <label for="correo">Correo electrónico:</label>
      <input name="correo" id="correo" type="text" placeholder="Ingresa correo electronico" v-model="contacto.correo"/>
      <img src="../assets/error.png" alt="icono error" class="error-icon-alerta" :class="{showiconerror: (this.userObj.email === false)}"/>
      <img src="../assets/cheque.png" alt="icono error" class="error-icon-alerta" :class="{showiconerror: (this.userObj.email === true)}"/>
      <p class="alerta" :class="{showAlert: (this.userObj.email === false)}">Debes ingresar un correo valido</p>

    </div>

    <div class="aviso-priv">
      <div class="campo-aviso">
        <input name="aviso" id="privacidad" class="checkbox-aviso" type='checkbox' v-model="aviso"/>
        <label for="privacidad">Acepto <a href="https://www.autocom.mx/formato-derechos-arco.html" target="_blank">aviso de privacidad</a></label>
      </div>
        <p class="alerta" :class="{showAlert: (this.userObj.aviso === false)}">Debes aceptar el aviso de privacidad</p>
    </div>

    <div class="terminos-serv">
      <div class="campo-terminos">
        <input name="terminos" id="terminos" class="checkbox-terminos" type='checkbox' v-model="terminos"/>
        <label for="terminos">Acepto <a href="https://www.autocom.mx/aviso-de-privacidad.html" target="_blank">términos y condiciones</a></label>

      </div>
        <p class="alerta" :class="{showAlert: (this.userObj.terminos === false)}">Debes aceptar los terminos y condiciones</p>
    </div>

    <input class="btn-enviar-formulario" type="submit" value="Enviar"/>
  </form>


</template>

<script>
import {mapState,mapActions} from 'vuex'

const name = new RegExp(/^[a-zA-ZA\s]{1,40}$/) // Letras y espacios, pueden llevar acentos.
const pat = new RegExp (/^[a-zA-ZA\s]{1,40}$/)
const mat = new RegExp (/^[a-zA-ZA\s]{1,40}$/)
const mail = new RegExp (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
const tel = new RegExp (/^\d{10}$/) // 7 a 14 numeros.


export default {
    name:"formulario",
    data(){
      return{
        contacto:{
          nombre: '',
          paterno: '',
          materno: '',
          celular: '',
          correo: '',
        },
        aviso: false,
        terminos: false,
        userObj:{
          nombre: null,
          paterno:null,
          materno: null,
          email: null,
          celular: null,
          aviso: null,
          terminos: null,
          productos: null
        }
      }
    },
    computed:{
        ...mapState('referidosStore',['user','productos'])
      },
    methods:{
    ...mapActions('referidosStore',['enviarRegistro']),
    validarFormulario() {
      if(name.test(this.contacto.nombre)){
        this.userObj.nombre = true
      }else{
        this.userObj.nombre = false
      }

      if(pat.test(this.contacto.paterno)){
        this.userObj.paterno = true
      }else{
        this.userObj.paterno = false
      }

      if(mat.test(this.contacto.materno)){
        this.userObj.materno = true
      }else{
        this.userObj.materno = false
      }

      if(mail.test(this.contacto.correo)){
        this.userObj.email = true
      }else{
        this.userObj.email = false
      }

      if(tel.test(this.contacto.celular)){
        this.userObj.celular = true
      }else{
        this.userObj.celular = false
      }
      
      if(this.aviso){
        this.userObj.aviso = true
      }else{
        this.userObj.aviso = false
      }

      if(this.terminos){
        this.userObj.terminos = true
      }else{
        this.userObj.terminos = false
      }

      if(this.productos.length === 0){
        this.userObj.productos = false
      }else{
        this.userObj.productos = true
      }

      setTimeout(() => {
        this.userObj.nombre = null
        this.userObj.paterno = null
        this.userObj.materno = null
        this.userObj.email = null
        this.userObj.celular = null
        this.userObj.aviso = null
        this.userObj.terminos = null
        this.userObj.productos = null
      },5000)
    },

    registrarUsuario(){
      this.validarFormulario()

      if([this.userObj.nombre,
          this.userObj.paterno,
          this.userObj.materno,
          this.userObj.email,
          this.userObj.celular,
          this.userObj.aviso,
          this.userObj.terminos,
          this.userObj.productos].includes(false)){
          console.log('registro no enviado')
      }else{
        const nuevoRegistro = {
            id_user: this.user.id,
            nombre: this.contacto.nombre,
            ap_paterno: this.contacto.paterno,
            ap_materno: this.contacto.materno,
            email: this.contacto.correo,
            telefono: this.contacto.celular,
            bitacora_referidos:[...this.productos]
        }
        this.enviarRegistro(nuevoRegistro)
        this.$router.push({ path: "confirmacion", 
        query: { name: this.contacto.nombre, ap:this.contacto.paterno }});
      } 
    }
  }
}

</script>






