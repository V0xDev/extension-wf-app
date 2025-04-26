<script setup lang="ts">
type Props = {
  title: string
}

defineProps<Props>()

const model = defineModel({ default: false, required: true })
</script>

<template>
  <div class="flex items-center gap-5 select-none">
    <!-- prettier-ignore-attribute -->
    <input
      id="default-checkbox"
      type="checkbox"
      :value="model"
      class="peer appearance-none w-18 h-18 rounded-2 bg-bg
        checked:bg-tertiary relative border-2 border-secondary
        checked:border-secondary before:content-[''] before:absolute before:top-2
        before:left-4 before:w-6 before:h-8 before:border-r-2 before:border-b-2
        before:border-white before:rotate-45 before:scale-0 checked:before:scale-100 transition-all
      "
    />
    <label for="default-checkbox" class="ms-2 text-16 leading-16 font-medium text-primary">
      {{ title }}
    </label>
  </div>
</template>
