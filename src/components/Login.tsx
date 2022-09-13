import { useToggle, upperFirst } from '@mantine/hooks';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  ButtonProps,
  Center,
  Container

} from '@mantine/core';
import {GoogleIcon} from './google';
import { group } from 'console';

export function GoogleButton(props: ButtonProps) {
    return <Button leftIcon={<GoogleIcon/>} variant="default" color="gray" {...props} />;
  }

export default function Login(props: PaperProps) {
  return (
    <Center>
        <Container px={0} fluid={true}>
    <Paper radius="lg" p="xl" withBorder {...props}>
      <Text size="lg" weight={700}>
        Välkomen till Makerspace, loga in med
      </Text>

      <Group grow mb="lg" mt="lg">
        <GoogleButton radius="xl">Google</GoogleButton>
      </Group>
    </Paper>
    </Container>
    </Center>
  );
}