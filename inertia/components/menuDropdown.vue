<template>
  <Menu as="div" class="relative inline-block">
    <MenuButton class="flex w-full justify-center items-center">
      <component :is="icon" class="w-5 text-slate-500 hover:text-slate-950" aria-hidden="true" />
      {{ title }}
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems class="absolute z-40 right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg">
        <slot></slot>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

defineProps({
  title: {
    type: String,
    required: false,
  },
  icon: {
    type: [String, Object, Function],
    required: true,
  },
})
</script>
