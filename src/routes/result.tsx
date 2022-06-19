import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Result: FC = () => {
  const { t } = useTranslation()
  // view
  return <div className="-mb-4 md:-mb-6">{t('hello')}</div>
}

export default Result