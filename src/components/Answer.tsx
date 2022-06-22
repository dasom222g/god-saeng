import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { MBTIAnswerType } from '../lib/type'

interface AnswerProp {
  answer: MBTIAnswerType
}

const Answer: FC<AnswerProp> = ({ answer }) => {
  const { answerList } = answer
  return (
    <div>
      {answerList.map((item) => (
        <div className="py-2" key={item.code}>
          <Link to={`/step?page=${answer.questionNextCode}`}>
            <span className="block px-4 py-4 bg-white rounded-xl">{item.text}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Answer
