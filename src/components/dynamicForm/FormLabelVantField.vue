<script setup lang="ts">
interface Props {
  label?: string
  required?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  required: false,
})
const { label, required } = props
</script>

<template>
  <van-field :label="label" :required="required" v-bind="$attrs">
    <template #input>
      <slot />
    </template>
  </van-field>
</template>

<style></style>
