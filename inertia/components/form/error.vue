<template>
  <div class="form-error" v-if="errors && errors.length > 0">
    <p>{{ errors[0] }}</p>
  </div>
</template>

<script setup lang="ts">
interface ErrorProps {
  errors?: Array<string>
}

defineProps<ErrorProps>()
</script>

<style scoped>
.form-error {
  height: 1.5em;
  font-size: 0.8em;
  color: #ff0000;
}
</style>
