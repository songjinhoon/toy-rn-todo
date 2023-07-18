import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Input from './component/input';
import { useState } from 'react';

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

export default function App() {
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    alert(newTask);
    setNewTask('');
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
        ></Input>
      </Container>
    </ThemeProvider>
  );
}
