import React, { FC, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { resultMbtiState, resultState } from '../state/dataState'

const Result: FC = () => {
  const result = useRecoilValue(resultState)
  const [resultMbti, setResultMbti] = useRecoilState(resultMbtiState)

  const handleShare = (): void => {
    // TODO: 공유하기 구현
  }
  useEffect(() => {
    // FIXME: 새로운 함수에 정의하기
    const sortData = [...result].sort((a, b) => a.qustionCode - b.qustionCode)
    const mbti = sortData.reduce(
      (acc, current) =>
        (current.resultValue[current.firstType] as number) > 1
          ? acc + current.firstType
          : acc + current.lastType,
      '',
    )
    console.log('🚀 : mbti', mbti)
    setResultMbti(mbti)
  }, [result, setResultMbti])

  // view
  return (
    <div className="-mb-4 md:-mb-6">
      <div>MBTI result:{resultMbti}</div>
      <div>
        <button type="button" onClick={handleShare}>
          공유하기
        </button>
      </div>
    </div>
  )
}

export default Result
