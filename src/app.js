import React from 'react'
import Footer from './component/presentational/Footer'
import AddTodo from './component/container/AddTodo'
import VisibleTodoList from './component/container/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
