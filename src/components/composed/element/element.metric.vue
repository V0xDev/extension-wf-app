<script setup lang="ts">
import { CommonElementWrapper } from '@/components/common'
import { PartMetric } from '@/components/composed/part'
import { ApiResponse } from '@/types/dto/dto.api'

defineProps<ApiResponse>()
</script>

<template>
  <CommonElementWrapper title="Ключевые метрики PvP">
    <div class="flex flex-wrap gap-5">
      <PartMetric title="Убито" :value="kills" />
      <PartMetric title="Смертей" :value="death" />
      <PartMetric title="К/Д" :value="pvp" />
      <PartMetric title="Общее количество часов" :value="playtime_h" />
    </div>
  </CommonElementWrapper>
</template>
