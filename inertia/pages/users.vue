<template>
  <Layout>
    <div class="container mx-auto flex flex-col gap-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-2xl font-semibold">Users</h3>
        <button
          class="bg-white py-2 px-4 border border-slate-950 font-semibold hover:bg-slate-950 hover:text-white flex items-center justify-between gap-x-2"
          @click="openModal('create')"
        >
          <Plus class="w-5" />
          Add User
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white table-auto">
          <thead>
            <tr class="bg-slate-900 text-slate-300 capitalize text-sm divide-x divide-slate-700">
              <th
                v-for="(header, index) in headers"
                :key="header"
                :class="{
                  'py-3 px-6 text-left': true,
                  'text-right': index === headers.length - 1,
                }"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="text-slate-950 text-sm">
            <tr
              v-for="user in users"
              :key="user.id"
              class="border-b border-slate-200 even:bg-white odd:bg-slate-100 divide-x divide-slate-200"
            >
              <td class="py-3 px-6 text-left">{{ user.username }}</td>
              <td class="py-3 px-6 text-left">{{ user.email }}</td>
              <td class="py-3 px-6 text-left">
                {{ dayjs(user.updatedAt).format('MMMM D, YYYY h:mm A') }}
              </td>
              <td class="py-3 px-6 text-left">
                {{ dayjs(user.createdAt).format('MMMM D, YYYY h:mm A') }}
              </td>
              <td class="py-3 px-6 text-left capitalize">{{ user.role }}</td>
              <td class="py-3 px-6 flex gap-x-2 justify-end">
                <button @click.stop="openModal('view', user)" class="w-6 flex justify-center">
                  <Eye
                    stroke-width="1.5"
                    class="w-5 text-slate-950 hover:text-slate-950 hover:w-6 transition-all duration-100"
                  />
                </button>
                <button @click.stop="openModal('edit', user)" class="w-6 flex justify-center">
                  <FileSliders
                    stroke-width="1.5"
                    class="w-5 text-slate-950 hover:text-slate-950 hover:w-6 transition-all duration-100"
                  />
                </button>
                <button @click.stop="deleteUser(user.id)" class="w-6 flex justify-center">
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
        :roles="roles"
        :isOpen="isModalOpen"
        :mode="modalMode"
        :editableFields="['email', 'username', 'role', 'password']"
        :item="selectedItem"
        @close="closeModal"
        @save="saveUser"
      />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'
import dayjs from 'dayjs'
import { Plus, Trash2, Eye, FileSliders } from 'lucide-vue-next'
import Layout from '@/layouts/dashboard.vue'
import AsideModal from '@/components/dashboard/asideModal.vue'
import { Item, Role, User } from '@/types'

defineProps<{
  users: User[]
}>()

const isModalOpen = ref(false)
const modalMode = ref('view')
const selectedItem = ref<Item | null>(null)
const headers = ref(['Username', 'Email', 'Updated', 'Created', 'Role', 'Actions'])
const roles: Role[] = ['admin', 'agency', 'branch', 'guest']

const openModal = (mode: string, user: User | null = null) => {
  modalMode.value = mode
  if (user) {
    selectedItem.value = {
      title: user.username,
      fields: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
    }
  } else {
    selectedItem.value = {
      title: 'New User',
      fields: {
        email: '',
        username: '',
        role: '',
        password: '',
      },
    }
  }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedItem.value = null
}

const saveUser = ({ mode, data }: { data: any; mode: any }) => {
  mode === 'edit' ? router.put('/dashboard/users', data) : router.post('/dashboard/users', data)
  closeModal()
}

const deleteUser = (id: any) => {
  console.log('Deleting user with id:', id)
}
</script>
