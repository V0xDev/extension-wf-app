<script setup lang="ts">
import { PartMetric } from '@/components/composed/part'
import { ApiResponse } from '@/lib/api/types/dto/dto.api'

defineProps<ApiResponse>()
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <PartMetric title="Победы" :value="pve_wins" />
    <PartMetric title="Поражения" :value="pve_lost" />
  </div>
</template>
