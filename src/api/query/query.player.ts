import { getStatistic } from '@/api/route/route.player'
import { useQuery } from '@tanstack/vue-query'
import { ComputedRef } from 'vue'

export enum PlayerQueryKeys {
  GetStatisticQuery = 'get-statistic-query',
}

export function getStatisticQuery(name: ComputedRef<string>) {
  return useQuery({
    queryKey: [PlayerQueryKeys.GetStatisticQuery, name.value],
    queryFn: async () => {
      const response = await getStatistic(name.value)
      return response.data
    },
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
