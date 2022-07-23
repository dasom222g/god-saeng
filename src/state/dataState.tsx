import { atom } from 'recoil'
import { ResultType } from '../lib/type'

export const resultState = atom<ResultType[]>({
  key: 'resultState',
  default: [],
})

export const resultMbtiState = atom<string>({
  key: 'resultMbtiState',
  default: 'ENTJ',
})

