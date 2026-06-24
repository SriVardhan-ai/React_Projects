import React from 'react'
import Left from './components/Left'
import Right from './components/Right'
import bgimg from './assets/bgimg.jpg'
const App = () => {
  return (
    <div
  className="h-screen bg-cover bg-center relative"
  style={{ backgroundImage: `url(${bgimg})` }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/10"></div>

  <div className="relative z-10 flex h-full">
    <Left/>
    <Right />
  </div>
</div>
  )
}

export default App