import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import postsReddit from './postsReddit'
import selectedReddit from './selectedReddit'

const todoApp = combineReducers({
	todos,
	visibilityFilter,
	selectedReddit,
	postsReddit
})

export default todoApp
