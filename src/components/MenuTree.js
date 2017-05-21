import React from 'react'

const MenuTree = ({tree,onClick}) => (
  <ul>
    {tree.map(node => (
      <li><a onClick={
        (e) => {
          e.preventDefault()
          onClick(node)
        }
      }>{node.name}</a></li>
    ))}
  </ul>
)

export default MenuTree
