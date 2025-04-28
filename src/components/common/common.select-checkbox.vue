<script setup lang="ts">
type Props = {
  title: string
}

defineProps<Props>()

const model = defineModel({ default: false, required: true })

type Emits = {
  (e: 'onChange', val: boolean): void
}

const emits = defineEmits<Emits>()

const onSelect = (e: Event) => {
  const target = e.target as HTMLInputElement
  emits('onChange', target.checked)
}
</script>

<template>
  <div class="flex items-center gap-5 select-none">
    <!-- prettier-ignore-attribute -->
    <input
      id="default-checkbox"
      type="checkbox"
      v-model="model"
      @input="onSelect"
      class="peer appearance-none w-18 h-18 rounded-2 bg-bg
        checked:bg-tertiary relative border-2 border-secondary
        checked:border-secondary before:content-[''] before:absolute before:top-2
        before:left-4 before:w-6 before:h-8 before:border-r-2 before:border-b-2
        before:border-primary before:rotate-45 before:scale-0 checked:before:scale-100 transition-all
      "
    />
    <label for="default-checkbox" class="ms-2 text-16 leading-16 font-medium text-primary">
      {{ title }}
    </label>
  </div>
</template>
