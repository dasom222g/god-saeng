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
    firstType: 'E',
    lastType: 'I',
    questionText: '일할때 나의 능률은?',
  },
  {
    id: 2,
    code: 2,
    nextCode: 3,
    qustionType: 'TF',
    firstType: 'T',
    lastType: 'F',
    questionText: '난 이 사람의 천재성이 더 탐난다. 나에게 하나가 주어진다면 그의 재능을 택하겠다.',
  },
  {
    id: 3,
    code: 3,
    nextCode: 4,
    qustionType: 'PJ',
    firstType: 'P',
    lastType: 'J',
    questionText: '내가 바라는 미래의 내 모습은 이렇다.',
  },
  {
    id: 4,
    code: 4,
    nextCode: 5,
    qustionType: 'NS',
    firstType: 'N',
    lastType: 'S',
    questionText: '둘 중 나는 성향은?',
  },
  {
    id: 5,
    code: 5,
    nextCode: 6,
    qustionType: 'EI',
    firstType: 'E',
    lastType: 'I',
    questionText: '나에게 더 자주 일어나는 일은?',
  },
  {
    id: 6,
    code: 6,
    nextCode: 7,
    qustionType: 'TF',
    firstType: 'T',
    lastType: 'F',
    questionText: '갈등 및 분쟁을 해결하고자 할 때, 나는 주로',
  },
  {
    id: 7,
    code: 7,
    nextCode: 8,
    qustionType: 'PJ',
    firstType: 'P',
    lastType: 'J',
    questionText: '생전 처음 해 보는 새로운 메뉴를 요리할 때 나의 모습은?',
  },
  {
    id: 8,
    code: 8,
    nextCode: 9,
    qustionType: 'NS',
    firstType: 'N',
    lastType: 'S',
    questionText: '누군가가 자신이 생각해 낸 아이디어라며 이를 소개할 때, 나는',
  },
  {
    id: 9,
    code: 9,
    nextCode: 10,
    qustionType: 'TF',
    firstType: 'T',
    lastType: 'F',
    questionText: '나는 둘 중 이렇게 생각한다.',
  },
  {
    id: 10,
    code: 10,
    nextCode: 11,
    qustionType: 'PJ',
    firstType: 'P',
    lastType: 'J',
    questionText: '새로운 사람들을 만났을 때,',
  },
  {
    id: 11,
    code: 11,
    nextCode: 12,
    qustionType: 'NS',
    firstType: 'N',
    lastType: 'S',
    questionText: '나는 상대방과 대화할 때,',
  },
  {
    id: 12,
    code: 12,
    nextCode: 0,
    qustionType: 'EI',
    firstType: 'E',
    lastType: 'I',
    questionText: '월요일 아침부터 회의가 잡혔다.ㅠㅠ 호의 할 때, 당신의 모습은?',
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
        text: '신속 정확하게!',
      },
      {
        code: 1,
        type: 'I',
        text: '충분한 여유를 가지고~',
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
  {
    id: 4,
    questionCode: 4,
    questionNextCode: 5,
    qustionType: 'NS',
    answerList: [
      {
        code: 0,
        type: 'N',
        text: '심오하고 이해하기 어려운 것들을 이해할 수 있다.',
      },
      {
        code: 1,
        type: 'S',
        text: '내가 다른 사람들에게 다가가면, 사람들은 쉽게 또는 나보다 더 많이 내게 마음을 연다.',
      },
    ],
  },
  {
    id: 5,
    questionCode: 5,
    questionNextCode: 6,
    qustionType: 'EI',
    answerList: [
      {
        code: 0,
        type: 'I',
        text: '어떤 사람은 뭘 물어봐 놓고도 내가 잠시 할 말을 생각하는 그새를 못 참고 또다른 걸 묻거나 자기 얘길 시작한다.',
      },
      {
        code: 1,
        type: 'E',
        text: '뭔가를 물어보면, 바로바로 대답을 안 해서 답답한 사람들이 있다.         ',
      },
    ],
  },
  {
    id: 6,
    questionCode: 6,
    questionNextCode: 7,
    qustionType: 'TF',
    answerList: [
      {
        code: 0,
        type: 'T',
        text: '정당하고 합리적인 기준이나 원칙에 따른다.',
      },
      {
        code: 1,
        type: 'F',
        text: '개인의 상황에 대한 이해와 서로 간의 믿음을 바탕으로, 훈훈하게 그리고 인간적으로 접근한다.         ',
      },
    ],
  },
  {
    id: 7,
    questionCode: 7,
    questionNextCode: 8,
    qustionType: 'PJ',
    answerList: [
      {
        code: 0,
        type: 'J',
        text: '레시피를 거의 그대로 따라 한다. 제시된 시간과 순서를 가능한 한 정확히 지키려고 한다.',
      },
      {
        code: 1,
        type: 'P',
        text: '상황에 따라 단계를 뛰어넘기도 하고 순서를 뒤바꾸기도 한다. 요리에 대한 기본적인 상식과 감이 레시피보다 더 중요할 수 있다고 생각한다.         ',
      },
    ],
  },
  {
    id: 8,
    questionCode: 8,
    questionNextCode: 9,
    qustionType: 'NS',
    answerList: [
      {
        code: 0,
        type: 'N',
        text: '독창적이고 기발한 아이디어인지를 가장 먼저 본다. 평소 나의 생각을 한 단계 발전시키는 데 도움이 될 만한 얘기라면 더 흥미롭다.',
      },
      {
        code: 1,
        type: 'S',
        text: '아이디어의 실현 가능성을 가장 먼저 본다. 그렇지 않은 아이디어를 들으면 \'여기가 미국인 줄 아냐?\'고 되묻고 싶어진다.',
      },
    ],
  },
  {
    id: 9,
    questionCode: 9,
    questionNextCode: 10,
    qustionType: 'TF',
    answerList: [
      {
        code: 0,
        type: 'T',
        text: '감정은 비이성적이고 시비를 가릴 수 없어서, 진실 또는 진리를 왜곡하곤 한다. 일을 그르치는 건 감정이 앞서는 사람들 때문인 경우가 많다.',
      },
      {
        code: 1,
        type: 'F',
        text: '논리적인 분석, 이성적인 사리 판단도 물론 중요하지만, 때와 장소를 불문하고 논리만 내세우는 사람들을 보면 안타깝고 답답하다.',
      },
    ],
  },
  {
    id: 10,
    questionCode: 10,
    questionNextCode: 11,
    qustionType: 'PJ',
    answerList: [
      {
        code: 0,
        type: 'P',
        text: '사람들에 대한 사전 정보나 주어진 주제 없이, 일상적인 이야기로 대화를 시작하는 편이 더 자연스럽다. 대화 도중 화젯거리는 계속해서 생겨난다.',
      },
      {
        code: 1,
        type: 'J',
        text: '대화에 앞서 사람들에 대한 정보가 주어지거나 사람들의 입장을 미리 파악하고 있으면, 더 생산적인 또는 더 즐거운 대화가 될 것이다.',
      },
    ],
  },
  {
    id: 11,
    questionCode: 11,
    questionNextCode: 12,
    qustionType: 'NS',
    answerList: [
      {
        code: 0,
        type: 'S',
        text: '사람들의 표정, 눈빛, 말투, 억양 등을 보고 들으면서 그 사람이 말하고자 하는 바를 알아챌 수 있다.',
      },
      {
        code: 1,
        type: 'N',
        text: '그가 사용한 단어의 숨은 의미가 뭔지, 그가 제시한 유일한 사례가 결론적으로 무엇을 상징하는지 짐작할 수 있다.',
      },
    ],
  },
  {
    id: 12,
    questionCode: 12,
    questionNextCode: 0,
    qustionType: 'EI',
    answerList: [
      {
        code: 0,
        type: 'I',
        text: '내가 어떤 내용을 설명하거나 설득해야 하는지, 사전에 파악하고 준비할 시간이 필요하다.',
      },
      {
        code: 1,
        type: 'E',
        text: '나는 말하면서 동시에 생각할 수 있다. 사실 무언가에 대해 이야기하는 와중에 더 좋은 생각이 번뜩이기도 한다.',
      },
    ],
  },
]
