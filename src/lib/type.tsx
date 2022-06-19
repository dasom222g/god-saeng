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
  ft: 'FT',
  jp: 'JP',
} as const

const categorys = {
  e: 'E',
  i: 'I',
  n: 'N',
  s: 'S',
  f: 'F',
  t: 'T',
  j: 'J',
  p: 'P',
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

type IndicatorType = typeof indicators[keyof typeof indicators] // 'EI' | 'NS' | 'FT' | 'JP'

type CategoryType = typeof categorys[keyof typeof categorys] // 'E' | 'I' | 'N' | 'S' ...

interface AnswerType {
  code: Number
  type: CategoryType
  text: string
}

export interface MBTIQuestionType {
  id: number
  code: number
  questionCode: number
  qustionType: IndicatorType
  questionText: string
  answer: AnswerType[]
}
