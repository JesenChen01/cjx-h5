<script setup lang="ts">
import type { PickerColumn } from 'vant'
import { languageColumns, locale } from '@/utils/i18n'

const { t } = useI18n()

const checked = computed({
  get: () => isDark.value,
  set: () => toggleDark(),
})

const menuItems = computed(() => ([
  { title: t('menus.mockGuide'), route: 'Mock' },
  { title: t('menus.echartsDemo'), route: 'Charts' },
  { title: t('menus.unocssExample'), route: 'Unocss' },
  { title: t('menus.persistPiniaState'), route: 'Counter' },
  { title: t('menus.keepAlive'), route: 'keep-alive' },
  { title: t('menus.scrollCache'), route: 'scroll-cache' },
  { title: t('menus.404Demo'), route: 'unknown' },
  { title: t('menus.jsx'), route: 'Jsx' },
]))

const showLanguagePicker = ref(false)
const languageValues = ref<Array<string>>([locale.value])
const language = computed(() => languageColumns.find(l => l.value === locale.value).text)

function onLanguageConfirm(event: { selectedOptions: PickerColumn }) {
  locale.value = event.selectedOptions[0].value as string
  showLanguagePicker.value = false
}
</script>

<template>
  <van-cell-group :title="$t('menus.basicSettings')" :border="false" :inset="true">
    <van-cell center :title="$t('menus.darkMode')">
      <template #right-icon>
        <van-switch
          v-model="checked"
          size="20px"
          aria-label="on/off Dark Mode"
        />
      </template>
    </van-cell>

    <van-cell
      is-link
      :title="$t('menus.language')"
      :value="language"
      @click="showLanguagePicker = true"
    />
  </van-cell-group>

  <van-cell-group :title="$t('menus.exampleComponents')" :border="false" :inset="true">
    <template v-for="item in menuItems" :key="item.route">
      <van-cell :title="item.title" :to="item.route" is-link />
    </template>
  </van-cell-group>

  <van-popup v-model:show="showLanguagePicker" position="bottom">
    <van-picker
      v-model="languageValues"
      :columns="languageColumns"
      @confirm="onLanguageConfirm"
      @cancel="showLanguagePicker = false"
    />
  </van-popup>
</template>
