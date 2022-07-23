import React, { FC, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Answer from '../components/Answer'
import Progress from '../components/Progress'
import Question from '../components/Question'
import { mbtiAnswer, mbtiQuestion } from '../data/response'
import { AnswerType, CategoryType, ResultType } from '../lib/type'
import { resultState } from '../state/dataState'

const useQuery = (): URLSearchParams => {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

const Step: FC = () => {
  const page = useQuery().get('page')
  const question = mbtiQuestion[Number(page) - 1]
  const answer = mbtiAnswer[Number(page) - 1]

  const [result] = useRecoilState(resultState)

  const addItem = (targetItem: ResultType, selectedType: CategoryType): ResultType => {
    return {
      ...targetItem,
      resultValue: {
        [question.firstType]: selectedType === question.firstType ? targetItem.resultValue[question.firstType] : targetItem.resultValue[question.firstType],
      },
    }
  }

  const selectAnswer = (selectedItem: AnswerType): void => {
    const initialData: ResultType = {
      qustionType: question.qustionType,
      firstType: question.firstType,
      lastType: question.lastType,
      resultValue: {
        [question.firstType]: selectedItem.type === question.firstType ? 1 : 0,
      },
    }
    console.log('initialData', initialData)
    const realData: ResultType[] = !result.length
      ? [...result, initialData]
      : result.map((item) => (item.qustionType === question.qustionType ? addItem(item, selectedItem.type) : initialData))

    console.log('realData', realData)

    // const r = [
    //   {
    //     qustionType: 'EI',
    //     firstType: 'E',
    //     lastType: 'I',
    //     resultValue: {
    //       E: 1
    //     }
    //   },
    //   {
    //     qustionType: 'TF',
    //     firstType: 'T',
    //     lastType: 'F',
    //     resultValue: {
    //       T: 1
    //     }
    //   },
    // ]
  }

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
