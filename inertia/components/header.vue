<template>
  <header
    :class="[
      'bg-white flex flex-col items-center justify-between w-full sticky',
      isDashboard ? 'px-8' : 'px-0',
    ]"
    v-if="isAuth"
  >
    <!-- ---------- -->
    <!-- HEADER TOP -->
    <!-- ---------- -->
    <div class="min-h-20 flex items-center justify-between container mx-auto">
      <div class="w-1/3">
        <Link
          class="text-slate-950 font-[800] text-4xl italic flex items-center justify-start"
          href="/"
          v-if="!isDashboard"
        >
          ECLIPSE
        </Link>

        <Link
          v-if="isDashboard"
          class="text-slate-900 font-medium flex items-center gap-x-2 py-2 px-3"
          href="/"
        >
          <ArrowLeft class="w-5" />
          Back to site
        </Link>
      </div>

      <nav class="flex gap-4 w-1/3 justify-center text-lg" v-if="!isDashboard">
        <a
          v-for="(link, index) in navLinks"
          :key="index"
          :href="link.href"
          :class="[
            'px-4 h-12 flex items-center rounded-full',
            link.active ? 'font-semibold' : 'text-slate-500 hover:text-slate-950',
            'hover:bg-slate-200',
          ]"
        >
          {{ link.text }}
        </a>
      </nav>

      <div class="flex items-center gap-x-4 w-1/3 justify-end">
        <button class="bg-slate-200 h-10 w-10 flex items-center justify-center rounded-full">
          <Bell class="w-5 text-slate-700" />
        </button>
        <button class="bg-slate-200 h-10 w-10 flex items-center justify-center rounded-full">
          <MessageCircleMore class="w-5 text-slate-700" />
        </button>

        <Menu as="div" class="relative inline-block text-left ml-2" v-if="isAuth">
          <MenuButton class="flex items-center justify-between gap-x-2 h-20">
            <div class="flex flex-col items-end text-slate-950">
              <span>
                {{ formattedUsername }}
              </span>
              <span class="text-xs capitalize"> {{ user.role }} Manager </span>
            </div>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOERpOr7SgX6Q55GS8Yprg2kNd4VBcx1AkHRkEzhsEw&s"
              class="rounded-full w-12 h-12 border-4 border-slate-200 p-0.5"
              alt=""
            />
          </MenuButton>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 mt-2 origin-top-right bg-white shadow-2xl focus:outline-none w-[220px] rounded-lg"
            >
              <div
                class="flex flex-col divide-y divide-slate-200 justify-center rounded-lg overflow-hidden"
              >
                <Link
                  class="text-slate-950 h-12 px-6 flex items-center gap-x-2 hover:bg-slate-900 hover:text-white"
                  href="/dashboard/profile"
                >
                  <CircleUserRound class="w-5" />
                  Profile
                </Link>
                <Link
                  class="text-slate-950 h-12 px-6 flex items-center gap-x-2 hover:bg-slate-900 hover:text-white"
                  href="/dashboard"
                  v-if="!isDashboard"
                >
                  <PanelsLeftBottom class="w-5" />
                  Dashboard
                </Link>
                <Link
                  class="text-slate-950 h-12 px-6 flex items-center gap-x-2 hover:bg-slate-900 hover:text-white"
                  href="/logout"
                >
                  <Settings class="w-5" />
                  Account Settings
                </Link>
                <Link
                  class="text-slate-950 h-12 px-6 flex items-center gap-x-2 hover:bg-slate-900 hover:text-white"
                  href="/logout"
                >
                  <LogOut class="w-5" />
                  Logout
                </Link>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
    <!-- -------------- -->
    <!-- HEADER FILTERS -->
    <!-- -------------- -->
    <div class="flex items-center pb-6" v-if="!isDashboard">
      <div class="min-w-[900px] h-[66px] border rounded-full flex shadow-lg items-center relative">
        <div
          v-for="(button, index) in filterButtons"
          :key="index"
          class="flex w-3/12 h-full items-center"
        >
          <button
            class="group rounded-full flex w-full items-start flex-col justify-center pl-6 hover:bg-slate-200 h-full pointer"
          >
            <span
              :class="[
                'flex flex-col w-full items-start group-hover:border-none',
                index < filterButtons.length - 1 ? 'border-r border-slate-200' : '',
              ]"
            >
              <span class="text-xs">{{ button.title }}</span>
              <span class="text-sm">{{ button.subtitle }}</span>
            </span>
          </button>
        </div>
        <button
          class="absolute rounded-full bg-slate-900 w-[48px] h-[48px] ml-auto right-0 mr-[10px] items-center flex justify-center"
        >
          <Search class="w-5 text-slate-100" />
        </button>
      </div>
    </div>
    <!-- -------------- -->
    <!-- HEADER BOTTOM -->
    <!-- -------------- -->
    <div class="border-t border-slate-200 w-full" v-if="!isDashboard">
      <template class="flex items-center justify-between container mx-auto overflow-hidden gap-6">
        <div
          class="py-6 flex flex-col items-center justify-center text-slate-900"
          v-for="n in 50"
          :key="n"
        >
          <span>
            <Tent :size="34" :stroke-width="1.2" />
          </span>
          <span class="text-xs border-b-2 py-2 border-slate-900">Efsaneler</span>
        </div>
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'
import type { InertiaProps } from '@/types'
import {
  Search,
  Settings,
  ArrowLeft,
  LogOut,
  CircleUserRound,
  MessageCircleMore,
  Bell,
  PanelsLeftBottom,
  Tent,
} from 'lucide-vue-next'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

const page = usePage<InertiaProps>()
const isAuth = computed(() => page.props.isAuth)
const user = page.props.user

const navLinks = ref([
  { text: 'Destinations', href: '/', active: true },
  { text: 'Otels', href: '/', active: false },
  { text: 'Tours', href: '/', active: false },
  { text: 'Trips', href: '/', active: false },
  { text: 'Popular', href: '/', active: false },
])

const filterButtons = ref([
  { title: 'Destination', subtitle: 'Search for destinations' },
  { title: 'Check In', subtitle: 'Select date' },
  { title: 'Check Out', subtitle: 'Select date' },
  { title: 'Guests', subtitle: 'Add guest' },
])

const formattedUsername = computed(() => {
  return user?.username ? user.username.split(/(?=[A-Z])/).join(' ') : ''
})

const isDashboard = computed(() => {
  const url = page.url // Get the current URL from Inertia
  return url.includes('dashboard')
})
</script>

<style scoped></style>
