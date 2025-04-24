<script setup lang="ts">
import { CommonElementWrapper } from '@/components/common'
import { ApiResponse } from '@/types/dto/dto.api'
import { computed } from 'vue'

const { favoritPVE, favoritPVP } = defineProps<ApiResponse>()

const className: Record<string, string> = {
  Rifleman: 'Штурмовик',
  Medic: 'Медик',
  Sniper: 'Снайпер',
  Engineer: 'Инженер',
  SED: 'Сед',
}

const getClassName = computed(() => {
  const pveClassName = typeof favoritPVE !== 'boolean' ? className[favoritPVE] : 'нет данных'
  const pvpClassName = typeof favoritPVP !== 'boolean' ? className[favoritPVP] : 'нет данных'

  return { pveClassName, pvpClassName }
})
</script>

<template>
  <CommonElementWrapper>
    <h2 class="font-medium text-16 leading-16 text-dark">Любимые классы</h2>
    <ul class="flex gap-15">
      <li class="text-16 leading-16">
        PvP: <span class="text-dark opacity-50">{{ getClassName.pvpClassName }}</span>
      </li>
      <li class="text-16 leading-16">
        PvE: <span class="text-dark opacity-50">{{ getClassName.pveClassName }}</span>
      </li>
    </ul>
  </CommonElementWrapper>
</template>
