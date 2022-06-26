import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { MBTIAnswerType } from '../lib/type'

interface AnswerProp {
  answer: MBTIAnswerType
}

const Answer: FC<AnswerProp> = ({ answer }) => {
  const navigate = useNavigate()
  const { answerList } = answer

  const handleSelect = (): void => {
    navigate(`/step?page=${answer.questionNextCode}`)
    // navigate('/result')
  }

  return (
    <div>
      {answerList.map((item) => (
        <div className="py-2" key={item.code}>
          <button type="button" className="block w-full" onClick={handleSelect}>
            <span className="block px-4 py-4 bg-white rounded-xl">{item.text}</span>
          </button>
        </div>
      ))}
    </div>
  )
}

export default Answer
