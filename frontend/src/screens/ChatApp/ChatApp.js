import React from 'react'
import "./ChatApp.scss"
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'

const ChatApp = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default ChatApp