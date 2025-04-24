<script setup lang="ts">
import { useRouter } from 'vue-router'
import { CommonIconWrapper } from '@/components/common'
import { IconArrowLeft, IconSettings } from '@/components/icon'
import { CommonSkeletonWrapper } from '@/components/common'
import { injectPlayerStats } from '@/store/store.provide'
import { computed } from 'vue'

type Props = {
  link?: string
}

const props = defineProps<Props>()

const router = useRouter()

const { nickName, clanName, isLoading, shouldShowClan } = injectPlayerStats()

const onBack = () => {
  if (props.link) return router.push(props.link)

  if (window.history.length > 0) {
    router.back()
  } else {
    router.push('/')
  }
}

const openSettings = () => {}
</script>

<template>
  <div
    class="w-full flex sticky top-0 z-10 items-start justify-between py-16 pt-24 mb-1 border-b border-border/80"
  >
    <button @click="onBack">
      <CommonIconWrapper>
        <IconArrowLeft />
      </CommonIconWrapper>
    </button>
    <div class="text-center">
      <h2 class="font-medium text-26 leading-26 text-dark">
        {{ nickName }}
      </h2>
      <CommonSkeletonWrapper v-if="isLoading">
        <div class="mt-2 w-full h-14 rounded-full bg-white/60 dark:bg-dark/80"></div>
      </CommonSkeletonWrapper>
      <p v-else-if="shouldShowClan" class="mt-2 text-color text-14 leading-16 opacity-40">
        {{ clanName }}
      </p>
    </div>
    <button @click="openSettings">
      <CommonIconWrapper>
        <IconSettings />
      </CommonIconWrapper>
    </button>
  </div>
</template>
