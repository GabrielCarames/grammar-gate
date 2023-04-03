import { StateCreator } from "zustand"

export type LoadingSlice = {
  loading: boolean
  setLoading: (newLoadingState: boolean) => void
}

export const createLoadingSlice: StateCreator<LoadingSlice> = set => ({
  loading: false,
  setLoading: newLoadingState => set({ loading: newLoadingState })
})
