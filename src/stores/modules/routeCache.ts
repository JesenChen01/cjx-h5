import { defineStore } from 'pinia'
import type { EnhancedRouteLocation } from '@/router/types'

const useRouteCacheStore = defineStore('route-cache', () => {
  const routeCaches = ref<string[]>([])

  const addRoute = (route: EnhancedRouteLocation) => {
    if (routeCaches.value.includes(route.name as string))
      return

    if (route?.meta?.keepAlive)
      routeCaches.value.push(route.name as string)
  }

  return {
    routeCaches,
    addRoute,
  }
})

export default useRouteCacheStore
