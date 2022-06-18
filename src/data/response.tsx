import { MBTIQuestionType } from '../lib/type'

export const data = {
  count: 1,
}

export const mbtiQuestion: MBTIQuestionType[] = [
  {
    id: 1,
    code: 1,
    questionCode: 1,
    qustionType: 'EI',
    questionText: '사람들과 교류할 때 나는',
    answer: [
      {
        code: 0,
        type: 'E',
        text: '사람들이 함께 모여 왁자지껄한 자리도 신난다. 사람이 많을수록 분위기가 더 화기애애한 건 사실이다.',
      },
      {
        code: 1,
        type: 'I',
        text: '일대일 대화를 더 선호한다. 여럿이 모여도 파장 때 내 옆에 남는 건 결국 한 사람이다.',
      },
    ],
  },
]
