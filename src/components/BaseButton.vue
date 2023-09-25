<template>
  <button class="base-button" :style="buttonStyle">
    Click here
  </button>
</template>

<script>
</script>

<style>
.base-button {
  padding: 10px 20px;
  border: none;
  background-color: green;
  color:white;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  outline: none;
}

.base-button:hover {
  background-color: lightblue;
  transform: scale(1.05);
}

.base-button:focus {
  outline: 2px solid lightblue;
  outline-offset: 2px;
}

.disabled {
  background-color: rgb(128, 128, 128);
  cursor: not-allowed !important;
}
</style>