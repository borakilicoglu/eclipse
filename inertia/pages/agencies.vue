<template>
  <Layout>
    <div class="container mx-auto flex flex-col gap-y-4">
      <div class="flex items-center justify-between gap">
        <h3 class="text-2xl font-semibold">Agencies</h3>
        <button
          class="bg-sky-500 font-semibold h-12 px-4 rounded-lg text-white hover:bg-sky-600 hover:text-white flex items-center justify-between gap-x-2 h-12 px-6"
          @click="openModal('create')"
        >
          <ListPlus class="w-5" />
          Add Agency
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white table-auto">
          <thead>
            <tr class="bg-slate-900 text-slate-300 capitalize text-sm divide-x divide-slate-700">
              <th
                v-for="(header, index) in headers"
                :key="header"
                :class="{ 'py-3 px-6 text-left': true, 'text-right': index === headers.length - 1 }"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="text-slate-950 text-sm">
            <tr
              v-for="agency in agencies"
              :key="agency.id"
              class="border-b border-slate-200 even:bg-white odd:bg-slate-100 divide-x divide-slate-200"
            >
              <td class="py-3 px-6 text-left">{{ agency.name }}</td>
              <td class="py-3 px-6 text-left">{{ agency.location }}</td>
              <td class="py-3 px-6 text-left">
                {{ agency?.services?.join(', ') }}
              </td>
              <td class="py-3 px-6 text-left">{{ agency.phone }}</td>
              <td class="py-3 px-6 text-left">{{ agency.email }}</td>
              <td class="py-3 px-6 text-left">{{ agency?.user?.username }}</td>
              <td class="py-3 px-6 flex gap-x-2 justify-end">
                <button @click.stop="openModal('view', agency)" class="w-6 flex justify-center">
                  <Eye
                    stroke-width="1.5"
                    class="w-5 text-slate-950 hover:text-slate-950 hover:w-6 transition-all duration-100"
                  />
                </button>
                <button @click.stop="openModal('edit', agency)" class="w-6 flex justify-center">
                  <FileSliders
                    stroke-width="1.5"
                    class="w-5 text-slate-950 hover:text-slate-950 hover:w-6 transition-all duration-100"
                  />
                </button>
                <button @click.stop="deleteAgency(agency.id)" class="w-6 flex justify-center">
                  <Trash2
                    stroke-width="1.5"
                    class="w-5 text-slate-950 hover:text-slate-950 hover:w-6 transition-all duration-100"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <AsideModal
        :isOpen="isModalOpen"
        :mode="modalMode"
        :editableFields="['name', 'location', 'services', 'phone', 'email']"
        :item="selectedItem"
        @close="closeModal"
        @save="saveAgency"
      />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'
import { ListPlus, Trash2, Eye, FileSliders } from 'lucide-vue-next'
import Layout from '@/layouts/dashboard.vue'
import AsideModal from '@/components/dashboard/asideModal.vue'
import { Agency, Item } from '@/types'

defineProps<{
  agencies: Agency[]
}>()

// Modal state management
const isModalOpen = ref(false)
const modalMode = ref('view')
const selectedItem = ref<Item | null>(null)
const headers = ref([
  'Name',
  'Location',
  'Services',
  'Contact Number',
  'Contact Email',
  'Manager',
  'Actions',
])

const openModal = (mode: string, agency: Agency | null = null) => {
  modalMode.value = mode
  if (agency) {
    selectedItem.value = {
      title: agency.name,
      fields: {
        id: agency.id,
        name: agency.name,
        email: agency.email,
        phone: agency.phone,
        location: agency.location,
        services: agency.services?.join(', '),
      },
    }
  } else {
    selectedItem.value = {
      title: 'New Agency',
      fields: {
        name: '',
        email: '',
        phone: '',
        location: '',
        services: '',
      },
    }
  }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedItem.value = null
}

const saveAgency = ({ mode, data }: { data: any; mode: any }) => {
  mode === 'edit' ? router.post('/dashboard/agencies', data) : false
  closeModal()
}

const deleteAgency = (id: any) => {
  console.log('Deleting agency with id:', id)
}
</script>
