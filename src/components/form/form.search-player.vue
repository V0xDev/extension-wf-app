<script setup lang="ts">
import { CommonIconWrapper, CommonInput } from '@/components/common'
import { IconSearch } from '@/components/icon'
import { shallowRef } from 'vue'
import { useRouter } from 'vue-router'

const name = shallowRef('')

const router = useRouter()

const onSubmit = () => {
  const trimmedName = name.value.trim()
  if (!trimmedName) {
    console.warn('Имя не введено')
    return
  }

  router.push(`/stats/${trimmedName}`)
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="relative w-[260px] flex items-center">
    <CommonInput v-model="name" class="w-full pr-40" placeholder="Введите ник..." />
    <button type="submit" class="absolute right-10">
      <CommonIconWrapper class="text-icon">
        <IconSearch />
      </CommonIconWrapper>
    </button>
  </form>
</template>
