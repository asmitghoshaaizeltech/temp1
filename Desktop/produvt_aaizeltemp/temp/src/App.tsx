import React, { FC } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
//import { Provider } from "react-redux";
//import { store } from "./src/Store/store/store";
//import PrivateRoute from "./src/component/common/PrivateRoute";
import DashboardPage from "./page/Plotview/Plotview";
import Tabularpage from "./page/Tabularview/Tabularview";
import Metmessage from "./page/Metmessage/Metmessage";
import AuthLayout from "./layout/AuthLayout";
import Signup from "./component/login/signup";
import Login from "./component/login/login";
import NavigationPage from "./page/NavigationPage/NavigationPage";
import AnalyticDashboard from "./page/AnalyticDashboard/AnalyticDashboard";
import FAQpage from "./component/FAQ/faqpage";
import CheckBox from "./page/Checkbox/Checkbox";
import Helppage from "./component/help/helppage";
import UserDetailPage from "./page/User-detail/UserDetail";

const App: FC = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout Component={DashboardPage} />} />
        <Route
          path="/tabular"
          element={<AuthLayout Component={Tabularpage} />}
        />
        <Route
          path="/metmessage"
          element={<AuthLayout Component={Metmessage} />}
        />
        <Route
          path="/analytic"
          element={<AuthLayout Component={AnalyticDashboard} />}
        />
        <Route path="/navigation" element={<NavigationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<FAQpage />} />
        <Route path="/checkbox" element={<CheckBox />} />
        <Route path="/help" element={<Helppage />} />
        <Route path="/user-details" element={<AuthLayout Component={UserDetailPage} />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
