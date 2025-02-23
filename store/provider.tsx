'use client'

import { createContext, useContext, useRef } from 'react'
import { type StoreApi, createStore } from 'zustand'

interface ApiModeState {
  useRealApi: boolean
  toggleApiMode: () => void
}

const createApiModeStore = () => createStore<ApiModeState>((set) => ({
  useRealApi: false,
  toggleApiMode: () => set((state) => ({ useRealApi: !state.useRealApi }))
}))

const ApiModeContext = createContext<StoreApi<ApiModeState> | null>(null)

export function ApiModeProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<StoreApi<ApiModeState> | null>(null)
  if (!storeRef.current) {
    storeRef.current = createApiModeStore()
  }

  return (
    <ApiModeContext.Provider value={storeRef.current}>
      {children}
    </ApiModeContext.Provider>
  )
}

export const useApiMode = () => {
  const store = useContext(ApiModeContext)
  if (!store) throw new Error('Missing ApiModeProvider')
  return store
} 