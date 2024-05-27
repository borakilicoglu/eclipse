<template>
  <Layout>
    <div class="grid grid-cols-5 w-full h-full container mx-auto gap-x-6">
      <div v-for="tour in tours" :key="tour.id" class="w-full flex flex-col gap-y-1">
        <img class="rounded-lg object-cover aspect-square" :src="tour.image" :alt="tour.title" />
        <p class="font-semibold">{{ tour.title }}</p>
        <p>{{ tour.description }}</p>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/default.vue'

const tours = [
  {
    id: 1,
    title: 'Tour 1',
    description: 'How about a perfect balloon tour?',
    image:
      'https://images.unsplash.com/photo-1558443497-c081e537b6f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcGFkb2NpYXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    title: 'Tour 2',
    description: 'How about a perfect balloon tour?',
    image:
      'https://images.unsplash.com/photo-1589472501747-1660aeed4d80?q=80&w=2795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Tour 3',
    description: 'How about a perfect balloon tour?',
    image:
      'https://images.unsplash.com/photo-1529699074188-d1fb8244c4ca?q=80&w=3468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Tour 4',
    description: 'How about a perfect balloon tour?',
    image:
      'https://images.unsplash.com/photo-1534001265532-393289eb8ed3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFyY2Vsb25hfGVufDB8fDB8fHww',
  },
  {
    id: 5,
    title: 'Tour 5',
    description: 'How about a perfect balloon tour?',
    image:
      'https://images.unsplash.com/photo-1631152282084-b8f1b380ccab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcHBhZG9jaWF8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 6,
    title: 'Tour 1',
    description: 'How about a perfect balloon tour?',
    image:
      'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 7,
    title: 'Tour 2',
    description: 'How about a perfect balloon tour?',
    image:
      'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww',
  },
  {
    id: 8,
    title: 'Tour 3',
    description: 'How about a perfect balloon tour?',
    image:
      'https://plus.unsplash.com/premium_photo-1676139860466-8b8f71c0a737?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 9,
    title: 'Tour 4',
    description: 'How about a perfect balloon tour?',
    image:
      'https://images.unsplash.com/photo-1554357475-accb8a88a330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 10,
    title: 'Tour 5',
    description: 'How about a perfect balloon tour?',
    image:
      'https://images.unsplash.com/photo-1631152282084-b8f1b380ccab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcHBhZG9jaWF8ZW58MHx8MHx8fDA%3D',
  },
]
</script>
