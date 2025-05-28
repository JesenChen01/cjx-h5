<script setup lang="ts">
interface Props {
  type?: string
}
const props = withDefaults(defineProps<Props>(), {
  type: '',
})
const { type } = props
const componentMap = reactive({
  cell: 'FormLabelVantCell',
  group: 'FormLabelVantGroup',
  field: 'FormLabelVantField',
})
</script>

<template>
  <component v-bind="$attrs" :is="componentMap[type]">
    <slot />
  </component>
</template>

<style></style>
