import React, { FC } from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLanguage } from '@fortawesome/free-solid-svg-icons'
// import { useTranslation } from 'react-i18next'
// import { languages, Languages, initLanguage } from '../../lang/i18n'

const Header: FC = () => {
  // const { t, i18n } = useTranslation()
  // const [lang, setLang] = useState<Languages>(
  //   Object.values(languages).find((language) => language !== initLanguage) ?? 'en',
  // )

  // const handleChangeLanguage = (lang: Languages): void => {
  //   setLang(Object.values(languages).find((language) => language !== lang) ?? 'en')
  //   i18n.changeLanguage(lang)
  // }

  return (
    <div className="flex justify-center py-6">
      <div className="w-4/6 max-w-xs">
        <Link to="/">
          <img src="./images/logo.png" alt="logo" />
        </Link>
      </div>
      {/* <button
        type="button"
        className="font-bold text-lg flex items-center ml-auto"
        key={lang}
        onClick={() => handleChangeLanguage(lang)}>
        <span className="block text-gray-100 mr-2 text-2xl">
          <FontAwesomeIcon icon={faLanguage} />
        </span>
        {t(`${lang}`)}
      </button> */}
    </div>
  )
}

export default Header
