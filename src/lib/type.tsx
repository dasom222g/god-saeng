export const enum Wallet {
  META_MASK = 'META_MASK',
  WALLET_CONNECT = 'WALLET_CONNECT',
}

export type WalletType = keyof typeof Wallet // META_MASK | WALLET_CONNECT

export interface WalletClassType {
  id: number
  type: WalletType
  title: string
}

const indicators = {
  ei: 'EI',
  ns: 'NS',
  ft: 'TF',
  jp: 'PJ',
} as const

const categorys = {
  e: 'E',
  i: 'I',
  n: 'N',
  s: 'S',
  t: 'T',
  f: 'F',
  p: 'P',
  j: 'J',
} as const

const toastSeverity = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
} as const

export type ToastSeverityType = typeof toastSeverity[keyof typeof toastSeverity] // "error" | "warning" | "info" | "success"

export type ErrorType = {
  isOpen: boolean
  severity: ToastSeverityType
  message: string
  link?: string
}

type IndicatorType = typeof indicators[keyof typeof indicators] // 'EI' | 'NS' | 'TF' | 'PJ'

export type CategoryType = typeof categorys[keyof typeof categorys] // 'E' | 'I' | 'N' | 'S' ...

export interface AnswerType {
  code: number
  type: CategoryType
  text: string
}

export interface MBTIQuestionType {
  id: number
  code: number
  nextCode: number
  qustionType: IndicatorType
  firstType: CategoryType
  lastType: CategoryType
  questionText: string
}
export interface MBTIAnswerType {
  id: number
  questionCode: number
  questionNextCode: number
  qustionType: IndicatorType
  answerList: AnswerType[]
}

type PartialRecord<K extends string | number | symbol, T> = { [P in K]?: T }

// export interface ResultType {
//   qustionType: IndicatorType
//   questionCodes: number[]
//   resultValue: PartialRecord<CategoryType, number>
// }
export interface ResultType {
  qustionType: IndicatorType
  firstType: CategoryType
  lastType: CategoryType
  resultValue: PartialRecord<CategoryType, number>
}
