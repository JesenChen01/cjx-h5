<script setup lang="ts">
import { cloneDeep } from 'lodash-es'
import { getStoreElements } from './config'

const visibleElements = reactive(cloneDeep(getStoreElements))

initData()
function initData() {
  visibleElements.forEach((item) => {
    item.value = null
  })
}
function onSubmit() {
  console.log(visibleElements)
}
</script>

<template>
  <van-form>
    <FormItemVant
      v-for="(item) in visibleElements"
      :key="item.key"
      v-model="item.value"
      :required="item.required_fill_in"
      :description="item.description"
      :label="item.label"
      :type="item.component_name"
      :data-props="item.serve_data_props"
    />
  </van-form>
  <van-button
    type="primary"
    @click="onSubmit"
  >
    提交
  </van-button>
</template>

<style scoped>

</style>
