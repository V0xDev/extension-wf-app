import { useLocalStorage } from '@/lib/hooks/hook.local-storage'
import { providePlayerStats } from '@/lib/provide/provide.player'

export enum SAVE_PLAYER_KEYS {
  IS_SAVE = '$is-player-save',
  NAME = '$player-name',
}

export function usePlayerSettings() {
  const { nickName } = providePlayerStats()

  const { getValue: isSaveName, setValue: isSaveNameSet } = useLocalStorage(
    SAVE_PLAYER_KEYS.IS_SAVE,
  )
  const { setValue: setName, getValue: getName } = useLocalStorage(SAVE_PLAYER_KEYS.NAME)

  const toggleSaveNick = (value: boolean) => {
    isSaveNameSet(value)

    if (value === true) {
      setName(nickName.value)
    }
  }

  return { toggleSaveNick, isSaveName, isSaveNameSet, setName, getName }
}
