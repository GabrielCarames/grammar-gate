import { StateCreator } from "zustand"

export type ValueSlice = {
  value: string
  setValue: (newValue: string) => void
  clearValue: () => void
}

export const createValueSlice: StateCreator<ValueSlice> = set => ({
  value: "",
  setValue: newValue => set({ value: newValue }),
  clearValue: () => set({ value: "" })
})
