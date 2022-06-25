import { atom } from 'recoil'
import { ErrorType } from '../lib/type'

export const resultState = atom<string>({
  key: 'resultState',
  default: 'Hello world',
})
