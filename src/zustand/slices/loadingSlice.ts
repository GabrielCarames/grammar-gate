import { StateCreator } from "zustand"

export type LoadingSlice = {
  loading: boolean
  setLoading: (newLoadingState: boolean) => void
}

const initialState = { loading: false }

export const createLoadingSlice: StateCreator<LoadingSlice> = set => ({
  ...initialState,
  setLoading: newLoadingState => set({ loading: newLoadingState })
})
