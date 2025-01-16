import {
  IconCalendarCheck,
  IconLayoutGrid,
  IconMoodHeart,
  IconStethoscope,
  IconVaccine,
} from "@tabler/icons-react";
import React from "react";

export type SidebarLinkProps = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

export const links = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: <IconLayoutGrid stroke={2} />,
  },
  {
    name: "Doctors",
    url: "/doctors",
    icon: <IconStethoscope stroke={2} />,
  },
  {
    name: "Patients",
    url: "/patients",
    icon: <IconMoodHeart stroke={2} />,
  },
  {
    name: "Appointments",
    url: "/appointments",
    icon: <IconCalendarCheck stroke={2} />,
  },
  {
    name: "Pharmacy",
    url: "/pharmacy",
    icon: <IconVaccine stroke={2} />,
  },
];
