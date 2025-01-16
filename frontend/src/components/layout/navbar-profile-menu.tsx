"use client";

import { forwardRef } from "react";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconLogout2,
  IconLogout,
} from "@tabler/icons-react";
import {
  Group,
  Avatar,
  Text,
  Menu,
  UnstyledButton,
  Button,
  Anchor,
} from "@mantine/core";
import Link from "next/link";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string;
  name: string;
  email: string;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: "var(--mantine-spacing-md)",
        color: "var(--mantine-color-text)",
        borderRadius: "var(--mantine-radius-sm)",
      }}
      {...others}
    >
      <Group>
        <div style={{ flex: 1 }}>
          <Text size="sm" c={"blue"} fw={500}>
            {name}
          </Text>

          <Text c="dimmed" size="xs">
            {email}
          </Text>
        </div>

        <Avatar src={image} radius="xl" alt="it's me" />
      </Group>
    </UnstyledButton>
  ),
);

const NavbarProfileMenu = () => {
  return (
    <Menu withArrow>
      <Menu.Target>
        <UserButton
          image="avatar.png"
          name="Subhash Kumar"
          email="subhash@gmail.com"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>Gallery</Menu.Item>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<IconArrowsLeftRight size={14} />}>
          Transfer my data
        </Menu.Item>
        <Menu.Item color="red" leftSection={<IconLogout size={14} />}>
          <Link href={"/"}>Logout</Link>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavbarProfileMenu;
