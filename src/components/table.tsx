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
    console.log(actual_time_left)
    let h = Math.floor(row.time.total  / 3600);
    let m = Math.floor(row.time.total % 3600 / 60);
    let h2 = Math.floor(actual_time_left  / 3600);
    let m2 = Math.floor(actual_time_left % 3600 / 60);
    console.log(h2,m2)
    let time = "0";
    let time2 = "0";
    if (String(m).length === 1){
      time = String(h) + ":0" + String(m)
    }else{
      time = String(h) + ":" + String(m)
    }
    if (String(m2).length === 1){
      time2 = String(h2) + ":0" + String(m2)
    }else{
      time2 = String(h2) + ":" + String(m2)
    }

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
              Time_left: {time2}
            </Text>
            <Text size="xs" weight={700}>
              Total_time: {time}
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