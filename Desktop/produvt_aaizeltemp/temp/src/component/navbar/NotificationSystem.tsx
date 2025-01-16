import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCheck,
  faStar,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "New comment on your post",
      type: "notification",
      read: false,
      important: false,
    },
    {
      id: 2,
      text: "Your order has been shipped",
      type: "notification",
      read: false,
      important: false,
    },
    {
      id: 3,
      text: "System Update Required",
      type: "alert",
      read: false,
      important: true,
    },
    {
      id: 4,
      text: "Security Alert: Suspicious login attempt",
      type: "alert",
      read: false,
      important: true,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleAcknowledge = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleToggleImportant = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, important: !notification.important }
          : notification
      )
    );
  };

  const handleMarkUnread = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: false } : notification
      )
    );
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const getFilteredNotifications = (type) => {
    let filtered = notifications.filter((n) => n.type === type);

    switch (filter) {
      case "unread":
        return filtered.filter((n) => !n.read);
      case "important":
        return filtered.filter((n) => n.important);
      default:
        return filtered;
    }
  };

  const NotificationList = ({ type, bgColor, titleColor, title }) => (
    <div className="flex-1">
      <h4 className={`text-lg font-medium ${titleColor}`}>{title}</h4>
      <ul className="mt-2 space-y-2 max-h-[400px] overflow-y-auto">
        {getFilteredNotifications(type).map((item) => (
          <li
            key={item.id}
            className={`flex items-center justify-between p-2 ${bgColor} rounded-lg`}
          >
            <span
              className={`text-gray-700 ${item.read ? "text-gray-400" : ""}`}
            >
              {item.text}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleToggleImportant(item.id)}
                className={`text-yellow-500 hover:text-yellow-600 ${
                  item.important ? "opacity-100" : "opacity-50"
                }`}
                title={
                  item.important ? "Remove from important" : "Mark as important"
                }
              >
                <FontAwesomeIcon icon={item.important ? faStar : farStar} />
              </button>
              {item.read ? (
                <button
                  onClick={() => handleMarkUnread(item.id)}
                  className="text-blue-600 hover:text-blue-700"
                  title="Mark as unread"
                >
                  <FontAwesomeIcon icon={faRotateLeft} />
                </button>
              ) : (
                <button
                  onClick={() => handleAcknowledge(item.id)}
                  className="text-green-600 hover:text-green-700"
                  title="Mark as read"
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="relative">
      {/* Bell Icon with Notification Count */}
      <div className="cursor-pointer" onClick={toggleModal}>
        <FontAwesomeIcon icon={faBell} className="text-2xl" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[800px]">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-xl font-semibold">Notifications</h3>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Filter Controls */}
            <div className="flex gap-2 mt-3 border-b pb-3">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "all" ? "bg-gray-200" : "bg-gray-100"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("unread")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "unread" ? "bg-blue-200" : "bg-gray-100"
                }`}
              >
                Unread
              </button>
              <button
                onClick={() => setFilter("important")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "important" ? "bg-yellow-200" : "bg-gray-100"
                }`}
              >
                Important
              </button>
            </div>

            {/* Side by Side Layout */}
            <div className="mt-4 flex gap-6">
              <NotificationList
                type="notification"
                bgColor="bg-blue-50"
                titleColor="text-blue-600"
                title="Notifications"
              />
              <div className="w-px bg-gray-200" /> {/* Vertical Divider */}
              <NotificationList
                type="alert"
                bgColor="bg-red-50"
                titleColor="text-red-600"
                title="Alerts"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;
