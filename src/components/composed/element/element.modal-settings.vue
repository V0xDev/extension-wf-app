<script setup lang="ts">
import { CommonIconWrapper, CommonModalContainer, CommonSelect } from '@/components/common'
import { SelectOption } from '@/components/common/common.select.vue'
import { IconClose } from '@/components/icon'
import { injectModal } from '@/provide/store.provide-modal'
import { shallowRef } from 'vue'

const { close } = injectModal()

const options: SelectOption<string>[] = [
  {
    key: 1,
    raw: 'system',
    display: 'Системная',
  },
  {
    key: 2,
    raw: 'white',
    display: 'Белая',
  },
  {
    key: 3,
    raw: 'black',
    display: 'Темная',
  },
]

const select = shallowRef<SelectOption<string>>(options[0])
</script>

<template>
  <CommonModalContainer>
    <div
      @click.stop
      class="w-[300px] h-[400px] flex flex-col bg-bg rounded-8 border-2 border-border-opacity"
    >
      <div class="flex sticky top-0 justify-between items-center p-18 shadow-b">
        <p class="text-primary text-18 leading-17">Настройки</p>
        <button @click="close">
          <CommonIconWrapper class="text-icon">
            <IconClose />
          </CommonIconWrapper>
        </button>
      </div>
      <div class="settings p-18 flex-1 flex flex-col overflow-y-auto">
        <div class="settings flex flex-col gap-10">
          <h2 class="font-medium text-16 leading-16 text-primary">Системные</h2>
          <div class="flex items-center gap-5">
            <p class="font-medium text-16 mt-6 leading-16 text-secondary">Тема:</p>
            <CommonSelect v-model="select" :options="options" />
          </div>
        </div>
      </div>
    </div>
  </CommonModalContainer>
</template>
