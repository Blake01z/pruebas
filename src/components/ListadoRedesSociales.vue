<template>
  <div class="list-sociales container">
      <div class="list-redes">
        
          <a 
          :href="this.whatsapp()" 
          target="_blank" 
          class="icon-red tooltip top"
          data-action="share/whatsapp/share"
          >
            <span class="tiptext">Compartir en Whatsapp</span>
            <img src="../assets/whatsapp.png" alt="Whatsapp">
          </a>

          <a :data-href="this.facebookDataHref()" 
          :href="this.facebookHref()"
          target="_blank" 
          class="icon-red facebook tooltip top"
          >
            <span class="tiptext">Compartir en Facebook</span>
            <img src="../assets/facebook.png" alt="Facebook">
          </a>

          <a 
          :href="this.twitter()"
          data-action="share/twitter/share"
          target="_blank" 
          class="icon-red twitter tooltip top">
            <span class="tiptext">Compartir en Twitter</span>
            <img src="../assets/twitter.png" alt="Twitter">
          </a>

          <a :href="this.linkedin()" 
            target="_blank"
            data-action="share/linkedin/share"
            class="icon-red tooltip top">
            <span class="tiptext">Compartir en Linkedin</span>
            <img src="../assets/linkedin.png" alt="Linkedin">
          </a>

          <a :href="this.telegram()" class="icon-red tooltip top"
            target="_blank"
          >
            <span class="tiptext">Compartir en Telegram</span>
            <img src="../assets/telegram.png" alt="Telegram">
          </a>
      </div>
      <p>Comparte estos productos con quien quieras.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name:'ListadoRedesSociales',
    computed:{
      ...mapState('referidosStore',['user'])
    },
    methods:{
      whatsapp(){
        let whatsapp = (typeof window === 'undefined') ? '' : window.location.origin +'/%23/home/?id='+this.user.id
        whatsapp = 'https://api.whatsapp.com/send?text='+ whatsapp
        return whatsapp
      },
      twitter(){
        let twitter = (typeof window === 'undefined') ? '' : window.location.origin +'/%23/home/?id='+this.user.id
        twitter = "https://twitter.com/intent/tweet?text=Autocom&url="+twitter+"&via=Autocom&hashtags=Autocom"
        return twitter
      },
      linkedin(){
        let linkedin = (typeof window === 'undefined') ? '' : window.location.origin +'/%23/home/?id='+this.user.id
        linkedin = "https://www.linkedin.com/shareArticle?mini=true&url="+linkedin 
        return linkedin
      },
      telegram(){
        let telegram = (typeof window === 'undefined') ? '' : window.location.origin +'/%23/home/?id='+this.user.id
        telegram = "https://telegram.me/share/url?url="+telegram
        return telegram
      },
      facebookHref(){
        let facebook = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Freferidos-online-prueba.netlify.app%2F%23%2Fhome%3Fid%3D${this.user.id}&amp;src=sdkpreparse`
        return facebook
      },
      facebookDataHref(){
        let facebook = `http://www.facebook.com/sharer.php?u=https://referidos-online-prueba.netlify.app/#/home?id=${this.user.id}`
        return facebook
      }
    }

}
</script>
