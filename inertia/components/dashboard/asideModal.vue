<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-end">
    <div class="absolute inset-0 bg-slate-950 opacity-50" @click="closeModal"></div>
    <transition name="slide-aside">
      <aside v-if="isOpen" class="relative w-1/4 h-full bg-white shadow-lg z-50">
        <div v-if="item" class="p-4">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-semibold text-slate-950">{{ modalTitle }}</h2>
            <button @click="closeModal" class="text-slate-500 hover:text-slate-950">Close</button>
          </div>
          <form @submit.prevent="handleSubmit">
            <div v-for="(_value, key) in visibleFormData" :key="key" class="mb-4">
              <label :for="String(key)" class="block font-semibold mb-2 capitalize">{{
                key
              }}</label>
              <Selectbox
                v-if="key === 'role'"
                v-model="formData[key]"
                :items="roles"
                :disabled="mode === 'view'"
                placeholder="Select user role"
              />
              <input
                v-else
                v-model="formData[key]"
                :id="String(key)"
                :type="key === 'password' ? 'password' : 'text'"
                :readonly="mode === 'view'"
                class="w-full p-2 border border-slate-950"
              />
            </div>
            <button
              v-if="mode !== 'view'"
              type="submit"
              class="mt-4 bg-slate-800 text-white py-2 w-full px-4 hover:bg-slate-950"
            >
              Save
            </button>
          </form>
        </div>
      </aside>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, watch, reactive } from 'vue'
import { Item, Role } from '@/types'
import Selectbox from '@/components/form/selectbox.vue'

const props = defineProps({
  isOpen: Boolean,
  mode: {
    type: String,
    required: true,
    default: 'view', // 'view', 'edit', 'create'
  },
  item: {
    type: Object as () => Item | null,
    required: false,
    default: null,
  },
  editableFields: {
    type: Array as () => string[],
    required: true,
  },
  roles: {
    type: Array as () => Role[],
    required: false,
    default: () => [],
  },
})

const emit = defineEmits(['close', 'save'])

const closeModal = () => {
  emit('close')
}

const modalTitle = computed(() => {
  if (props.mode === 'view') return `View ${props.item?.title}`
  if (props.mode === 'edit') return `Edit ${props.item?.title}`
  if (props.mode === 'create') return `Create ${props.item?.title}`
  return ''
})

const formData = reactive<Record<string, any>>({})

watch(
  () => [props.item, props.mode],
  ([item, mode]) => {
    if (item && typeof item !== 'string') {
      if (mode === 'edit' || mode === 'view') {
        Object.keys(item.fields).forEach((key) => {
          formData[key] = item.fields[key]
        })
      } else if (mode === 'create') {
        props.editableFields.forEach((key) => {
          formData[key] = ''
        })
      }
    }
  },
  { immediate: true }
)

const handleSubmit = () => {
  emit('save', { mode: props.mode, data: formData })
  closeModal()
}

const visibleFormData = computed(() => {
  const fields = Object.entries(formData).filter(([key]) => props.editableFields.includes(key))
  if (props.mode === 'view') {
    return Object.fromEntries(fields.filter(([key]) => key !== 'password'))
  }
  return Object.fromEntries(fields)
})
</script>
