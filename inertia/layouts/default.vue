<template>
  <Error />
  <div class="h-full w-full flex flex-col">
    <Header />
    <div
      class="bg-cover bg-center items-center justify-center flex flex-col flex-1"
      :class="{ 'bg-white': !isLoginOrRegister }"
      :style="{
        backgroundImage: isLoginOrRegister
          ? 'url(https://images.unsplash.com/photo-1586515779592-d94f096e4c41?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
          : '',
      }"
    >
      <slot></slot>
    </div>
    <Footer v-if="!isLoginOrRegister" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Error from '@/components/message.vue'

// Use the usePage hook to get the current page props
const page = usePage()

// Determine if the current route is login or register
const isLoginOrRegister = computed(() => {
  const url = page.url // Get the current URL from Inertia
  return url === '/login' || url === '/signin'
})
</script>

<style scoped></style>
