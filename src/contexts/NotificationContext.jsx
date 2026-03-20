import { createContext, useContext, useState } from "react";

// creo il context
const NotificationContext = createContext();

// stato iniziale della notifica
const notificationInitialState = {
  visible: false,
  message: "",
  type: "primary",
};

// tipi di notifica accettati
const acceptedTypes = ["info", "warning", "success", "danger", "primary"];

// creo il provider
const NotificationContextProvider = ({ children }) => {
  const [notification, setNotification] = useState(notificationInitialState);

  // funzione per mostrare la notifica
  const showNotification = (message, type = "primary") => {
    if (!message) {
      message = "Unknown error";
      type = "danger";
    } else if (!acceptedTypes.includes(type)) {
      type = "primary";
    }
    setNotification({
      visible: true,
      message,
      type,
    });
  };

  // funzione per nascondere la notifica
  const hideNotification = () => {
    setNotification(notificationInitialState);
  };

  // valore del context
  const value = { notification, showNotification, hideNotification };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

// hook per usare il context
const useNotificationContext = () => {
  return useContext(NotificationContext);
};

export { NotificationContextProvider, useNotificationContext };
