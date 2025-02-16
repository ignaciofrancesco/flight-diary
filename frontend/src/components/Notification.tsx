import { NotificationImportance, NotificationType } from "../utils/types";

interface NotificationProps {
  notification: NotificationType;
}

const Notification = (props: NotificationProps) => {
  const { notification } = props;

  if (!notification.message) {
    return null;
  }

  const style = {
    color:
      notification.importance === NotificationImportance.Success
        ? "green"
        : "red",
    marginBottom: "1rem",
  };

  return <div style={style}>{notification.message}</div>;
};

export default Notification;
