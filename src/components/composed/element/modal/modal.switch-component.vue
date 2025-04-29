<script setup lang="ts">
import { CommonSwitch } from '@/components/common'
import { ComponentStatistic } from '@/lib/provide/provide.elements'
import { onMounted, shallowRef } from 'vue'

type Props = {
  component: ComponentStatistic
}

const { component } = defineProps<Props>()

const isActive = shallowRef(false)

onMounted(() => (isActive.value = component.visible))
</script>

<template>
  <CommonSwitch
    v-model="isActive"
    :title="component.name"
    @on-change="(v) => (component.visible = v)"
  />
</template>
