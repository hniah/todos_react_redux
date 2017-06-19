import { connect } from 'react-redux'
import { selectReddit,fetchPostsIfNeeded } from '../actions/reddit'
import RedditApp from '../components/RedditApp'


const mapStateToProps = (state) => {
  const { selectedReddit, postsReddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsReddit[selectedReddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}

const mapDispatchToProps = {
  handleSelectReddit: selectReddit,
  handleRefreshClick: fetchPostsIfNeeded,
}

const Reddit = connect(
  mapStateToProps,
  mapDispatchToProps
  )(RedditApp)

export default Reddit
