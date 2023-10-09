import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    fetchedData: [],
    activeId: 'ALL',
    isLoading: true,
  }

  componentDidMount() {
    this.fetchData()
  }

  failureView = () => (
    <div className="failure-container">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <p className="failure-text">Something Went Wrong</p>
    </div>
  )

  fetchData = async () => {
    const {activeId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      const array = data.popular_repos
      const formattedData = array.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      if (response.status === 401) {
        this.failureView()
      }
      this.setState({fetchedData: formattedData, isLoading: false})
    }
  }

  changeActiveId = currentActiveId => {
    this.setState({activeId: currentActiveId}, this.fetchData)
  }

  renderRepositoryItem = () => {
    const {fetchedData} = this.state

    return (
      <ul className="Container">
        {fetchedData.map(each => (
          <RepositoryItem details={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, activeId} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="options-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              eachItem={each}
              key={each.id}
              activeId={activeId}
              isActive={activeId === each.id}
              changeActiveId={this.changeActiveId}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          this.renderRepositoryItem()
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
