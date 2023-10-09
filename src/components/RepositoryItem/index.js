// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = details

  return (
    <li className="card">
      <img src={avatarUrl} alt={name} />
      <h1 className="heading">{name}</h1>
      <div className="container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="text">{starsCount}</p>
      </div>
      <div className="container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="text">{forksCount}</p>
      </div>
      <div className="container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
        />
        <p className="text">{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
