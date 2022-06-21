import { MBTIAnswerType, MBTIQuestionType } from '../lib/type'

export const data = {
  count: 1,
}

export const mbtiQuestion: MBTIQuestionType[] = [
  {
    id: 1,
    code: 1,
    nextCode: 2,
    qustionType: 'EI',
    questionText: '사람들과 교류할 때 나는',
  },
  {
    id: 2,
    code: 2,
    nextCode: 3,
    qustionType: 'TF',
    questionText: '난 이 사람의 천재성이 더 탐난다. 나에게 하나가 주어진다면 그의 재능을 택하겠다.',
  },
  {
    id: 3,
    code: 3,
    nextCode: 4,
    qustionType: 'PJ',
    questionText: '내가 바라는 미래의 내 모습은 이렇다. ',
  },
]

export const mbtiAnswer: MBTIAnswerType[] = [
  {
    id: 1,
    questionCode: 1,
    questionNextCode: 2,
    qustionType: 'EI',
    answerList: [
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
  {
    id: 2,
    questionCode: 2,
    questionNextCode: 3,
    qustionType: 'TF',
    answerList: [
      {
        code: 0,
        type: 'F',
        text: '세익스피어',
      },
      {
        code: 1,
        type: 'T',
        text: '아인슈타인',
      },
    ],
  },
  {
    id: 3,
    questionCode: 3,
    questionNextCode: 4,
    qustionType: 'PJ',
    answerList: [
      {
        code: 0,
        type: 'J',
        text: '해당 시점에 내가 할 수 있는, 목표에 맞는 하나의 실행 단계를 수행 중이다.',
      },
      {
        code: 1,
        type: 'P',
        text: '유망하거나 안정적인 길이 아니더라도, 또다른 미래를 꿈꿀 수 있다는 선택권에 행복한 고민 중이다.',
      },
    ],
  },
]
