import React, { FC, useState, useEffect } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import "font-awesome/css/font-awesome.min.css";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotificationSystem from "./NotificationSystem";

const Navbar: FC = function () {
  const location = useLocation();
  const [notificationCount, setNotificationCount] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to get the initial tab index based on the current path
  const getInitialTabIndex = (pathname: string) => {
    switch (pathname) {
      case "/":
        return 0;
      case "/tabular":
        return 1;
      case "/metmessage":
        return 2;
      case "/analytic":
        return 3;
      default:
        return 0;
    }
  };

  const [selectedIndex, setSelectedIndex] = useState(() =>
    getInitialTabIndex(location.pathname)
  );

  // Update selectedIndex when the route changes
  useEffect(() => {
    setSelectedIndex(getInitialTabIndex(location.pathname));
  }, [location.pathname]);

  const alerts = [
    "System Update Required",
    "Security Alert: Suspicious login attempt",
  ];
  const notifications = [
    "New comment on your post",
    "Your order has been shipped",
  ];

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flex justify-between items-center px-4 py-1  bg-blue-300 shadow-md">
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="relative flex  rounded-xl bg-blue-300/20 p-0">
          <span
            className="absolute top-1 bottom-1 left-1 h-[calc(100%-0.5rem)] w-[calc(25%-0.5rem)] rounded-lg bg-white transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${selectedIndex * 105.3}%)`,
            }}
          />

          <Tab as={Link} to="/" className="navbarTab">
            Plot View
          </Tab>
          <Tab as={Link} to="/tabular" className="navbarTab">
            Tabular View
          </Tab>
          <Tab as={Link} to="/metmessage" className="navbarTab">
            MET Format
          </Tab>
          <Tab as={Link} to="/analytic" className="navbarTab">
            Analytic Dashboard
          </Tab>
        </TabList>
      </TabGroup>

      {/* Rest of your navbar code remains the same */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <NotificationSystem />
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-80 rounded-md shadow-lg p-4">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-lg font-semibold">Notifications</h3>
                <button onClick={toggleModal} className="text-gray-600">
                  X
                </button>
              </div>
              <div className="mt-2">
                <h4 className="text-md font-medium">Alerts</h4>
                <ul className="list-disc pl-5 mt-2">
                  {alerts.map((alert, index) => (
                    <li key={index} className="text-gray-700">
                      {alert}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-md font-medium">Notifications</h4>
                <ul className="list-disc pl-5 mt-2">
                  {notifications.map((notification, index) => (
                    <li key={index} className="text-gray-700">
                      {notification}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <Menu as="div" className="relative">
          <MenuButton>
            <i
              className="fa fa-question"
              style={{ fontSize: 25, paddingLeft: 10 }}
            ></i>
          </MenuButton>
          <MenuItems className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/faq"
                  className={`block px-4 py-2 text-gray-700 ${
                    active ? "bg-blue-100" : ""
                  }`}
                >
                  FAQ
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/help"
                  className={`block px-4 py-2 text-gray-700 ${
                    active ? "bg-orange-300" : ""
                  }`}
                >
                  Help
                </Link>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>

        <Menu as="div" className="relative">
          <MenuButton>
            <i
              className="fa fa-user-circle"
              style={{ fontSize: 25, paddingRight: 40, paddingLeft: 10 }}
            ></i>
          </MenuButton>

          <MenuItems className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/user-details"
                  className={`block px-4 py-2 text-gray-700 ${
                    active ? "bg-blue-100" : ""
                  }`}
                >
                  User Details
                </Link>
              )}
            </MenuItem>

            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => {
                    // Add logout functionality here
                  }}
                  className={`block w-full text-left px-4 py-2 text-gray-700 ${
                    active ? "bg-blue-100" : ""
                  }`}
                >
                  Logout
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
