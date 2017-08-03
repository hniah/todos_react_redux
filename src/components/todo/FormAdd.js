import React from 'react'

const FormAdd = ({input, onClickAdd}) => (
  <div>
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      onClickAdd(input.value)
      input.value = ''
    }}>
      <input ref={node => {input = node}} />

      <button type="submit">Add Todo</button>
    </form>
  </div>
)


export default FormAdd