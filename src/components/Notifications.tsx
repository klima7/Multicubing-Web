import { useAppSelector } from '../utils/hooks';
import NotificationsList from 'react-notification-system-redux';
import { Style } from 'react-notification-system'
import { useTheme } from '@emotion/react';


function Notifications() {
  const theme = useTheme() as any;
  const notifications = useAppSelector((state) => state.notifications)

    const style: Style = {
      Containers: {
        DefaultStyle: {},
        tr: {
          marginTop: '70px',
        },
        tl: {
          marginTop: '70px',
        }
      },
      NotificationItem: {
        DefaultStyle: {
          backgroundColor: theme.palette.background.paper,
          borderStyle: 'solid',
          borderWidth: '2px',
          borderColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
          cursor: "default",
        },
        success: {
          borderColor: '#5EA400',
        },
        error: {
          borderColor: '#EC3D3D',
        },
        warning: {
          borderColor: '#EBAD1A',
        },
        info: {
          borderColor: '#369CC7',
        }
      },
      Title: {
        DefaultStyle: {
          color: theme.palette.text.primary,
        }
      },
      Dismiss: {
        DefaultStyle: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }
      },
      Action: {
        DefaultStyle: {
          cursor: "pointer",
        }
      }
    };

    return (
      <div style={{position: 'absolute'}}>
        <NotificationsList notifications={notifications} style={style} key={theme.palette.mode}/>
      </div>
    );
  }

export default Notifications