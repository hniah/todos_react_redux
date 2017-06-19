import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Picker from './Picker'
import Posts from './Posts'

class RedditApp extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.handleRefreshClick(this.props.selectedReddit)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      this.props.handleRefreshClick(nextProps.selectedReddit)
    }
  }
  render(){
    return (
      <div id='wrap-reddit'>
        <Picker value={this.props.selectedReddit}
                onChange={this.props.handleSelectReddit}
                options={[ 'reactjs', 'frontend' ]} />
        <p>
          {this.props.lastUpdated &&
            <span>
              Last updated at {new Date(this.props.lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          
          <button onClick={() => this.props.handleRefreshClick(this.props.selectedReddit)}>
            Refresh
          </button>
          
        </p>
        {this.props.posts.length === 0
          ? (this.props.isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: this.props.isFetching ? 0.5 : 1 }}>
              <Posts posts={this.props.posts} />
            </div>
        }
      </div>
    )
  }
}

RedditApp.propTypes = {
  selectedReddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  handleSelectReddit: PropTypes.func.isRequired,
  handleRefreshClick: PropTypes.func.isRequired
}

export default RedditApp