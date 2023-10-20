  <template>
  <nav class=" navbar_custom navbar navbar-expand-lg bg-body-tertiary" >
    <div class="container-fluid" style="background-color: #42b883">
      <router-link to="/"><BaseButton class="navbar-brand">Home</BaseButton></router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="ml-auto">
        <router-link to="/conversations/1"><BaseButton class="navbar-brand">Conversation</BaseButton></router-link>
        <slot></slot>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar_custom {
  position: fixed; /* La barre de navigation reste fixée en haut de l'écran */
  top: 0; /* La barre de navigation sera au sommet de la page */
  left: 0;
  width: 100%; /* La barre de navigation occupe toute la largeur de l'écran */
  background-color: #333; /* Couleur de fond de la barre de navigation */
  color: #fff; /* Couleur du texte de la barre de navigation */
  padding: 10px 0; /* Espacement intérieur pour le contenu de la barre de navigation */
  z-index: 1000; /* Assurez-vous que la barre de navigation est au-dessus de tout le reste */
}
</style>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: 'BaseHeader',
  components: {BaseButton},
}
</script>