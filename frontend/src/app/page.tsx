import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import {
  Anchor,
  AppShell,
  AppShellHeader,
  AppShellMain,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Text,
  Title,
} from "@mantine/core";
import {
  IconDashboard,
  IconLogin2,
  IconSkateboarding,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Group className="h-full px-md">
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="logo"
            width={100}
            height={100}
          />

          <Anchor component={Link} href="/login">
            <Button
              rightSection={<IconLogin2 size={14} />}
              variant="outline"
              color="orange"
            >
              Login
            </Button>
          </Anchor>

          <Anchor component={Link} href="/register">
            <Button
              rightSection={<IconSkateboarding size={14} />}
              variant="outline"
            >
              Register
            </Button>
          </Anchor>

          <Anchor component={Link} href="/dashboard">
            <Button
              rightSection={<IconDashboard size={14} />}
              variant="outline"
              color="green"
            >
              Dashboard
            </Button>
          </Anchor>

          <ColorSchemesSwitcher />
        </Group>
      </AppShellHeader>
      <AppShellMain>
        <Container>
          <Flex
            gap="xl"
            justify="flex-center"
            align="flex-center"
            direction="row"
          >
            <div className="w-100">
              <Title className="text-center mt-20">
                Streamlining Healthcare with{" "}
                <div
                  style={{
                    backgroundColor: "orange",
                    display: "inline-block",
                    padding: "0 0.4rem",
                    marginRight: "0.1rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  <Text
                    inherit
                    variant="gradient"
                    component="span"
                    gradient={{ from: "grape", to: "red" }}
                  >
                    Vitals
                  </Text>
                </div>
                {""}
                <Text
                  inherit
                  variant="gradient"
                  component="span"
                  gradient={{ from: "blue", to: "green" }}
                >
                  Hub
                </Text>
              </Title>
              <Text
                className="text-center text-gray-700 dark:text-gray-300 max-w-[500px] mx-auto mt-xl"
                ta="center"
                size="lg"
                maw={580}
                mx="auto"
                mt="xl"
              >
                Streamline hospital operations and enhance patient care with our
                comprehensive hospital management system. From scheduling to
                reporting, VitalsHub empowers healthcare providers with
                innovative tools for seamless coordination, improved efficiency,
                and better outcomes.
              </Text>
            </div>

            <Image
              src="/logo/vitalshub-full-logo.png"
              alt="vitals logo full image"
              width={500}
              height={500}
            />
          </Flex>
        </Container>
      </AppShellMain>
    </AppShell>
  );
}
