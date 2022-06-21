import React, { FC } from 'react'
import { MBTIAnswerType } from '../lib/type'

interface AnswerProp {
  answer: MBTIAnswerType
}

const Answer: FC<AnswerProp> = ({ answer }) => {
  const { answerList } = answer
  return (
    <>
      {answerList.map((item) => (
        <div className="py-4" key={item.code}>
          <span className="block px-4 py-4 bg-white rounded-xl">{item.text}</span>
        </div>
      ))}
    </>
  )
}

export default Answer
