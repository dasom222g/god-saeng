import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { MBTIAnswerType } from '../lib/type'
import { resultState } from '../state/dataState'

interface AnswerProp {
  answer: MBTIAnswerType
}

const Answer: FC<AnswerProp> = ({ answer }) => {
  const navigate = useNavigate()
  const { answerList } = answer

  const setResult = useSetRecoilState(resultState)

  const handleSelect = (): void => {
    setResult('abc')
    navigate(answer.questionNextCode ? `/step?page=${answer.questionNextCode}` : '/result')
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
