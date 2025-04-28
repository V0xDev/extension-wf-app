import { SAVE_PLAYER_KEYS } from '@/lib/hooks/hook.player'
import { Router } from 'vue-router'

function getPlayerData() {
  const isSaveName = localStorage.getItem(SAVE_PLAYER_KEYS.IS_SAVE)
  const playerName = localStorage.getItem(SAVE_PLAYER_KEYS.NAME)
  return {
    isSave: JSON.parse(isSaveName),
    name: JSON.parse(playerName),
  }
}

export function setupPlayerRedirect(router: Router) {
  router.isReady().then(() => {
    const { isSave, name } = getPlayerData()

    const ref = document.referrer
    const host = window.location.host
    const external = !ref || !ref.includes(host)

    if (isSave && external) {
      router.push(`/stats/${name}`)
    }
  })
}
