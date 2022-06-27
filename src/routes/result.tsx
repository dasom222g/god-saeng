import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { resultState } from '../state/dataState'

const Result: FC = () => {
  const result = useRecoilValue(resultState)
  // view
  return (
    <div className="-mb-4 md:-mb-6">
      Result: {result}
    </div>
  )
}

export default Result
