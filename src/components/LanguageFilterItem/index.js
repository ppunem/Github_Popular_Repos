// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachItem, isActive, changeActiveId} = props
  const {id, language} = eachItem
  const activeBtn = isActive ? 'active-btn' : ''

  const changeActiveBtn = () => {
    changeActiveId(id)
  }

  return (
    <li>
      <button
        onClick={changeActiveBtn}
        className={`language-button ${activeBtn}`}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
