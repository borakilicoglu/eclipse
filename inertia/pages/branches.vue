<template>
  <Layout>
    <div class="container mx-auto flex flex-col gap-y-4">
      <div class="flex items-center justify-between gap">
        <h3 class="text-2xl font-semibold">Branches</h3>
        <button
          class="bg-sky-500 font-semibold h-12 px-4 rounded-lg text-white hover:bg-sky-600 hover:text-white flex items-center justify-between gap-x-2 h-12 px-6"
          @click="openModal('create')"
        >
          <ListPlus class="w-5" />
          Add Branch
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
              v-for="branch in branches"
              :key="branch.id"
              class="border-b border-slate-200 even:bg-white odd:bg-slate-100 divide-x divide-slate-200"
            >
              <td class="py-3 px-6 text-left">{{ branch.name }}</td>
              <td class="py-3 px-6 text-left">{{ branch.location }}</td>
              <td class="py-3 px-6 text-left">{{ branch.address }}</td>
              <td class="py-3 px-6 text-left">{{ branch.phone }}</td>
              <td class="py-3 px-6 text-left">{{ branch.email }}</td>
              <td class="py-3 px-6 text-left">{{ branch?.user?.username }}</td>
              <td class="py-3 w-16 flex items-center justify-center">
                <MenuDropdown :icon="Ellipsis">
                  <MenuItem>
                    <button
                      @click.stop="openModal('view', branch)"
                      class="flex justify-start items-center gap-x-2 px-4 py-3 w-full hover:bg-slate-100 text-slate-600 hover:text-slate-950"
                    >
                      <Eye stroke-width="1.5" class="w-5" />
                      <span>Show</span>
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      @click.stop="openModal('edit', branch)"
                      class="flex justify-start items-center gap-x-2 px-4 py-3 w-full hover:bg-slate-100 text-slate-600 hover:text-slate-950"
                    >
                      <SquarePen stroke-width="1.5" class="w-5" />
                      <span>Edit</span>
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      @click.stop="deleteBranch(branch.id)"
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
        :editableFields="['name', 'location', 'phone', 'email']"
        :item="selectedItem"
        @close="closeModal"
        @save="saveBranch"
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
import { Branch, Item } from '@/types'
import MenuDropdown from '@/components/menuDropdown.vue'
import { MenuItem } from '@headlessui/vue'

defineProps<{
  branches: Branch[]
}>()

const isModalOpen = ref(false)
const modalMode = ref('view')
const selectedItem = ref<Item | null>(null)
const headers = ref([
  'Name',
  'Location',
  'Address',
  'Contact Number',
  'Contact Email',
  'Manager',
  'Actions',
])

const openModal = (mode: string, branch: Branch | null = null) => {
  modalMode.value = mode
  if (branch) {
    selectedItem.value = {
      title: branch.name,
      fields: {
        id: branch.id,
        name: branch.name,
        email: branch.email,
        phone: branch.phone,
        location: branch.location,
      },
    }
  } else {
    selectedItem.value = {
      title: 'New Branch',
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

const saveBranch = ({ mode, data }: { data: any; mode: any }) => {
  mode === 'edit' ? router.post('/dashboard/branches', data) : false
  closeModal()
}

const deleteBranch = (id: any) => {
  console.log('Deleting agency with id:', id)
}
</script>
