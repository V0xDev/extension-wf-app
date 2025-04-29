<script setup lang="ts">
import { ApiResponse } from '@/lib/api/types/dto/dto.api'
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
  const pveClassName = typeof favoritPVE !== 'boolean' ? className[favoritPVE] : 'Нет данных'
  const pvpClassName = typeof favoritPVP !== 'boolean' ? className[favoritPVP] : 'Нет данных'

  return { pveClassName, pvpClassName }
})
</script>

<template>
  <ul class="flex justify-evenly">
    <li class="text-secondary text-14 leading-14">
      PvP: <span class="text-primary font-bold">{{ getClassName.pvpClassName }}</span>
    </li>
    <li class="text-secondary text-14 leading-14">
      PvE: <span class="text-primary font-bold">{{ getClassName.pveClassName }}</span>
    </li>
  </ul>
</template>
