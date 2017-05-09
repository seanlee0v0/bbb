import React,{PropTypes} from 'react'

const Link = ({active,childre,onClick}) => {
  if(active){
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={(e) => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}
Link.propTypes = {
  active: PropTypes.bool.isRquired,
  children: PropTypes.node.isRquired,
  onClick: PropTypes.func.isRquired
}

export default Link
