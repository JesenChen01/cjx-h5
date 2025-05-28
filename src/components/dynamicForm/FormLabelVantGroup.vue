<script setup lang="ts">
import { showDialog } from 'vant'

interface Props {
  label?: string
  required?: boolean
  description?: string
  fontStyle?: object
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  required: false,
  description: '',
  fontStyle: () => ({}),
})
const { label, required, description, fontStyle } = props
function openModal(e) {
  e.stopPropagation()
  if (!description)
    return
  showDialog({
    message: description,
    messageAlign: 'left',
    confirmButtonText: '确定',
  })
}
</script>

<template>
  <van-cell-group>
    <template #title>
      <div
        class="flex items-center relative"
        :class="{ 'van-cell--required': required }"
        :style="{ ...fontStyle }"
        @click="openModal"
      >
        <span v-html="label" />
        <van-icon
          v-if="description"
          class="ml-1"
          name="info-o"
          color="#1989fa"
          size="1.2rem"
        />
      </div>
    </template>
    <slot />
  </van-cell-group>
</template>

<style></style>
