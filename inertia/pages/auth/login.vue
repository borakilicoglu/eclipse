<template>
  <Layout>
    <div class="w-[30rem] bg-slate-100 p-8 flex flex-col gap-y-4 rounded-lg">
      <h3 class="text-5xl font-bold text-center mb-2 italic">ECLIPSE</h3>
      <h3 class="text-3xl font-semibold text-center">Welcome Back</h3>
      <form @submit.prevent="form.post('/login')" class="flex flex-col gap-y-4">
        <InputGroup
          type="email"
          name="email"
          v-model="form.email"
          placeholder="Email address"
          :errors="form.errors.email"
        />
        <InputGroup
          type="password"
          name="password"
          v-model="form.password"
          placeholder="Password"
          :errors="form.errors.password"
        />
        <Button label="Login" class="mt-4 rounded-lg font-semibold" />
      </form>
      <div class="flex items-center justify-center gap-x-2 mt-4">
        <span class="inline-flex">Not remeber yet? </span>
        <Link
          class="text-slate-950 hover:text-slate-950 items-center justify-center font-semibold"
          href="/signin"
        >
          Create Account
        </Link>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { useForm, Link } from '@inertiajs/vue3'
import type { User } from '@/types'
import Layout from '@/layouts/default.vue'
import InputGroup from '@/components/form/input_group.vue'
import Button from '@/components/form/button.vue'

const form = useForm<User>({
  email: '',
  username: '',
  password: '',
})
</script>
