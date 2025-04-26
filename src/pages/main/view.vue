<script setup lang="ts">
import { CommonIconWrapper } from '@/components/common'
import { FormSearchPlayer } from '@/components/form'
import { IconLogo } from '@/components/icon'
</script>

<template>
  <div class="flex flex-col items-center gap-5 pt-45">
    <CommonIconWrapper width="200px" height="140px">
      <IconLogo />
    </CommonIconWrapper>
    <h1 class="text-primary text-20 leading-30 pt-20">Добро пожаловать</h1>
    <p class="text-primary text-14 leading-24">Введите ник персонажа, чтобы начать</p>
  </div>
  <FormSearchPlayer />
</template>

<style lang="scss" scoped></style>
