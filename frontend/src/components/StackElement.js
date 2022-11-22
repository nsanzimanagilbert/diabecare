import React from 'react'

const StackElement = ({notification}) => {
  return (
            <div className='stack-element'>
                <p>{notification.type}</p>
                <p>{notification.description}</p>
                <p>{notification.action}</p>
                <p>{notification.time}</p>
                
            </div>
  )
}

export default StackElement