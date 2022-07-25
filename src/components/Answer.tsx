import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { MBTIAnswerType, AnswerType, IndicatorType } from '../lib/type'

interface AnswerProp {
  answer: MBTIAnswerType
  selectAnswer: (selectedItem: AnswerType, qustionType: IndicatorType) => void
}

const Answer: FC<AnswerProp> = ({ answer, selectAnswer }) => {
  const navigate = useNavigate()
  const { answerList } = answer

  const handleSelect = (selectedItem: AnswerType): void => {
    selectAnswer(selectedItem, answer.qustionType)
    navigate(answer.questionNextCode ? `/step?page=${answer.questionNextCode}` : '/result')
    // navigate('/result')
  }

  return (
    <div>
      {answerList.map((item) => (
        <div className="py-2" key={item.code}>
          <button type="button" className="block w-full" onClick={() => handleSelect(item)}>
            <span className="block px-4 py-4 bg-white rounded-xl">{item.text}</span>
          </button>
        </div>
      ))}
    </div>
  )
}

export default Answer
