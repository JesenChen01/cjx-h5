<script setup lang="ts">
defineOptions({
  name: 'KeepAlive',
})

const value = ref(1)
</script>

<template>
  <p>{{ $t('keepAlive.label') }}</p>
  <van-stepper v-model="value" class="mt-10" />
</template>
