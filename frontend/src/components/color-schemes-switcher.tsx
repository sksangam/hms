"use client";

import {
  useMantineColorScheme,
  Menu,
  Button,
  Text,
  Group,
  Anchor,
} from "@mantine/core";

import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconBrightnessUp,
  IconMoon,
  IconDeviceDesktop,
  IconWashDryclean,
  IconWashDrycleanOff,
} from "@tabler/icons-react";

export function ColorSchemesSwitcher() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Dark Mode</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<IconBrightnessUp size={14} />}>
          <Button onClick={() => setColorScheme("light")}>Light</Button>
        </Menu.Item>
        <Menu.Item leftSection={<IconMoon size={14} />}>
          <Button onClick={() => setColorScheme("dark")}>Dark</Button>
        </Menu.Item>
        <Menu.Item leftSection={<IconDeviceDesktop size={14} />}>
          <Button onClick={() => setColorScheme("auto")}>System</Button>
        </Menu.Item>
        <Menu.Item leftSection={<IconWashDrycleanOff size={14} />}>
          <Button onClick={clearColorScheme}>Clear</Button>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
