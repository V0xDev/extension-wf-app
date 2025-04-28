import { ApiResponse } from '@/lib/api/types/dto/dto.api'
import axios from 'axios'

export function getStatistic(name: string) {
  return axios.get<ApiResponse>('/user/stat', {
    params: { name },
  })
}
