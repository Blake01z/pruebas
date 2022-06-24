<template>
    <div class="titulos-confirmacion">
        <h3>Confirmación de productos</h3>
        <p>
            Estimado, <span> {{this.$route.query.name}} {{this.$route.query.ap}} </span> ; Acabamos de recibir su solicitud. Espera noticias nuestras en tu correo
            electrónico para continuar con tu  solicitud. ¡Gracias por tu confianza!
        </p>
    </div>

    <div class="contendor-folios">
        <div class="folio" v-for="folio in this.folios.bitacora_referidos" :key="folio.id">
            <h4>{{folio.obs_producto}}</h4>
            <p>folio: {{folio.folio_referido}}</p>
        </div>
    </div>

    <div class="contenedor-evaluacion">
        <div class="titulos-icono-evaluacion">
            <h3>Cuentanos acerca de tu expreciencia</h3>
            <p>Califica la atencion recibida de {{getUser.name}}</p>
        </div>

        <div class="error-confirmacion-encuesta" :class="{dflexsurver: this.surverValidation}">
            <p>Por favor, selecciona un icono de la parte inferior y déjanos saber tu opinión</p>
        </div>

        <div class="evaluacion-iconos">
            <label for="muyMalo">
                <img src="../assets/muy_malo_off.png" alt="icono encuesta" :class="{iconNone: this.choseIcon === '1'}"/>
                <img class="iconNone" src="../assets/muy_malo_on.png" alt="icono encuesta" :class="{iconBlock: this.choseIcon === '1'}"/>
                <input v-on:click="choseOption" type="radio" id="muyMalo" name="tipo" value="1" />
            </label>
            <label for="malo">
                <img src="../assets/malo_off.png" alt="icono encuesta" :class="{iconNone: this.choseIcon === '2'}"/>
                <img class="iconNone" src="../assets/malo_on.png" alt="icono encuesta" :class="{iconBlock: this.choseIcon === '2'}"/>
                <input v-on:click="choseOption" type="radio" id="malo" name="tipo" value="2" />
            </label>
            <label for="regular">
                <img src="../assets/regular_off.png" alt="icono encuesta" :class="{iconNone: this.choseIcon === '3'}"/>
                <img class="iconNone" src="../assets/regular_on.png" alt="icono encuesta" :class="{iconBlock: this.choseIcon === '3'}"/>
                <input v-on:click="choseOption" type="radio" id="regular" name="tipo" value="3" />
            </label>
            <label for="satisfecho">
                <img src="../assets/satisfecho_off.png" alt="icono encuesta" :class="{iconNone: this.choseIcon === '4'}"/>
                <img class="iconNone" src="../assets/satisfecho_on.png" alt="icono encuesta" :class="{iconBlock: this.choseIcon === '4'}"/>
                <input v-on:click="choseOption" type="radio" id="satisfecho" name="tipo" value="4" />
            </label>
            <label for="muySatisfecho">
                <img src="../assets/muy_satisfecho_off.png" alt="icono encuesta" :class="{iconNone: this.choseIcon === '5'}"/>
                <img class="iconNone" src="../assets/muy_satisfecho_on.png" alt="icono encuesta" :class="{iconBlock: this.choseIcon === '5'}"/>
                <input v-on:click="choseOption" type="radio" id="muySatisfecho" name="tipo" value="5" />
            </label>
        </div>

        <button class="btn-enviar-evaluacion" @click="sendSurvey" >Enviar y volver al inicio</button>
        

    </div>

</template>

<script>
import {mapGetters,mapMutations,mapActions,mapState} from 'vuex'
export default {
    data(){
        return{
            choseIcon: '',
            surverValidation: false
        }
    },
    computed:{
    ...mapGetters('referidosStore',['getIdUser','getUser']),
    ...mapState('referidosStore', ['folios'])
    },
    methods:{
        ...mapActions('referidosStore',['loadUser','enviarSurvey','catalogoProductosUser']),
        ...mapMutations('referidosStore',['setIdUser','setIsView']),
        choseOption(e){
            this.choseIcon = e.target.value
        },
        sendSurvey(){
            if(this.choseIcon === '' || this.choseIcon === undefined){
                this.surverValidation = true
            }else{
                const survey = {
                    id_user: this.getIdUser,
                    id_estatus: parseInt(this.choseIcon),
                    observaciones: "Ninguna"
                }
                this.enviarSurvey(survey)
                this.$router.push({path:'/', query:{id: this.getIdUser}})
            }
        }
    },
    created(){
        this.loadUser()
        this.setIdUser()
        this.setIsView()
        this.catalogoProductosUser()
    }
}
</script>


