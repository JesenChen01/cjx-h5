<script setup lang="ts">
import { showDialog } from 'vant'

interface Props {
  label?: string
  description?: string
  required?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  description: '',
  required: false,
})
const { label, description, required } = props
function openModal(e) {
  e.stopPropagation()
  if (!description)
    return
  showDialog({
    title: label,
    message: description,
    messageAlign: 'left',
    confirmButtonText: '我知道了',
  })
}
</script>

<template>
  <van-cell :class="{ 'van-cell--required': required }" value="" v-bind="$attrs">
    <template #tilte>
      <div class="flex items-center">
        {{ label }}
        <van-icon v-if="description" class="ml-1" name="info-o" size="3rem" @click="openModal" />
      </div>
    </template>
    <template #right-icon>
      <slot />
    </template>
  </van-cell>
</template>

<style></style>
