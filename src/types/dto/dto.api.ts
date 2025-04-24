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
  pvp: number
  pve_kill: number
  pve_friendly_kills: number
  pve_kills: number
  pve_death: number
  pve: number
  playtime: number
  playtime_h: number
  playtime_m: number
  favoritPVP: string
  favoritPVE: string
  pve_wins: number
  pvp_wins: number
  pvp_lost: number
  pve_lost: number
  pve_all: number
  pvp_all: number
  pvpwl: number
  full_response: string
}
