<template>
  <Layout>
    <div class="container mx-auto flex flex-col gap-y-4">
      <div class="flex items-center justify-between gap">
        <h3 class="text-2xl font-semibold">Tours</h3>
        <button
          class="bg-sky-500 font-semibold h-12 px-4 rounded-lg text-white hover:bg-sky-600 hover:text-white flex items-center justify-between gap-x-2 h-12 px-6"
          @click="openModal('create')"
        >
          <ListPlus class="w-5" />
          Add Tour
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white table-auto">
          <thead>
            <tr class="bg-slate-900 text-slate-300 capitalize text-sm divide-x divide-slate-700">
              <th
                :class="
                  index === headers.length - 1 ? 'py-3 w-16 text-left' : 'py-3 px-6 text-left'
                "
                v-for="(header, index) in headers"
                :key="header"
              >
                <template v-if="index === headers.length - 1">
                  <Settings class="w-5 mx-auto" stroke-width="1.5" />
                </template>
                <template v-else>
                  {{ header }}
                </template>
              </th>
            </tr>
          </thead>
          <tbody class="text-slate-600 text-sm">
            <tr
              v-for="tour in tours"
              :key="tour.id"
              class="border-b border-slate-200 even:bg-white odd:bg-slate-100 divide-x divide-slate-200"
            >
              <td class="py-3 px-6 text-left">{{ tour.name }}</td>
              <td class="py-3 px-6 text-left">{{ tour.description }}</td>
              <td class="py-3 px-6 text-left">{{ tour.price }}</td>
              <td class="py-3 px-6 text-left">
                <span v-for="(destination, index) in tour.destinations" :key="index">{{
                  destination.name
                }}</span>
              </td>
              <td class="py-3 w-16 flex items-center justify-center">
                <MenuDropdown :icon="Ellipsis">
                  <MenuItem>
                    <button
                      @click.stop="openModal('view', tour)"
                      class="flex justify-start items-center gap-x-2 px-4 py-3 w-full hover:bg-slate-100 text-slate-600 hover:text-slate-950"
                    >
                      <Eye stroke-width="1.5" class="w-5" />
                      <span>Show</span>
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      @click.stop="openModal('edit', tour)"
                      class="flex justify-start items-center gap-x-2 px-4 py-3 w-full hover:bg-slate-100 text-slate-600 hover:text-slate-950"
                    >
                      <SquarePen stroke-width="1.5" class="w-5" />
                      <span>Edit</span>
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      @click.stop="deleteDestination(tour.id)"
                      class="flex justify-start items-center gap-x-2 px-4 py-3 w-full hover:bg-slate-100 text-slate-600 hover:text-slate-950"
                    >
                      <Trash2 stroke-width="1.5" class="w-5" />
                      <span>Delete</span>
                    </button>
                  </MenuItem>
                </MenuDropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <AsideModal
        :isOpen="isModalOpen"
        :mode="modalMode"
        :editableFields="['name', 'description', 'price']"
        :item="selectedItem"
        @close="closeModal"
        @save="saveDestination"
      />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'
import { ListPlus, Trash2, Eye, SquarePen, Ellipsis, Settings } from 'lucide-vue-next'
import Layout from '@/layouts/dashboard.vue'
import AsideModal from '@/components/dashboard/asideModal.vue'
import { Tour, Item } from '@/types'
import MenuDropdown from '@/components/menuDropdown.vue'
import { MenuItem } from '@headlessui/vue'

defineProps<{
  tours: Tour[]
}>()

const isModalOpen = ref(false)
const modalMode = ref('view')
const selectedItem = ref<Item | null>(null)
const headers = ref(['Name', 'Description', 'Price', 'Destinations', 'Actions'])

const openModal = (mode: string, tour: Tour | null = null) => {
  modalMode.value = mode
  if (tour) {
    selectedItem.value = {
      title: tour.name,
      fields: {
        id: tour.id,
        name: tour.name,
        description: tour.description,
        price: tour.price,
      },
    }
  } else {
    selectedItem.value = {
      title: 'New Tour',
      fields: {
        name: '',
        description: '',
        price: 0,
      },
    }
  }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedItem.value = null
}

const saveDestination = ({ mode, data }: { data: any; mode: any }) => {
  mode === 'edit' ? router.post('/dashboard/tours', data) : false
  closeModal()
}

const deleteDestination = (id: any) => {
  console.log('Deleting tour with id:', id)
}
</script>
