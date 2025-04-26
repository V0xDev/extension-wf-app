<script setup lang="ts">
import { CommonElementStatWrapper } from '@/components/common'
import { PartMetric } from '@/components/composed/part'
import { ApiResponse } from '@/api/types/dto/dto.api'

defineProps<ApiResponse>()
</script>

<template>
  <CommonElementStatWrapper title="Сыграно игр">
    <div class="flex flex-wrap gap-5">
      <PartMetric title="PvP" :value="pvp_all" />
      <PartMetric title="PvE" :value="pve_all" />
    </div>
  </CommonElementStatWrapper>
</template>
