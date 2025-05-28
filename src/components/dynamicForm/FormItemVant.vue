<script setup lang="ts">
interface Props {
  type?: string
  dataProps?: Record<string, any>
}
const props = withDefaults(defineProps<Props>(), {
  type: 'VanField',
  dataProps: () => ({}),
})
const emit = defineEmits(['input'])

const { type, dataProps } = props
const formatAttrs = computed(() => {
  const attrs = useAttrs()
  const tempAttrs = { ...attrs }
  // 添加额外的校验规则
  // dataProps 接收是否必填的属性
  if (dataProps.required) {
    tempAttrs.rules = [
      {
        required: true,
        message: '请输入',
      },
    ]
  }
  else {
    tempAttrs.rules = []
  }
  return {
    ...tempAttrs,
  }
})

// 纯组件，没有带van-field/van-cell/van-cell-group的组件
const pureComponents = reactive(['RadioGroup', 'CheckboxGroup'])

// 组件映射
const componentMap = reactive({
  VanField: 'van-field',
  VantSwitchCell: 'van-switch-cell',
})

const elementRef = useTemplateRef('elementRef')

function isPureComponent(component: string) {
  return pureComponents.includes(component)
}

function handleInput(...rest) {
  emit('input', rest)
}

// eslint-disable-next-line unused-imports/no-unused-vars
function validate() {
  if (elementRef.value) {
    return elementRef.value?.validate() ?? false
  }
  return true
}
</script>

<template>
  <FormLabelVant v-if="isPureComponent(componentMap[type])" v-bind="formatAttrs">
    <component
      :is="componentMap[type]"
      ref="elementRef"
      v-bind="formatAttrs"
      :data-props="dataProps"
      @input="handleInput"
    />
  </FormLabelVant>
  <component
    :is="componentMap[type]"
    v-else
    ref="elementRef"
    :style="{ color: dataProps.disabled ? '#c8c9cc' : '#323233' }"
    v-bind="formatAttrs"
    :data-props="dataProps"
    @input="handleInput"
  />
</template>

<style></style>
