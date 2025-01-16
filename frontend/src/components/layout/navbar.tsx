import React from "react";
import NavbarProfileMenu from "./navbar-profile-menu";
import { ActionIcon } from "@mantine/core";
import { IconLayoutSidebarLeftCollapse } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <div className="bg-dark-600 h-16 flex items-center justify-between">
      <ActionIcon variant="transparent" aria-label="Settings">
        <IconLayoutSidebarLeftCollapse stroke={2} />
      </ActionIcon>
      <NavbarProfileMenu />
    </div>
  );
};

export default Navbar;
