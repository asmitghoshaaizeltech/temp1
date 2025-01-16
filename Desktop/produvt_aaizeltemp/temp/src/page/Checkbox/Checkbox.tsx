import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";
import FAQContent from "./ChecklistTabs";

const CheckBox: React.FC = () => {
  return <AuthLayout Component={FAQContent} />;
};

export default CheckBox;
