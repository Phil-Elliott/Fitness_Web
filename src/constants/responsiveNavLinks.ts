import { FaHome, FaCog, FaRunning, FaList } from "react-icons/fa"; // Import icons as needed

export const responsiveNavLinks = [
  {
    route: "/dashboard",
    name: "Home",
    icon: FaHome,
  },
  {
    route: "/activity",
    name: "Activity",
    icon: FaRunning,
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
