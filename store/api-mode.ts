import { create } from 'zustand'

type State = {
  useRealApi: boolean
  toggleApiMode: () => void
}

export const useApiMode = create<State>()((set) => ({
  useRealApi: false,
  toggleApiMode: () => set((state) => ({ useRealApi: !state.useRealApi }))
})) 