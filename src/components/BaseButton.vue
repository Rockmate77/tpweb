<template>
  <button :class="buttonClasses" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClasses() {
      return {
        'base-button': true,
        'primary': this.color === 'primary' && this.disabled===false,
        'warn': this.color === 'warn' && this.disabled===false,
        'danger': this.color === 'danger' && this.disabled===false,
        'disabled':this.isDisabled===true
      };
    }
  },
  data() {
    return {
      isDisabled: this.disabled
    }
  },
  watch: {
    disabled(newVal) {
      this.isDisabled = newVal;
    },
    color() {
      this.manageColor();
    }
  }
}
</script>

<style>
.base-button {
  padding: 10px 20px;
  border: none;
  background-color: #42b883;
  color:white;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  outline: none;
}

.base-button:hover {
  background-color: lightblue;
  color:black;
  transform: scale(1.05);
}

.base-button:focus {
  outline: 2px solid lightblue;
  color:black;
  outline-offset: 2px;
}

.disabled {
  background-color: rgb(128, 128, 128);
  cursor: not-allowed !important;
}
.primary{
  background-color: #42b883;
  color:black;
}
.warn{
  background-color: orange;
  color:black;
}
.danger{
  background-color: red;
  color:white;
}
</style>