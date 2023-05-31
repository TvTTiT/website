import React from 'react';
import './notificationsStyles.css';
import Navbar from '../../../navigation/nurseNavbar/Navbar';

const NotificationsScreen = () => {
  const notifications = [
    {
      notification_id: 1,
      patient_id: 1,
      medical_professional_id: 1,
      message: 'Notification 1',
      timestamp: new Date().toLocaleString(),
      priority: 'high',
      notification_type: 'type 1',
      acknowledged: false,
    },
    {
      notification_id: 2,
      patient_id: 2,
      medical_professional_id: 2,
      message: 'Notification 2',
      timestamp: new Date().toLocaleString(),
      priority: 'medium',
      notification_type: 'type 2',
      acknowledged: true,
    },
    // Add more notifications here...
  ];

  const handleRemoveNotification = (notificationId) => {
    // Implement logic to remove the notification from the list
  };

  return (
    <div>
      <Navbar />
      <h2 className="notifications-title">Notifications</h2>
      <div className="notifications-container">
        <div className="notifications-content">
          <div className="notifications-list">
            {notifications.map((notification) => (
              <div key={notification.notification_id} className="notification-item">
                <div className="notification-icon">
                  <i className="fas fa-bell" />
                </div>
                <div className="notification-content">
                  <div className="notification-details">
                    <span className="notification-type">{notification.notification_type}</span>
                    <span className="notification-message">{notification.message}</span>
                  </div>
                  <div className="notification-meta">
                    <span className="notification-timestamp">{notification.timestamp}</span>
                    <span className={`notification-priority ${notification.priority}`}>
                      {notification.priority}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsScreen;
