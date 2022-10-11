
import {
  Text,
  Paper,
  Group,
  PaperProps,
  Center,
  Container

} from '@mantine/core';
import GoogleLogin from './LoginFunctional';

export default function Login(props: PaperProps) {
  console.log("hi")
  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.id = 'oauh2';
  document.body.appendChild(script);
  script.onload = () => { 
      handle()
  };
  const handle = () => {
    GoogleLogin()
  }
  return (
    <>
    <Center>
        <Container px={0} fluid={true}>
    <Paper radius="lg" p="xl" withBorder {...props}>
      <Text size="lg" weight={700}>
        Välkomen till Makerspace
      </Text>

      <Group grow mb="lg" mt="lg">
        <div id="google_sign_in" />
      </Group>
    </Paper>
    </Container>
    </Center>
    </>
  );
}