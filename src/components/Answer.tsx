import React, { FC } from 'react'
import { MBTIAnswerType } from '../lib/type'

interface AnswerProp {
  answer: MBTIAnswerType
}
// `/step?page=${answer.questionNextCode}`

const Answer: FC<AnswerProp> = ({ answer }) => {
  const { answerList } = answer
  return (
    <div>
      {answerList.map((item) => (
        <div className="py-2" key={item.code}>
          <button type="button">
            <span className="block px-4 py-4 bg-white rounded-xl">{item.text}</span>
          </button>
        </div>
      ))}
    </div>
  )
}

export default Answer
