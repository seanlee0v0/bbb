import React from 'react'
import MenuTree from './MenuTree'
const Home = () => (
  <div>
    Welcome Home!
    <MenuTree tree={[{name:"M1"},{name:"M2"}]} onClick={(node) => {console.log(node)}}/>
  </div>
)


export default Home
