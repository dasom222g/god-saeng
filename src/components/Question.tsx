import React, { FC } from 'react'
import { MBTIQuestionType } from '../lib/type'

interface QuestionProp {
  qustionData: MBTIQuestionType
}

const Question: FC<QuestionProp> = ({ qustionData }) => {
  const { id, questionText } = qustionData
  return (
    <>
      <h3>Question {id}</h3>
      <p>{questionText}</p>
    </>
  )
}

export default Question
