import React, { FC, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { resultMbtiState, resultState } from '../state/dataState'

const Result: FC = () => {
  const result = useRecoilValue(resultState)
  const [resultMbti, setResultMbti] = useRecoilState(resultMbtiState)

  useEffect(() => {
    const sortData = [...result].sort((a, b) => a.qustionCode - b.qustionCode)
    const mbti = sortData.reduce(
      (acc, current) =>
        (current.resultValue[current.firstType] as number) > 1
          ? acc + current.firstType
          : acc + current.lastType,
      '',
    )
    setResultMbti(mbti)
  }, [result, setResultMbti])
  // view
  return <div className="-mb-4 md:-mb-6">MBTI: {resultMbti}</div>
}

export default Result
