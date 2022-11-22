import React from 'react'
import { Container} from 'react-bootstrap'
import StackElement from '../components/StackElement'




const NotificationsScreen = () => {

    const notifications = [{
        id: '1',
        type: 'Meeting',
        description: "You have a meeting with doctor",
        time: '25-11-2022',
        action: 'some action',
        timeSent: '23-11-2022'
    },
{       id: '2',
        type: 'Physical activity',
        description: "Remember to take a walk today ",
        time: '26-11-2022',
        action: 'some action',
        timeSent: '21-11-2022'
    },
{       id: '3',
        type: 'Glucose',
        description: "Remember to take your ",
        time: '25-11-2022',
        action: 'some action',
        timeSent: '21-11-2022'
    }]
  return (
    <Container>
        <div className='pageHeader'>
        <h2>Notification Panel</h2>

        </div>
      <div className='stack-container flex flex-c'>
        {notifications.map((notification)=> <StackElement key={notification.id} notification={notification}/>)}
      </div>
      
      

    </Container>
  )
}

export default NotificationsScreen
