<script setup lang="ts">
import { CommonElementStatWrapper } from '@/components/common'
import { PartMetric } from '@/components/composed/part'
import { ApiResponse } from '@/types/dto/dto.api'

defineProps<ApiResponse>()
</script>

<template>
  <CommonElementStatWrapper title="Ключевые метрики PvP">
    <div>
      <div class="flex">
        <PartMetric title="Убито" :value="kills" />
        <PartMetric title="Смертей" :value="death" />
        <PartMetric title="К/Д" :value="pvp" />
      </div>
      <PartMetric class="mt-18" title="Общее количество часов" :value="playtime_h" />
    </div>
  </CommonElementStatWrapper>
</template>
