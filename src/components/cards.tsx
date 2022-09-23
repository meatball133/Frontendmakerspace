import { createStyles, Text, Card, RingProgress, Group } from '@mantine/core';
import { textState } from '../App';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';





const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1,
  },

  lead: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1,
  },

  inner: {
    display: 'flex',

    [theme.fn.smallerThan(350)]: {
      flexDirection: 'column',
    },
  },

  ring: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',

    [theme.fn.smallerThan(350)]: {
      justifyContent: 'center',
      marginTop: theme.spacing.md,
    },
  },
}));


export default function StatsRingCard() {
const [text, setText] = useRecoilState(textState);
  const { classes, theme } = useStyles();
  const items = text.map((stat) => (
    <div key={stat.title}>
      <Text className={classes.label}>{stat.year}</Text>
      <Text size="xs" color="dimmed">
        {stat.title}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>
        <div>
          <Text size="xl" className={classes.label}>
            hej
          </Text>
          <div>
            <Text className={classes.lead} mt={30}>
              då
            </Text>
            <Text size="xs" color="dimmed">
              Completed
            </Text>
          </div>
          <Group mt="lg">{items}</Group>
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[{ value: (100 / 80) * 100, color: theme.primaryColor }]}
            label={
              <div>
                <Text align="center" size="lg" className={classes.label} sx={{ fontSize: 22 }}>
                  {((100 / 80) * 100).toFixed(0)}%
                </Text>
                <Text align="center" size="xs" color="dimmed">
                  Completed
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}