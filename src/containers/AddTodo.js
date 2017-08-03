import { connect } from 'react-redux'
import { addTodo } from '../actions/todo'
import FormAdd from '../components/todo/FormAdd'

const mapDispatchToProps = {
  onClickAdd: addTodo
}

const mapStateToProps = (state) => ({
  input: null
})
const AddTodo = connect(mapStateToProps, mapDispatchToProps)(FormAdd)


export default AddTodo
