<template>
  <button
    class="w-full h-14 border-2 border-slate-950 bg-slate-900 hover:bg-white text-slate-100 hover:text-slate-950 shadow-md"
    type="submit"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface LabelProps {
  label: string
}

defineProps<LabelProps>()
</script>

<style scoped>
button:not(:disabled) {
  cursor: pointer;
}
</style>
