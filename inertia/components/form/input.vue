<template>
  <input
    class="h-14 border-2 border-slate-950 px-4 rounded-lg shadow-md"
    :type="type"
    :id="name"
    v-model="model"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
interface InputProps {
  type: string
  name: string
  placeholder?: string
}

defineProps<InputProps>()
const model = defineModel<string | number>()
</script>

<style scoped></style>
