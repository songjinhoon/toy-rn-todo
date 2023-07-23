import { StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Input from './component/input';
import { useState } from 'react';
import Task from './component/Task';
import task from './component/Task';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const width = Dimensions.get('window').width;
  const tempData = {
    1: {
      id: '1',
      text: 'React Native',
      isCompleted: false,
    },
    2: {
      id: '2',
      text: 'Expo',
      isCompleted: false,
    },
    3: {
      id: '3',
      text: 'Javascript',
      isCompleted: false,
    },
  };
  const [tasks, setTasks] = useState(tempData);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.length === 0) {
      return false;
    }
    const id = Date.now().toString();
    const task = {
      [id]: {
        id,
        text: newTask,
        isCompleted: false,
      },
    };
    setTasks({ ...tasks, ...task });
    setNewTask('');
  };

  const deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  const toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id].isCompleted = !currentTasks[id].isCompleted;
    setTasks(currentTasks);
  };

  const updateTask = (item) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    setTasks(currentTasks);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={theme.background}
        ></StatusBar>
        <Title>TODO List</Title>
        <Input
          placeholder={'+ Add a task!'}
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          onSubmitEditing={addTask}
          onBlur={() => setNewTask('')}
        ></Input>
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item) => (
              <Task
                key={item.id}
                item={item}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                updateTask={updateTask}
              />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}
