export interface Klan {
  clan_id?: number
  clan_name?: string
}

export interface ApiResponse extends Klan {
  user_id: string
  nickname: string
  experience: number
  rank_id: number
  kill: number
  friendly_kills: number
  kills: number
  death: number
  pvp: number | boolean | string
  pve_kill: number
  pve_friendly_kills: number
  pve_kills: number
  pve_death: number
  pve: number | boolean | string
  playtime: number
  playtime_h: number
  playtime_m: number
  favoritPVP: string | boolean
  favoritPVE: string | boolean
  pve_wins: number | boolean
  pvp_wins: number | boolean
  pvp_lost: number | boolean
  pve_lost: number | boolean
  pve_all: number | boolean
  pvp_all: number | boolean
  pvpwl: number
  full_response: string
}
