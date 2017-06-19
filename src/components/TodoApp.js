import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoApp = () => (
  <div id='wrap-list-todos'>
  	<AddTodo />
  	<VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp