import React, { FC, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Answer from '../components/Answer'
import Progress from '../components/Progress'
import Question from '../components/Question'
import { mbtiAnswer, mbtiQuestion } from '../data/response'
import { AnswerType, CategoryType, IndicatorType, ResultType } from '../lib/type'
import { resultState } from '../state/dataState'

const useQuery = (): URLSearchParams => {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

const Step: FC = () => {
  const page = useQuery().get('page')
  const question = mbtiQuestion[Number(page) - 1]
  const answer = mbtiAnswer[Number(page) - 1]

  const [result, setResult] = useRecoilState(resultState)

  const accResultData = (targetItem: ResultType, selectedType: CategoryType): ResultType[] => {
    const resultData = result.map((item) => {
      if (item.qustionType === targetItem.qustionType) {
        const value = targetItem.resultValue[question.firstType]
        return {
          ...item,
          resultValue: {
            [question.firstType]:
              targetItem.firstType === selectedType
                ? (value as number) + 1
                : targetItem.resultValue[question.firstType],
          },
        }
      }
      return item
    })
    console.log('resultData', resultData, 'selectedType', selectedType)
    return resultData
  }

  const selectAnswer = (selectedItem: AnswerType, questionType: IndicatorType): void => {
    const initialData: ResultType = {
      qustionType: question.qustionType,
      firstType: question.firstType,
      lastType: question.lastType,
      resultValue: {
        [question.firstType]: selectedItem.type === question.firstType ? 1 : 0,
      },
    }
    console.log('result!!', result.length)
    const isExistItem = result.find((item) => item.qustionType === questionType)
    const realData = isExistItem
      ? accResultData(isExistItem, selectedItem.type)
      : [...result, initialData]
    console.log('realData', realData)
    setResult(realData)
  }

  useEffect(() => {
    console.log('result', result)
  }, [result])

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
