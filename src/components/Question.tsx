import React, { FC } from 'react'
import { MBTIQuestionType } from '../lib/type'

interface QuestionProp {
  qustionData: MBTIQuestionType
}

const Question: FC<QuestionProp> = ({ qustionData }) => {
  const { id, questionText } = qustionData
  return (
    <>
      <h3 className="text-3xl font-bold text-center py-2">Question {id}</h3>
      <p className="text-center py-1">{questionText}</p>
    </>
  )
}

export default Question
