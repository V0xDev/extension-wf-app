<script setup lang="ts">
import { CommonSelectCheckbox } from '@/components/common'
import { usePlayerSettings } from '@/lib/hooks/hook.player'
import { onMounted, shallowRef } from 'vue'

const isPlayerSave = shallowRef(true)

const { isSaveName, toggleSaveNick } = usePlayerSettings()

onMounted(() => (isPlayerSave.value = isSaveName.value))
</script>

<template>
  <CommonSelectCheckbox
    v-model="isPlayerSave"
    title="Запомнить игрока"
    @on-change="toggleSaveNick"
  />
</template>
