import { getStatisticQuery } from '@/lib/api/query/query.player'
import { computed, inject, provide } from 'vue'
import { useRoute } from 'vue-router'

const PLAYER_STATS_STORE_KEY = '$player-stats-store-key'

type PlayerStatsProvided = ReturnType<typeof providePlayerStats>

export function providePlayerStats() {
  const route = useRoute()
  const nickName = computed(() => route.params.name as string)

  const hasClan = computed(() => Boolean(data.value?.clan_name))
  const clanName = computed(() => `(Клан: ${data.value?.clan_name})`)

  const shouldShowClan = computed(() => !isError.value && hasClan.value)

  const { data, isError, isLoading } = getStatisticQuery(nickName)

  const toProvide = {
    clanName,
    shouldShowClan,
    nickName,
    data,
    isError,
    isLoading,
  }

  provide(PLAYER_STATS_STORE_KEY, toProvide)
  return toProvide
}

export function injectPlayerStats() {
  const store = inject<PlayerStatsProvided | undefined>(PLAYER_STATS_STORE_KEY)

  if (!store) {
    console.log('[provide/inject] providePlayerStats not provided!!')
    return
  }

  return store
}
