import { inject, provide, shallowRef } from 'vue'

const MODAL_STORE_KEY = '$modal-store-key'

type ModalProvided = ReturnType<typeof provideModal>

export function provideModal() {
  const state = shallowRef(false)

  const show = () => (state.value = true)
  const close = () => (state.value = false)

  const toProvide = {
    state,
    show,
    close,
  }

  provide(MODAL_STORE_KEY, toProvide)
  return toProvide
}

export function injectModal() {
  const store = inject<ModalProvided | undefined>(MODAL_STORE_KEY)

  if (!store) {
    console.log('[provide/inject] modal not provided!!')
    return
  }

  return store
}
