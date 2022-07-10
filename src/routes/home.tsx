import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const Home: FC = () => {
  // view
  return (
    <div className="-mb-4 md:-mb-6">
      <div className="text-center">
        <p className="text-god-brown py-1">갓생 지수 테스트</p>
        <p className="text-gray-700 text-3xl font-bold py-1">나의 갓생 유형은?</p>
      </div>
      <div className="text-center py-8">
        <img src="./images/god2.png" alt="가보자고" />
      </div>
      <div className="text-center bg-god-mint rounded-xl">
        <Link to="/step?page=1" className="text-white font-bold px-6 py-2 inline-flex items-center justify-center">
          <IoIosArrowForward size="16" className="inline-block" />
          <span className="inline-block px-2">갓생 유형 START</span>
        </Link>
      </div>
    </div>
  )
}

export default Home
