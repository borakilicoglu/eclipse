<template>
  <footer class="w-full bg-slate-100">
    <div class="border-b border-slate-200">
      <div class="container mx-auto">
        <div class="flex py-12 gap-4">
          <div v-for="n in 6" :key="n" class="flex flex-col w-1/6 items-start space-y-2">
            <ul class="space-y-2">
              <li
                v-for="n in 3"
                :key="n"
                class="font-thin cursor-pointer hover:underline flex flex-col items-start"
              >
                <strong>Angaston</strong>
                <span>Holiday rentals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="flex py-12 border-b border-slate-2 00 gap-4">
        <div class="flex flex-col w-1/3 items-start space-y-2">
          <h3>Support</h3>
          <ul class="space-y-2">
            <li v-for="n in 6" :key="n" class="font-thin cursor-pointer hover:underline">
              Anti-discrimination
            </li>
          </ul>
        </div>
        <div class="flex flex-col w-1/3 items-start space-y-2">
          <h3>Tours</h3>
          <ul class="space-y-2">
            <li v-for="n in 6" :key="n" class="font-thin cursor-pointer hover:underline">
              Report neighbourhood concern
            </li>
          </ul>
        </div>
        <div class="flex flex-col w-1/3 items-start space-y-2">
          <h3>Agencies</h3>
          <ul class="space-y-2">
            <li v-for="n in 7" :key="n" class="font-thin cursor-pointer hover:underline">
              Tour responsibly
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="flex items-center justify-between h-[70px]">
        <div class="flex gap-x-2 items-center font-thin">
          <span>© 2024 Eclipse, Inc.</span>
          <span>·</span>
          <span>Privacy</span>
          <span>·</span>
          <span>Terms</span>
          <span>·</span>
          <span>Sitemap</span>
        </div>
        <div class="flex gap-x-4 items-center">
          <span>English</span>
          <span>$ USD</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
