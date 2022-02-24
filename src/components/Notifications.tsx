import { useAppSelector } from '../utils/hooks';
import NotificationsList from 'react-notification-system-redux';
import { Style } from 'react-notification-system'


function Notifications() {
  const notifications = useAppSelector((state) => state.notifications)

    const style: Style = {
      NotificationItem: {
        DefaultStyle: {
          margin: '10px 5px 2px 1px'
        },
      },
      Containers: {
        DefaultStyle: {},
        tr: {
          marginTop: '70px',
        }
      }
    };

    return (
      <div style={{position: 'absolute'}}>
        <NotificationsList notifications={notifications} style={style} />
      </div>
    );
  }

export default Notifications