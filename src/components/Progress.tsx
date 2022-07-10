import React, { FC } from 'react'
// import { ImFire } from 'react-icons/im'
// import { FaDove } from 'react-icons/fa'

interface ProgressProp {
  total: number
  current: number
}

const Progress: FC<ProgressProp> = ({ total, current }) => {
  const coordinate = (100 / total) * current
  return (
    <>
      <div className="w-full h-5 bg-white border-2 rounded-xl border-god-gray shadow-lg relative">
        {/* <ImFire size={30} className="absolute top-1/2 transform  -translate-y-1/2 text-god-red" /> */}
        <div
          className="transition-all"
          style={{ transform: `translateX(calc(${coordinate}% - 20px))` }}>
          <img
            src="./images/progress.png"
            className="w-9 absolute top-1/2 transform -translate-y-1/2"
            alt="fire"
          />
        </div>
        <div className="block w-full h-full rounded-xl overflow-hidden">
          <span
            className="block h-full bg-god-light-coral"
            style={{ width: `${coordinate}%` }}></span>
        </div>
      </div>
    </>
  )
}

export default Progress
