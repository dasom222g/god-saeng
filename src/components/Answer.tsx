import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { MBTIAnswerType, AnswerType } from '../lib/type'
import { resultState } from '../state/dataState'

interface AnswerProp {
  answer: MBTIAnswerType
  selectAnswer: (selectedItem: AnswerType) => void
}

const Answer: FC<AnswerProp> = ({ answer, selectAnswer }) => {
  const navigate = useNavigate()
  const { answerList } = answer

  const setResult = useSetRecoilState(resultState)

  const handleSelect = (selectedItem: AnswerType): void => {
    selectAnswer(selectedItem)
    setResult('item')
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
