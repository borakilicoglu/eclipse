<template>
  <Error />
  <main class="flex h-screen overflow-hidden">
    <aside class="flex flex-col min-w-[20rem] bg-slate-900">
      <div class="flex flex-col">
        <div class="flex w-full min-h-20 bg-slate-950 items-center px-8">
          <Link class="text-white font-bold text-xl w-full" href="/">
            Eclipse
            <span class="text-slate-500">Admin V.1</span>
          </Link>
        </div>
        <ul class="flex flex-col p-8">
          <li v-for="link in links" :key="link.href">
            <Link
              :class="[
                'group font-semibold flex items-center gap-x-2 py-4 hover:text-white',
                isActiveLink(link.href) ? 'text-white' : 'text-slate-500',
              ]"
              :href="link.href"
            >
              <component
                :is="link.icon"
                :class="[
                  'transition-all duration-100',
                  isActiveLink(link.href) ? 'w-6' : 'w-5 group-hover:w-6',
                ]"
              />
              {{ link.text }}
            </Link>
          </li>
        </ul>
      </div>
      <span class="px-8 py-8 mt-auto text-slate-500 font-semibold border-t border-slate-950">
        Eclipse 2024 <strong>©</strong>
      </span>
    </aside>
    <div class="flex h-full flex-col w-full">
      <Header />
      <div class="p-8 bg-slate-200 h-full overflow-scroll">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'
import { Home, Handshake, Bus, UsersRound, PlaneTakeoff, Monitor } from 'lucide-vue-next'
import Header from '@/components/header.vue'
import Error from '@/components/message.vue'

const page = usePage()

const isActiveLink = (href: string) => {
  return page.url === href
}

const links = ref([
  { text: 'Agencies', href: '/dashboard/agencies', icon: Home },
  { text: 'Branches', href: '/dashboard/branches', icon: Handshake },
  { text: 'Destinations', href: '/dashboard/destinations', icon: PlaneTakeoff },
  { text: 'Tours', href: '/dashboard/tours', icon: Bus },
  { text: 'Users', href: '/dashboard/users', icon: UsersRound },
  { text: 'Website', href: '/dashboard/website', icon: Monitor },
])
</script>
