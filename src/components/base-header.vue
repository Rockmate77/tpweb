<template>
  <nav class=" navbar_custom navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">TP3</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Contact</a>
          </li>
        </ul>
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
export default {
  name: 'BaseHeader',
}
</script>