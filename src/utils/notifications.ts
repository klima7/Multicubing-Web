import * as notificationsRedux from 'react-notification-system-redux';
import * as notifications from 'react-notification-system';

export type Notification = notifications.Notification;

export function show(opts: notifications.Notification, level: notificationsRedux.NotificationLevel) {
  const opts2: notifications.Notification = {
    autoDismiss: 8,
    position: 'bl',
    ...opts
  };
  return notificationsRedux.show(opts2, level);
}