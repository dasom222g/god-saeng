import React, { FC, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Answer from '../components/Answer'
import Question from '../components/Question'
import { mbtiAnswer, mbtiQuestion } from '../data/response'

const useQuery = (): URLSearchParams => {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

const Step: FC = () => {
  const page = useQuery().get('page')
  const question = mbtiQuestion[Number(page) - 1]
  const answer = mbtiAnswer[Number(page) - 1]

  useEffect(() => {
    // mbtiQuestion[Number(page)]
    console.log(page + ' 번째', mbtiQuestion[Number(page) - 1])
  })
  // view
  return (
    <div className="-mb-4 md:-mb-6">
      <Question qustionData={question} />
      <Answer answer={answer} />
    </div>
  )
}

export default Step
