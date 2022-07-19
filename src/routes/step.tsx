import React, { FC, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Answer from '../components/Answer'
import Progress from '../components/Progress'
import Question from '../components/Question'
import { mbtiAnswer, mbtiQuestion } from '../data/response'
import { AnswerType } from '../lib/type'

const useQuery = (): URLSearchParams => {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

const Step: FC = () => {
  const page = useQuery().get('page')
  const question = mbtiQuestion[Number(page) - 1]
  const answer = mbtiAnswer[Number(page) - 1]

  const selectAnswer = (selectedItem: AnswerType): void => {
    question.qustionType[0] === selectedItem.type
    console.log('selectedItem', selectedItem)
    console.log('비교', question.qustionType[0] === selectedItem.type)
  }

  useEffect(() => {
    console.log(page + ' 번째', mbtiQuestion[Number(page) - 1])
  })
  // view
  return (
    <div className="h-full flex flex-col justify-between py-12">
      <Progress total={mbtiQuestion.length} current={Number(page)} />
      <Question qustionData={question} />
      <Answer answer={answer} selectAnswer={selectAnswer} />
    </div>
  )
}

export default Step
