import { FaHome, FaCog, FaList } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

export const responsiveNavLinks = [
  {
    route: "/dashboard",
    name: "Home",
    icon: FaHome,
  },
  {
    route: "/exercises",
    name: "Exercises",
    icon: FiActivity,
  },
  {
    route: "/routines",
    name: "Routines",
    icon: FaList,
  },
  {
    route: "/settings",
    name: "Settings",
    icon: FaCog,
  },
];
