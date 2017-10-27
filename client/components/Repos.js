import React, { Component } from 'react'
import Repo from './Repo'
class Repos extends Component {
  componentDidMount() {
    if (this.props.repos.size === 0) this.props.refreshFeed()
  }

  repoList = repos => {
    return <ul>{repos.map(repo => <Repo repo={repo} />)}</ul>
  }

  loadingState = fetching => {
    const text = fetching ? 'Gathering data...' : 'No repositories to show'
    return (
      <div className="panel center">
        <h2>
          {text}
          {fetching && <div className="loader" />}
        </h2>
      </div>
    )
  }

  render() {
    const { repos, fetchingRepos } = this.props
    return (
      <div>
        {this.props.repos.size === 0
          ? this.loadingState(fetchingRepos)
          : this.repoList(repos)}
      </div>
    )
  }
}

export default Repos
