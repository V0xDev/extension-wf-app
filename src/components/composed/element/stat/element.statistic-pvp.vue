<script setup lang="ts">
import { CommonElementStatWrapper } from '@/components/common'
import { PartMetric } from '@/components/composed/part'
import { ApiResponse } from '@/types/dto/dto.api'

defineProps<ApiResponse>()
</script>

<template>
  <CommonElementStatWrapper title="Статистика PvP">
    <div class="flex flex-wrap gap-5">
      <PartMetric title="Победы" :value="pvp_wins" />
      <PartMetric title="Поражения" :value="pvp_lost" />
    </div>
  </CommonElementStatWrapper>
</template>
