import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Card,
  Group,
  Center,
  Title,
} from "@mantine/core";

const LoginPage: React.FC = () => {
  return (
    <Card
      shadow="lg"
      padding="xl"
      radius="md"
      className="bg-white max-w-md w-full"
    >
      <Title order={2} className="mb-5">
        Login
      </Title>
      <form>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          required
          className="mb-4"
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          required
          className="mb-6"
        />
        <Group className="mt-4">
          <Button type="submit" color="blue" fullWidth>
            Login
          </Button>
        </Group>
      </form>
    </Card>
  );
};

export default LoginPage;
