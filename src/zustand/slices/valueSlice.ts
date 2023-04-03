import { StateCreator } from "zustand"

export type ValueSlice = {
  value: string
  setValue: (newValue: string) => void
  clearValue: () => void
}

const initialState = { value: "" }

export const createValueSlice: StateCreator<ValueSlice> = set => ({
  ...initialState,
  setValue: newValue => set({ value: newValue }),
  clearValue: () => set(initialState)
})
