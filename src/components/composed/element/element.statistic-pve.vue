<script setup lang="ts">
import { CommonElementWrapper } from '@/components/common'
import { PartMetric } from '@/components/composed/part'
import { ApiResponse } from '@/types/dto/dto.api'

defineProps<ApiResponse>()
</script>

<template>
  <CommonElementWrapper title="Статистика PvE">
    <div class="flex flex-wrap gap-5">
      <PartMetric title="Победы" :value="pve_wins" />
      <PartMetric title="Поражения" :value="pve_lost" />
    </div>
  </CommonElementWrapper>
</template>
