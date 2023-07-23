import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { icons } from '../icon';
import { useState } from 'react';
import Input from './input';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`;
const Contents = styled.Text`
  flex: 1;
  font-size: 20px;
  color: ${({ theme, isCompleted }) => (isCompleted ? theme.done : theme.text)};
  text-decoration-line: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
`;

const Task = ({ item, deleteTask, toggleTask, updateTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(item.text);

  const _onSubmit = () => {
    if (isEdit) {
      setIsEdit(false);
      updateTask({
        ...item,
        text,
      });
    }
  };

  return isEdit ? (
    <Input
      value={text}
      onChangeText={(text) => setText(text)}
      onSubmitEditing={_onSubmit}
      onBlur={() => {
        setText(item.text);
        setIsEdit(false);
      }}
    />
  ) : (
    <Container>
      <IconButton
        icon={item.isCompleted ? icons.check : icons.unCheck}
        item={item}
        onPress={toggleTask}
      ></IconButton>
      <Contents isCompleted={item.isCompleted}>{item.text}</Contents>
      {!item.isCompleted && (
        <IconButton
          icon={icons.edit}
          onPress={() => setIsEdit(true)}
        ></IconButton>
      )}
      <IconButton
        icon={icons.delete}
        item={item}
        onPress={deleteTask}
      ></IconButton>
    </Container>
  );
};

Task.prototype = {
  item: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default Task;
