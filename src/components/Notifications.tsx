import { useAppSelector } from '../hooks';
import NotificationsList from 'react-notification-system-redux';


function Notifications() {
  const notifications = useAppSelector((state) => state.notifications.notifications)

    const style = {
      NotificationItem: {
        DefaultStyle: {
          margin: '10px 5px 2px 1px'
        },
        success: {
          color: 'red'
        }
      }
    };

    return (
      <NotificationsList notifications={ notifications } style={style} />
    );
  }

export default Notifications