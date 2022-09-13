import { createStyles, Table, Progress, Anchor, Text, ScrollArea, Portal, Center, Group } from '@mantine/core';
import { group } from 'console';
import { textState } from '../App';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';




const useStyles = createStyles((theme) => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `3px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    },
  },
}));


export default function TableReviews() {
  const { classes, theme } = useStyles();
  const [text, setText] = useRecoilState(textState);
  const rows = text.map((row) => {
    const time_left = (row.time.current / row.time.total) * 100;
    const total_time =  100 - time_left 
    const total = row.time.total;
    const actual_time_left = total -row.time.current 

    return (
      <tr key={row.title}>
        <td >
        <Center>
            {row.title}
            </Center>
        </td>

        <td><Center>{row.year}</Center></td>

        <td><Center>
            {row.author}
            </Center>
        </td>
        <td>
          <Group position="apart">
            <Text size="xs" weight={700}>
              Time_left: {actual_time_left.toFixed(0)}
            </Text>
            <Text size="xs" weight={700}>
              Total_time: {total.toFixed(0)}
            </Text>
          </Group>
          <Progress
            classNames={{ bar: classes.progressBar }}
            sections={[
              {
                value: time_left,
                color: theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[6],
              },
              {
                value: total_time,
                color: theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[6],
              },
            ]}
          />
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea >
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs" highlightOnHover>
        <thead>
          <tr>
            <th>
                <Text align='center'>
                Printer_name
                </Text>
                </th>
            <th>
            <Text align='center'>
            Status
            </Text>
            </th>
            <th>            
            <Text align='center'>
            Material
            </Text></th>
            <th>            <Text align='center'>
            Time
            </Text></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}