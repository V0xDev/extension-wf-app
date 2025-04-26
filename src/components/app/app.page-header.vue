<script setup lang="ts">
import { useRouter } from 'vue-router'
import { CommonIconWrapper } from '@/components/common'
import { IconArrowLeft, IconSettings } from '@/components/icon'
import { CommonSkeletonWrapper } from '@/components/common'
import { injectPlayerStats } from '@/provide/provide.player'
import { computed } from 'vue'
import { injectModal } from '@/provide/provide.modal'

type Props = {
  link?: string
}

const props = defineProps<Props>()

const router = useRouter()

const { nickName, clanName, isLoading, shouldShowClan } = injectPlayerStats()

const { show } = injectModal()

const onBack = () => {
  if (props.link) return router.push(props.link)

  if (window.history.length > 0) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<template>
  <div class="w-full px-14 py-16 pt-24 flex sticky top-0 z-10 items-start justify-between shadow-b">
    <button @click="onBack">
      <CommonIconWrapper class="text-icon">
        <IconArrowLeft />
      </CommonIconWrapper>
    </button>
    <div class="text-center">
      <h2 class="text-primary font-medium text-26 leading-26 text-dark">
        {{ nickName }}
      </h2>
      <CommonSkeletonWrapper v-if="isLoading">
        <div class="mt-2 w-full h-16 rounded-full bg-secondary dark:bg-dark/80"></div>
      </CommonSkeletonWrapper>
      <p v-else-if="shouldShowClan" class="text-secondary mt-2 text-color text-14 leading-16">
        {{ clanName }}
      </p>
    </div>
    <button @click="show">
      <CommonIconWrapper class="text-icon">
        <IconSettings />
      </CommonIconWrapper>
    </button>
  </div>
</template>
