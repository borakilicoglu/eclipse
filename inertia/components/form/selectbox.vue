<template>
  <Listbox v-model="selectedItem">
    <div class="relative">
      <ListboxButton
        class="relative w-full cursor-pointer bg-white py-2 pl-2 text-left border border-slate-950 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300"
      >
        <span class="block truncate capitalize">{{ selectedItem || placeholder }}</span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="item in items"
            :key="item"
            :value="item"
            as="template"
          >
            <li
              :class="[
                active ? 'bg-slate-800 text-white' : 'text-slate-900',
                'relative cursor-pointer select-none py-2 px-2',
              ]"
            >
              <span
                :class="[selected ? 'font-medium' : 'font-normal', 'block truncate capitalize']"
                >{{ item }}</span
              >
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, onMounted, toRefs } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { Role } from '@/types'

const props = defineProps({
  items: {
    type: Array as () => Role[],
    required: true,
  },
  modelValue: {
    type: String as () => Role,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: 'Select user role',
  },
})

const emit = defineEmits(['update:modelValue'])

const { modelValue, items } = toRefs(props)
const selectedItem = ref<Role | ''>(modelValue.value)

watch(modelValue, (newValue) => {
  selectedItem.value = newValue
})

watch(selectedItem, (newValue) => {
  if (newValue !== modelValue.value) {
    emit('update:modelValue', newValue)
  }
})

onMounted(() => {
  selectedItem.value = modelValue.value
})
</script>
