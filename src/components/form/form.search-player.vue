<script setup lang="ts">
import { CommonIconWrapper, CommonInput } from '@/components/common'
import { IconSearch } from '@/components/icon'
import { usePlayerSettings } from '@/lib/hooks/hook.player'
import { onMounted, shallowRef } from 'vue'
import { useRouter } from 'vue-router'

const { isSaveName, setName, getName } = usePlayerSettings()

const name = shallowRef('')

const router = useRouter()

const onSubmit = () => {
  const trimmedName = name.value.trim()
  if (!trimmedName) {
    console.warn('Имя не введено')
    return
  }

  if (isSaveName.value) {
    setName(trimmedName)
  }

  router.push(`/stats/${trimmedName}`)
}

onMounted(() => {
  if (isSaveName.value) {
    name.value = getName.value
    return
  }
})
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
