<script setup lang="ts">
import { CommonElementStatWrapper } from '@/components/common'
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
  <CommonElementStatWrapper title="Любимые классы">
    <ul class="flex justify-evenly">
      <li class="text-secondary text-14 leading-14">
        PvP: <span class="text-primary">{{ getClassName.pvpClassName }}</span>
      </li>
      <li class="text-secondary text-14 leading-14">
        PvE: <span class="text-primary">{{ getClassName.pveClassName }}</span>
      </li>
    </ul>
  </CommonElementStatWrapper>
</template>
